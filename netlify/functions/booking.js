const crypto = require("node:crypto");

const GOOGLE_TOKEN_URL = "https://oauth2.googleapis.com/token";
const GOOGLE_CALENDAR_SCOPE = "https://www.googleapis.com/auth/calendar";
const VIENNA_TIMEZONE = "Europe/Vienna";

function base64UrlEncode(input) {
  return Buffer.from(input)
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}

function createGoogleJwt(clientEmail, privateKey) {
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: "RS256", typ: "JWT" };
  const payload = {
    iss: clientEmail,
    scope: GOOGLE_CALENDAR_SCOPE,
    aud: GOOGLE_TOKEN_URL,
    iat: now,
    exp: now + 3600
  };

  const encodedHeader = base64UrlEncode(JSON.stringify(header));
  const encodedPayload = base64UrlEncode(JSON.stringify(payload));
  const unsigned = encodedHeader + "." + encodedPayload;

  const signer = crypto.createSign("RSA-SHA256");
  signer.update(unsigned);
  signer.end();

  const signature = signer
    .sign(privateKey, "base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");

  return unsigned + "." + signature;
}

async function getGoogleAccessToken(clientEmail, privateKey) {
  const assertion = createGoogleJwt(clientEmail, privateKey);
  const tokenResponse = await fetch(GOOGLE_TOKEN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion
    }).toString()
  });

  if (!tokenResponse.ok) {
    const details = await tokenResponse.text();
    throw new Error("google_auth_failed:" + details);
  }

  const tokenData = await tokenResponse.json();
  return tokenData.access_token;
}

function isValidDate(value) {
  return /^\d{4}-\d{2}-\d{2}$/.test(value);
}

function isValidTime(value) {
  return /^\d{2}:\d{2}$/.test(value);
}

function addMinutes(date, time, minutesToAdd) {
  const [year, month, day] = date.split("-").map(Number);
  const [hour, minute] = time.split(":").map(Number);
  const dt = new Date(Date.UTC(year, month - 1, day, hour, minute));
  dt.setUTCMinutes(dt.getUTCMinutes() + minutesToAdd);

  const outYear = String(dt.getUTCFullYear());
  const outMonth = String(dt.getUTCMonth() + 1).padStart(2, "0");
  const outDay = String(dt.getUTCDate()).padStart(2, "0");
  const outHour = String(dt.getUTCHours()).padStart(2, "0");
  const outMinute = String(dt.getUTCMinutes()).padStart(2, "0");

  return {
    date: outYear + "-" + outMonth + "-" + outDay,
    time: outHour + ":" + outMinute
  };
}

function normalizePrivateKey(value) {
  return String(value || "").replace(/\\n/g, "\n");
}

function buildSlotId(date, time) {
  return "slot-" + date.replace(/-/g, "") + "-" + time.replace(/:/g, "");
}

function isSlotAligned(time, durationMinutes) {
  const minute = Number(time.split(":")[1]);
  return Number.isFinite(minute) && minute % durationMinutes === 0;
}

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST, OPTIONS"
      },
      body: ""
    };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Method not allowed" })
    };
  }

  try {
    const payload = JSON.parse(event.body || "{}");
    const fullName = String(payload.fullName || "").trim();
    const email = String(payload.email || "").trim();
    const phone = String(payload.phone || "").trim();
    const area = String(payload.area || "").trim();
    const preferredDate = String(payload.preferredDate || "").trim();
    const preferredTime = String(payload.preferredTime || "").trim();
    const mode = String(payload.mode || "").trim();
    const message = String(payload.message || "").trim();

    if (!fullName || !email || !area || !preferredDate || !preferredTime || !mode) {
      return {
        statusCode: 400,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ error: "Missing required fields" })
      };
    }

    if (!isValidDate(preferredDate) || !isValidTime(preferredTime)) {
      return {
        statusCode: 400,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ error: "Invalid date or time format" })
      };
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.BOOKING_TO_EMAIL || "office@gusenov.com";
    const fromEmail = process.env.BOOKING_FROM_EMAIL || "booking@gusenov.com";
    const googleClientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const googlePrivateKey = normalizePrivateKey(process.env.GOOGLE_PRIVATE_KEY);
    const googleCalendarId = process.env.GOOGLE_CALENDAR_ID;
    const slotDurationMinutes = Number(process.env.BOOKING_DURATION_MINUTES || "30");

    if (!resendApiKey) {
      return {
        statusCode: 500,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ error: "Missing RESEND_API_KEY" })
      };
    }

    if (!googleClientEmail || !googlePrivateKey || !googleCalendarId) {
      return {
        statusCode: 500,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          error: "Missing Google Calendar configuration",
          required: [
            "GOOGLE_SERVICE_ACCOUNT_EMAIL",
            "GOOGLE_PRIVATE_KEY",
            "GOOGLE_CALENDAR_ID"
          ]
        })
      };
    }

    const safeDuration = Number.isFinite(slotDurationMinutes) && slotDurationMinutes > 0
      ? Math.floor(slotDurationMinutes)
      : 30;

    if (!isSlotAligned(preferredTime, safeDuration)) {
      return {
        statusCode: 400,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          error: "invalid_slot",
          message: "Bitte wählen Sie einen gültigen Termin-Slot."
        })
      };
    }

    const slotId = buildSlotId(preferredDate, preferredTime);
    const endDateTimeParts = addMinutes(preferredDate, preferredTime, safeDuration);
    const startDateTime = preferredDate + "T" + preferredTime + ":00";
    const endDateTime = endDateTimeParts.date + "T" + endDateTimeParts.time + ":00";

    const accessToken = await getGoogleAccessToken(googleClientEmail, googlePrivateKey);

    const freeBusyResponse = await fetch("https://www.googleapis.com/calendar/v3/freeBusy", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + accessToken,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        timeMin: startDateTime,
        timeMax: endDateTime,
        timeZone: VIENNA_TIMEZONE,
        items: [{ id: googleCalendarId }]
      })
    });

    if (!freeBusyResponse.ok) {
      const freeBusyError = await freeBusyResponse.text();
      return {
        statusCode: 502,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ error: "Calendar availability check failed", details: freeBusyError })
      };
    }

    const freeBusyData = await freeBusyResponse.json();
    const busyIntervals =
      freeBusyData &&
      freeBusyData.calendars &&
      freeBusyData.calendars[googleCalendarId] &&
      Array.isArray(freeBusyData.calendars[googleCalendarId].busy)
        ? freeBusyData.calendars[googleCalendarId].busy
        : [];

    if (busyIntervals.length > 0) {
      return {
        statusCode: 409,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          error: "time_slot_unavailable",
          message: "Dieser Zeitraum ist bereits belegt. Bitte wählen Sie eine andere Uhrzeit."
        })
      };
    }

    const calendarResponse = await fetch(
      "https://www.googleapis.com/calendar/v3/calendars/" +
        encodeURIComponent(googleCalendarId) +
        "/events?sendUpdates=none",
      {
        method: "POST",
        headers: {
          Authorization: "Bearer " + accessToken,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          id: slotId,
          summary: "Beratung - " + fullName,
          description: [
            "Online Booking Anfrage",
            "Name: " + fullName,
            "E-Mail: " + email,
            "Telefon: " + (phone || "-"),
            "Rechtsgebiet: " + area,
            "Terminart: " + mode,
            "Nachricht: " + (message || "-")
          ].join("\n"),
          start: {
            dateTime: startDateTime,
            timeZone: VIENNA_TIMEZONE
          },
          end: {
            dateTime: endDateTime,
            timeZone: VIENNA_TIMEZONE
          },
          extendedProperties: {
            private: {
              bookingSource: "website",
              requesterEmail: email
            }
          }
        })
      }
    );

    if (calendarResponse.status === 409) {
      return {
        statusCode: 409,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          error: "time_slot_unavailable",
          message: "Dieser Termin wurde gerade vergeben. Bitte wählen Sie eine andere Uhrzeit."
        })
      };
    }

    if (!calendarResponse.ok) {
      const calendarErrorText = await calendarResponse.text();
      return {
        statusCode: 502,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ error: "Calendar provider failed", details: calendarErrorText })
      };
    }

    const subject = "Online Booking Anfrage - " + fullName;
    const textBody = [
      "Neue Online Booking Anfrage",
      "",
      "Name: " + fullName,
      "E-Mail: " + email,
      "Telefon: " + (phone || "-"),
      "Rechtsgebiet: " + area,
      "Wunschtermin (Datum): " + preferredDate,
      "Wunschtermin (Uhrzeit): " + preferredTime,
      "Terminart: " + mode,
      "",
      "Kurzbeschreibung:",
      message || "-"
    ].join("\n");

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + resendApiKey,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject,
        text: textBody
      })
    });

    if (!resendResponse.ok) {
      const errorText = await resendResponse.text();
      console.error("Email provider failed for booking", errorText);
    }

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ok: true, slotReserved: true })
    };
  } catch (error) {
    console.error("Booking function error", error);
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Unexpected server error" })
    };
  }
};
