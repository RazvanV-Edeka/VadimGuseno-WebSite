document.documentElement.classList.add("js");

const yearEl = document.getElementById("year");
const cookieBanner = document.getElementById("cookie-banner");
const cookieAcceptBtn = document.getElementById("cookie-accept");
const langButtons = document.querySelectorAll(".lang-btn[data-lang]");
const metaDescriptionEl = document.querySelector('meta[name="description"]');
const whatsappLinks = document.querySelectorAll("[data-whatsapp-link]");
const COOKIE_CONSENT_KEY = "gusenov_cookie_consent_v1";
const LANGUAGE_KEY = "gusenov_language_v1";

const TRANSLATIONS = {
  de: {
    "meta.title": "Mag. Vadim Gusenov | Rechtsanwalt in Wien",
    "meta.description":
      "Rechtsanwalt Mag. Vadim Gusenov in Wien. Strafverteidigung inkl. Wirtschafts- und Korruptionsstrafrecht sowie Auslieferungsrecht, Fremdenrecht, Staatsbürgerschaft, Familienrecht, Arbeitsrecht und Erbrecht.",
    "nav.services": "Leistungen",
    "nav.about": "Über die Kanzlei",
    "nav.contact": "Kontakt",
    "nav.appointment": "Termin",
    "hero.office": "Rechtsanwaltskanzlei",
    "hero.lead":
      "Anwaltliche Vertretung in zentralen Rechtsgebieten mit klarer Strategie, direkter Kommunikation und rascher Erreichbarkeit.",
    "hero.call": "Anrufen",
    "hero.trust": "Schnelle Reaktion, direkter Kontakt, diskrete Bearbeitung.",
    "hero.urgentTitle": "Notfall? Sofort anrufen.",
    "hero.urgentText":
      "Bei Vernehmung, Festnahme, Hausdurchsuchung oder wenn es akut ist: nicht warten, direkt anrufen.",
    "areas.eyebrow": "Kompetenzen",
    "areas.title": "Rechtsgebiete",
    "areas.criminal.title": "Strafverteidigung",
    "areas.criminal.1": "Allgemeines Strafrecht",
    "areas.criminal.2": "Wirtschaftsstrafrecht",
    "areas.criminal.3": "Korruptionsstrafrecht",
    "areas.criminal.4": "Auslieferungsrecht",
    "areas.criminal.5": "Suchtmittelrecht",
    "areas.criminal.6": "Vorzeitige Haftentlassung",
    "areas.criminal.7": "Fußfessel",
    "areas.criminal.8": "Einvernahme bei der Polizei",
    "areas.civil.title": "Zivilrecht",
    "areas.civil.1": "Familienrecht",
    "areas.civil.2": "Arbeitsrecht",
    "areas.civil.3": "Erbrecht",
    "areas.foreign.title": "Fremdenrecht",
    "areas.foreign.1": "Aufenthalts-, Einreiseverbot",
    "areas.foreign.2": "Visum / Aufenthaltstitel",
    "areas.foreign.3": "Einvernahme vor BFA / MA 35",
    "areas.foreign.4": "Asyl",
    "areas.foreign.5": "Staatsbürgerschaft",
    "areas.foreign.6": "Familienzusammenführung",
    "areas.foreign.7": "Scheineheverdacht",
    "citizenship.title": "Staatsbürgerschaft Österreich - Professionelle Begleitung durch das gesamte Verfahren bei der MA35.",
    "citizenship.ctaLead": "Wir unterstützen Sie von Anfang an und begleiten Sie während des gesamten Verfahrens vor der MA35.",
    "citizenship.facts": "Unsere Leistungen:",
    "citizenship.points.1": "Umfassende Prüfung Ihrer individuellen Voraussetzungen für die Verleihung der österreichischen Staatsbürgerschaft",
    "citizenship.points.2": "Analyse Ihrer Einkommenssituation, Aufenthaltszeiten und sonstigen gesetzlichen Voraussetzungen",
    "citizenship.points.3": "Erstellung einer individuellen Unterlagenliste",
    "citizenship.points.4": "Prüfung sämtlicher Dokumente auf Vollständigkeit und rechtliche Relevanz",
    "citizenship.points.5": "Vorbereitung und Ausarbeitung des Staatsbürgerschaftsantrags",
    "citizenship.points.6": "Kommunikation mit der MA35 während des laufenden Verfahrens",
    "citizenship.points.7": "Beantwortung behördlicher Rückfragen",
    "citizenship.points.8": "Einbringung ergänzender Stellungnahmen und Unterlagen",
    "citizenship.points.9": "Laufende Begleitung bis zur behördlichen Entscheidung",
    "citizenship.points.10": "Persönlicher Ansprechpartner während des gesamten Verfahrens",
    "delay.title": "Säumnisbeschwerde bei langen Verfahren",
    "delay.eyebrow": "Verfahrensbeschleunigung",
    "delay.p1": "Warten Sie seit mehr als sechs Monaten auf eine Entscheidung der Behörde, insbesondere der MA35, kann eine Säumnisbeschwerde ein wirksamer Schritt zur Verfahrensbeschleunigung sein.",
    "delay.p2": "Wir übernehmen für Sie die anwaltliche Vertretung im gesamten Zusammenhang mit der Säumnisbeschwerde - von der Einbringung bis zur Erledigung.",
    "delay.p3": "Entscheidet die MA35 nach Einbringung der Beschwerde selbst, endet das Verfahren an dieser Stelle. Wird der Akt an das Verwaltungsgericht Wien vorgelegt, vertreten wir Sie auch im gerichtlichen Verfahren weiter.",
    "delay.p4": "Werden zusätzliche Unterlagen angefordert, bereiten wir die erforderlichen Eingaben vor und übermitteln die von Ihnen bereitgestellten Dokumente. Sollte eine mündliche Verhandlung stattfinden, bereiten wir Sie darauf vor und begleiten Sie zum Termin.",
    "family.eyebrow": "Familienrecht",
    "family.title": "Meine Leistungen im Familienrecht",
    "family.1.title": "Scheidung und Trennung",
    "family.1.text":
      "Ich berate und vertrete Sie bei einvernehmlichen und strittigen Scheidungen und kläre die damit verbundenen rechtlichen Folgen.",
    "family.2.title": "Obsorge und elterliche Verantwortung",
    "family.2.text":
      "Wer trifft wichtige Entscheidungen für das Kind? Wie wird die Obsorge nach einer Trennung geregelt? Ich unterstütze Sie bei der Klärung und Durchsetzung Ihrer Rechte als Elternteil.",
    "family.3.title": "Kontaktrecht",
    "family.3.text":
      "Wenn Uneinigkeit über den persönlichen Kontakt zu den Kindern besteht, vertrete ich Ihre Interessen bei der Festlegung, Änderung oder Durchsetzung von Kontaktrechtsregelungen. Dabei steht das Kindeswohl im Mittelpunkt.",
    "family.4.title": "Unterhalt für Kinder und Ehegatten",
    "family.4.text":
      "Ich berate Sie bei der Geltendmachung, Berechnung und Überprüfung von Unterhaltsansprüchen sowie bei deren gerichtlicher Durchsetzung oder Abwehr.",
    "family.5.title": "Vermögensaufteilung nach der Scheidung",
    "family.5.text":
      "Was geschieht mit der gemeinsamen Wohnung, den Ersparnissen, dem Hausrat und anderen Vermögenswerten? Ich unterstütze Sie bei der rechtlichen Klärung und Aufteilung des ehelichen Vermögens.",
    "family.6.title": "Einvernehmliche Regelungen und Vereinbarungen",
    "family.6.text":
      "Nicht jeder familiäre Konflikt muss vor Gericht enden. Ich unterstütze Sie bei der Ausarbeitung rechtssicherer Vereinbarungen über Scheidungsfolgen, Unterhalt, Obsorge und Kontaktrecht.",
    "about.eyebrow": "Über die Kanzlei",
    "about.bio":
      "Mag. Vadim Gusenov war über mehrere Jahre in einer Wiener Rechtsanwaltskanzlei tätig und konnte dabei umfassende praktische Erfahrung insbesondere in Strafrecht, Fremdenrecht, Staatsbürgerschaftsrecht, Familienrecht sowie allgemeinem Zivilrecht sammeln. Heute steht er seinen Mandanten mit engagierter Vertretung zur Seite.",
    "about.educationTitle": "Ausbildung & Qualifikationen",
    "about.edu.1": "Mag. iur. - Universität Wien, Rechtswissenschaftliche Fakultät",
    "about.edu.2":
      "Gerichtspraxis am Bezirksgericht Gänserndorf, Landesgericht für Strafsachen Wien und bei der Staatsanwaltschaft Korneuburg",
    "about.edu.3": "Rechtsanwaltsprüfung - Oberlandesgericht Wien",
    "about.edu.4": "Eintragung als Rechtsanwalt in Österreich",
    "about.languages": "<strong>Sprachen:</strong> Deutsch, Russisch",
    "footer.contact": "Kontakt",
    "footer.reach": "Erreichbarkeit",
    "footer.office": "Kanzlei",
    "footer.legal": "Rechtliches",
    "footer.instagram": "Instagram",
    "footer.address": "Falkestraße 1/4B, 1010 Wien",
    "footer.bank": "Bankverbindung",
    "footer.owner": "Kontoinhaber: Rechtsanwalt Mag. Vadim Gusenov",
    "footer.impressum": "Impressum",
    "footer.privacy": "Datenschutz",
    "cookie.text":
      "Wir verwenden nur technisch notwendige Cookies, um diese Website sicher und korrekt darzustellen. Details finden Sie in unserer <a href=\"datenschutz.html\">Datenschutzerklärung</a>.",
    "cookie.accept": "Verstanden",
    "cookie.aria": "Cookie-Hinweis",
    "lang.switcher": "Sprachauswahl",
    "wa.default": "Hallo Herr Mag. Gusenov, ich bitte um eine rechtliche Ersteinschätzung."
  },
  ru: {
    "meta.title": "Маг. Вадим Гусенов | Адвокат в Вене",
    "meta.description":
      "Адвокат Маг. Вадим Гусенов в Вене. Уголовная защита, включая экономические и коррупционные преступления, экстрадицию, а также миграционное право, гражданство, семейное, трудовое и наследственное право.",
    "nav.services": "Услуги",
    "nav.about": "О канцелярии",
    "nav.contact": "Контакты",
    "nav.appointment": "Запись",
    "hero.office": "Адвокатская канцелярия",
    "hero.lead":
      "Юридическое представительство в ключевых областях права с четкой стратегией, прямой коммуникацией и быстрой обратной связью.",
    "hero.call": "Позвонить",
    "hero.trust": "Быстрый ответ, прямой контакт, конфиденциальное сопровождение.",
    "hero.urgentTitle": "Экстренный случай? Звоните сразу.",
    "hero.urgentText":
      "Допрос, задержание, обыск или иная срочная ситуация: не ждите, звоните немедленно.",
    "areas.eyebrow": "Компетенции",
    "areas.title": "Области права",
    "areas.criminal.title": "Уголовная защита",
    "areas.criminal.1": "Общее уголовное право",
    "areas.criminal.2": "Экономические преступления",
    "areas.criminal.3": "Коррупционные преступления",
    "areas.criminal.4": "Экстрадиция",
    "areas.criminal.5": "Дела о наркотиках",
    "areas.criminal.6": "Условно-досрочное освобождение",
    "areas.criminal.7": "Электронный браслет (Fußfessel)",
    "areas.criminal.8": "Допрос в полиции",
    "areas.civil.title": "Гражданское право",
    "areas.civil.1": "Семейное право",
    "areas.civil.2": "Трудовое право",
    "areas.civil.3": "Наследственное право",
    "areas.foreign.title": "Миграционное право",
    "areas.foreign.1": "Запрет на пребывание и въезд",
    "areas.foreign.2": "Виза / вид на жительство",
    "areas.foreign.3": "Допрос в BFA / MA 35",
    "areas.foreign.4": "Убежище",
    "areas.foreign.5": "Гражданство",
    "areas.foreign.6": "Воссоединение семьи",
    "areas.foreign.7": "Подозрение в фиктивном браке",
    "citizenship.title": "Гражданство Австрии - профессиональное сопровождение всего процесса в MA35.",
    "citizenship.ctaLead": "Мы подключаемся с самого начала и сопровождаем вас на протяжении всего процесса перед MA35.",
    "citizenship.facts": "Наши услуги:",
    "citizenship.points.1": "Подробная проверка ваших индивидуальных оснований для получения австрийского гражданства",
    "citizenship.points.2": "Анализ доходов, сроков пребывания и иных законных предпосылок",
    "citizenship.points.3": "Подготовка индивидуального списка документов",
    "citizenship.points.4": "Проверка всех документов на полноту и юридическую релевантность",
    "citizenship.points.5": "Подготовка и юридическое оформление заявления на гражданство",
    "citizenship.points.6": "Коммуникация с MA35 в ходе всего производства",
    "citizenship.points.7": "Ответы на запросы ведомства",
    "citizenship.points.8": "Подача дополнительных пояснений и документов",
    "citizenship.points.9": "Сопровождение до окончательного решения органа",
    "citizenship.points.10": "Персональный контакт на протяжении всей процедуры",
    "delay.title": "Жалоба на бездействие при затянувшемся производстве",
    "delay.eyebrow": "Ускорение процедуры",
    "delay.p1": "Если решение органа, в частности MA35, не принимается более шести месяцев, жалоба на бездействие может быть эффективным инструментом для ускорения процедуры.",
    "delay.p2": "Мы берем на себя адвокатское сопровождение по всей процедуре подачи такой жалобы - от подачи до завершения.",
    "delay.p3": "Если MA35 после подачи жалобы выносит решение самостоятельно, процедура на этом этапе завершается. Если дело передается в Verwaltungsgericht Wien, мы продолжаем представительство и в суде.",
    "delay.p4": "Если суд запрашивает дополнительные документы, мы подготавливаем необходимые письменные позиции и передаем предоставленные вами материалы. При назначении устного заседания мы готовим вас и сопровождаем на слушании.",
    "family.eyebrow": "Семейное право",
    "family.title": "Мои услуги в области семейного права",
    "family.1.title": "Развод и раздельное проживание",
    "family.1.text":
      "Я консультирую и представляю вас при разводе по взаимному согласию и в спорных бракоразводных процессах, а также разъясняю связанные с ними правовые последствия.",
    "family.2.title": "Опека и родительская ответственность",
    "family.2.text":
      "Кто принимает важные решения в отношении ребенка? Как регулируется опека после расставания? Я помогаю вам прояснить и защитить ваши права как родителя.",
    "family.3.title": "Право на общение с ребенком",
    "family.3.text":
      "Если родители не могут договориться о личном общении с детьми, я представляю ваши интересы при установлении, изменении или принудительном исполнении порядка общения. В центре внимания всегда находится благо ребенка.",
    "family.4.title": "Алименты на детей и супругов",
    "family.4.text":
      "Я консультирую вас по вопросам заявления, расчета и проверки алиментных требований, а также по их взысканию или оспариванию в суде.",
    "family.5.title": "Раздел имущества после развода",
    "family.5.text":
      "Что будет с общей квартирой, сбережениями, домашним имуществом и другими активами? Я помогаю вам юридически урегулировать и разделить совместно нажитое имущество.",
    "family.6.title": "Мировые соглашения и договоренности",
    "family.6.text":
      "Не каждый семейный конфликт должен заканчиваться в суде. Я помогаю составить юридически надежные соглашения о последствиях развода, алиментах, опеке и порядке общения с детьми.",
    "about.eyebrow": "О канцелярии",
    "about.bio":
      "Маг. Вадим Гусенов несколько лет работал в венской адвокатской канцелярии и накопил обширный практический опыт в уголовном праве, миграционном и гражданском праве, вопросах гражданства, семейном праве и общем гражданском праве. Сегодня он представляет интересы клиентов с полной вовлеченностью.",
    "about.educationTitle": "Образование и квалификация",
    "about.edu.1": "Mag. iur. — Венский университет, юридический факультет",
    "about.edu.2":
      "Судебная практика в окружном суде Гензерндорфа, земельном уголовном суде Вены и прокуратуре Корнойбурга",
    "about.edu.3": "Адвокатский экзамен — Высший земельный суд Вены",
    "about.edu.4": "Регистрация в качестве адвоката в Австрии",
    "about.languages": "<strong>Языки:</strong> Немецкий, русский",
    "footer.contact": "Контакты",
    "footer.reach": "Связь",
    "footer.office": "Канцелярия",
    "footer.legal": "Правовая информация",
    "footer.instagram": "Instagram",
    "footer.address": "Falkestraße 1/4B, 1010 Wien",
    "footer.bank": "Банковские реквизиты",
    "footer.owner": "Владелец счета: Rechtsanwalt Mag. Vadim Gusenov",
    "footer.impressum": "Impressum",
    "footer.privacy": "Защита данных",
    "cookie.text":
      "Мы используем только технически необходимые cookies для безопасного и корректного отображения сайта. Подробности в нашей <a href=\"datenschutz.html\">политике конфиденциальности</a>.",
    "cookie.accept": "Понятно",
    "cookie.aria": "Уведомление о cookies",
    "lang.switcher": "Выбор языка",
    "wa.default": "Здравствуйте, господин маг. Гусенов, прошу первичную юридическую оценку."
  }
};

let currentLanguage = "de";

function t(key) {
  const languagePack = TRANSLATIONS[currentLanguage] || TRANSLATIONS.de;
  return languagePack[key] || TRANSLATIONS.de[key] || "";
}

function updateWhatsappLink() {
  if (whatsappLinks.length === 0) {
    return;
  }

  whatsappLinks.forEach((link) => {
    const messageKey = link.dataset.whatsappKey || "wa.default";
    const message = t(messageKey) || t("wa.default");
    const phoneNumber = link.dataset.whatsappNumber || "436601017777";
    link.href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  });
}

function applyLanguage(lang) {
  const safeLang = lang === "ru" ? "ru" : "de";
  currentLanguage = safeLang;

  document.documentElement.lang = safeLang;
  // Only the home page carries the language switcher and its own title/description.
  if (langButtons.length > 0) {
    document.title = t("meta.title");
  }

  if (metaDescriptionEl && langButtons.length > 0) {
    metaDescriptionEl.setAttribute("content", t("meta.description"));
  }

  if (cookieBanner) {
    cookieBanner.setAttribute("aria-label", t("cookie.aria"));
  }

  const switcher = document.querySelector(".lang-switch");
  if (switcher) {
    switcher.setAttribute("aria-label", t("lang.switcher"));
  }

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (key) {
      element.textContent = t(key);
    }
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const key = element.getAttribute("data-i18n-html");
    if (key) {
      element.innerHTML = t(key);
    }
  });

  langButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === safeLang);
    button.setAttribute("aria-pressed", String(button.dataset.lang === safeLang));
  });

  updateWhatsappLink();

  try {
    localStorage.setItem(LANGUAGE_KEY, safeLang);
  } catch (_storageError) {
    // Ignore storage failures.
  }
}

if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

if (langButtons.length > 0) {
  langButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const lang = button.dataset.lang === "ru" ? "ru" : "de";
      applyLanguage(lang);
    });
  });
}

let preferredLanguage = "de";
try {
  const savedLanguage = localStorage.getItem(LANGUAGE_KEY);
  if (savedLanguage === "ru" || savedLanguage === "de") {
    preferredLanguage = savedLanguage;
  } else if (navigator.language && navigator.language.toLowerCase().startsWith("ru")) {
    preferredLanguage = "ru";
  }
} catch (_storageError) {
  if (navigator.language && navigator.language.toLowerCase().startsWith("ru")) {
    preferredLanguage = "ru";
  }
}

applyLanguage(preferredLanguage);

if (cookieBanner && cookieAcceptBtn) {
  let hasConsent = false;
  try {
    hasConsent = localStorage.getItem(COOKIE_CONSENT_KEY) === "accepted";
  } catch (_storageError) {
    hasConsent = false;
  }

  if (!hasConsent) {
    cookieBanner.hidden = false;
  }

  cookieAcceptBtn.addEventListener("click", () => {
    try {
      localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    } catch (_storageError) {
      // Ignore storage failures and still hide the banner for this session.
    }
    cookieBanner.hidden = true;
  });
}

// Google Ads conversion tracking for contact actions (phone, e-mail, WhatsApp).
function reportContactConversion() {
  if (typeof gtag === "function") {
    gtag("event", "ads_conversion_Contact_1", {});
  }
  // Contact (2) conversion.
  if (typeof gtag_report_conversion === "function") {
    gtag_report_conversion();
  }
}

const sameTabContactLinks = document.querySelectorAll(
  'a[href^="tel:"], a[href^="mailto:"]'
);
sameTabContactLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    // Fire the Contact (2) conversion alongside Contact (1).
    if (typeof gtag === "function") {
      gtag("event", "conversion", {
        send_to: "AW-18201939977/d5s1CIa8osEcEImgrudD",
      });
    }
    // Use the delayed-navigation helper so the conversion is recorded
    // before the browser hands off to the phone/e-mail app.
    if (typeof gtagSendEvent === "function") {
      event.preventDefault();
      gtagSendEvent(link.href);
    } else {
      reportContactConversion();
    }
  });
});

// WhatsApp links open in a new tab, so navigation is not interrupted here.
whatsappLinks.forEach((link) => {
  link.addEventListener("click", () => {
    reportContactConversion();
  });
});

// Header turns solid once the hero is scrolled past (always solid on pages without a hero).
const siteHeader = document.querySelector("[data-header]");
const hero = document.querySelector(".hero");

function updateHeader() {
  if (!siteHeader || siteHeader.dataset.headerFixed === "solid") {
    return;
  }
  const threshold = hero ? hero.offsetHeight - siteHeader.offsetHeight - 40 : 0;
  siteHeader.classList.toggle("is-solid", window.scrollY > threshold);
}

if (siteHeader) {
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
  window.addEventListener("resize", updateHeader);
}

// Mobile menu
const navToggle = document.querySelector("[data-nav-toggle]");
if (siteHeader && navToggle) {
  const setMenuOpen = (open) => {
    siteHeader.classList.toggle("is-open", open);
    navToggle.setAttribute("aria-expanded", String(open));
  };

  navToggle.addEventListener("click", () => {
    setMenuOpen(!siteHeader.classList.contains("is-open"));
  });

  siteHeader.querySelectorAll(".nav-main a").forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false));
  });
}

// Hero slideshow: crossfades the office photos, with dots to jump between them.
const heroSlides = document.querySelectorAll(".hero-slide");
const heroDots = document.querySelector("[data-hero-dots]");
const SLIDE_INTERVAL_MS = 6500;

if (heroSlides.length > 1 && heroDots) {
  let activeSlide = 0;
  let slideTimer = null;

  const dots = Array.from(heroSlides, (_slide, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "hero-dot";
    dot.setAttribute("aria-label", String(index + 1));
    dot.addEventListener("click", () => {
      showSlide(index);
      startSlideTimer();
    });
    heroDots.appendChild(dot);
    return dot;
  });

  function showSlide(index) {
    activeSlide = (index + heroSlides.length) % heroSlides.length;
    heroSlides.forEach((slide, i) => slide.classList.toggle("is-active", i === activeSlide));
    dots.forEach((dot, i) => dot.classList.toggle("is-active", i === activeSlide));
  }

  function startSlideTimer() {
    window.clearInterval(slideTimer);
    slideTimer = window.setInterval(() => showSlide(activeSlide + 1), SLIDE_INTERVAL_MS);
  }

  showSlide(0);
  startSlideTimer();
}

// Scroll reveal
const revealEls = document.querySelectorAll(".reveal-up");
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  revealEls.forEach((el) => revealObserver.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("is-visible"));
}
