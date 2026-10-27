const yearEl = document.getElementById("year");
const bookingForm = document.getElementById("booking-form");
const bookingFeedback = document.getElementById("booking-feedback");
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
      "Rechtsanwalt Mag. Vadim Gusenov in Wien. Vertretung in Familienrecht, Arbeitsrecht, Erbrecht, Fremdenrecht, Verwaltungsrecht und Strafrecht.",
    "nav.services": "Leistungen",
    "nav.about": "Über die Kanzlei",
    "nav.contact": "Kontakt",
    "hero.role": "Rechtsanwalt in Wien",
    "hero.lead":
      "Anwaltliche Vertretung in zentralen Rechtsgebieten mit klarer Strategie, direkter Kommunikation und rascher Erreichbarkeit.",
    "hero.call": "Jetzt anrufen",
    "hero.email": "E-Mail senden",
    "hero.trust": "Schnelle Reaktion, direkter Kontakt, diskrete Bearbeitung.",
    "hero.urgentTitle": "Notfall? Sofort anrufen.",
    "hero.urgentText":
      "Bei Vernehmung, Festnahme, Hausdurchsuchung oder wenn es akut ist: nicht warten, direkt anrufen.",
    "areas.eyebrow": "Kompetenzen",
    "areas.title": "Rechtsgebiete",
    "areas.civil.1": "Familienrecht",
    "areas.civil.2": "Arbeitsrecht",
    "areas.civil.3": "Erbrecht",
    "areas.foreign.1": "Fremdenrecht & Staatsbürgerschaft",
    "areas.foreign.2": "Visaverfahren",
    "areas.foreign.3": "Verwaltungsrecht",
    "areas.criminal.1": "Strafrecht",
    "areas.criminal.2": "Sexualstrafrecht",
    "areas.criminal.3": "Suchtmitteldelikte",
    "citizenship.eyebrow": "Premium-Begleitung",
    "citizenship.title": "Staatsbürgerschaft Österreich - Professionelle Begleitung durch das gesamte Verfahren bei der MA35.",
    "citizenship.lead": "Bei uns ist jede Anfrage ein Premiumfall, daher umfasst das Pauschalhonorar die anwaltliche Begleitung des gesamten Verfahrens vor der MA35.",
    "citizenship.ctaLead": "Wir unterstützen Sie von Anfang an und begleiten Sie während des gesamten Verfahrens vor der MA35.",
    "citizenship.facts": "Unsere Leistungen im Rahmen des Premium-Pakets:",
    "citizenship.consult": "Kostenlose Erstberatung auf WhatsApp",
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
    "delay.p1": "Warten Sie seit mehr als sechs Monaten auf eine Entscheidung der Behörde, insbesondere der MA35, kann eine Säumnisbeschwerde ein wirksamer Schritt zur Verfahrensbeschleunigung sein.",
    "delay.p2": "Wir übernehmen für Sie die anwaltliche Vertretung im gesamten Zusammenhang mit der Säumnisbeschwerde - von der Einbringung bis zur Erledigung.",
    "delay.p3": "Entscheidet die MA35 nach Einbringung der Beschwerde selbst, endet das Verfahren an dieser Stelle. Wird der Akt an das Verwaltungsgericht Wien vorgelegt, vertreten wir Sie auch im gerichtlichen Verfahren weiter.",
    "delay.p4": "Werden zusätzliche Unterlagen angefordert, bereiten wir die erforderlichen Eingaben vor und übermitteln die von Ihnen bereitgestellten Dokumente. Sollte eine mündliche Verhandlung stattfinden, bereiten wir Sie darauf vor und begleiten Sie zum Termin.",
    "delay.note": "Nicht umfasst sind behördliche oder gerichtliche Gebühren, insbesondere die Eingabegebühr für die Säumnisbeschwerde.",
    "delay.cta": "Jetzt auf WhatsApp schreiben",
    "criminal.eyebrow": "Strafverfahren",
    "criminal.title": "Verteidigung im Strafverfahren - rasch, diskret, konsequent",
    "criminal.lead": "Vorladung, Anzeige oder Hausdurchsuchung? Schicken Sie Ihre Unterlagen direkt auf WhatsApp - wir geben Ihnen eine kostenfreie Ersteinschätzung.",
    "criminal.text": "Danach vereinbaren wir bei Bedarf eine persönliche Beratung und setzen die passende Verteidigungsstrategie für Ihren Fall auf.",
    "criminal.points.1": "Kostenfreie Sichtung Ihrer Dokumente per WhatsApp",
    "criminal.points.2": "Klare Empfehlung zu den nächsten rechtlichen Schritten",
    "criminal.points.3": "Persönliche Beratung und auf Wunsch vollständige Vertretung im Verfahren",
    "criminal.cta": "Dokumente auf WhatsApp senden",
    "criminal.cardEyebrow": "Wenn es dringend ist",
    "criminal.cardTitle": "Keine Aussage ohne Verteidiger",
    "criminal.cardText": "Kontaktieren Sie uns unmittelbar vor Einvernahme, Hausdurchsuchung oder Festnahme. Wir klären sofort die nächsten rechtlichen Schritte.",
    "other.eyebrow": "Sonstige",
    "other.title": "Weitere Rechtsgebiete mit persönlicher Vertretung",
    "other.lead": "Neben Staatsbürgerschafts- und Strafverfahren vertreten wir Sie auch in weiteren zentralen Rechtsbereichen.",
    "other.family.title": "Familienrecht",
    "other.family.text": "Scheidung, Obsorge, Kontaktrecht und Unterhalt - wir vertreten Ihre Interessen mit klarer Strategie und ruhiger Verhandlungsführung.",
    "other.work.title": "Arbeitsrecht",
    "other.work.text": "Kündigung, Entlassung, ausstehender Lohn oder Aufhebungsvereinbarung - wir prüfen Ihre Ansprüche und setzen sie konsequent durch.",
    "other.inheritance.title": "Erbrecht",
    "other.inheritance.text": "Verlassenschaft, Pflichtteil, Testament und Erbauseinandersetzung - wir schaffen rechtliche Klarheit und vertreten Sie im Verfahren.",
    "other.cta": "Anliegen auf WhatsApp senden",
    "process.eyebrow": "So läuft es ab",
    "process.title": "Ihr Weg zur Staatsbürgerschaft in 4 Schritten",
    "process.step1.title": "30-min Beratung",
    "process.step1.text": "Wir prüfen Ihren Fall, Ihre Chancen und die richtige Strategie.",
    "process.step2.title": "Dokumente & Plan",
    "process.step2.text": "Sie erhalten eine klare Liste und einen realistischen Zeitplan.",
    "process.step3.title": "Einreichung MA35",
    "process.step3.text": "Wir begleiten die Antragstellung strukturiert und rechtssicher.",
    "process.step4.title": "Laufende Begleitung",
    "process.step4.text": "Wir reagieren auf Behördenschreiben und halten Sie informiert.",
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
    "about.consult": "Erstgespräch anfragen",
    "booking.eyebrow": "Online Anfrage",
    "booking.title": "Termin online sichern",
    "booking.text":
      "Senden Sie Ihre Anfrage direkt online. Sie erhalten eine konkrete, persönliche Rückmeldung mit Terminvorschlag.",
    "booking.points.1": "Erstgespräch ausschließlich persönlich in der Kanzlei",
    "booking.points.2": "Rückmeldung meist am selben Werktag",
    "booking.urgent": "Sofort anrufen unter",
    "booking.whatsapp": "Per WhatsApp schreiben",
    "booking.call": "Direkt anrufen",
    "footer.contact": "Kontakt",
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
    "wa.default": "Hallo Herr Mag. Gusenov, ich bitte um eine rechtliche Ersteinschätzung.",
    "wa.citizenship": "Hallo Herr Mag. Gusenov, ich möchte eine Erstberatung zur Staatsbürgerschaft anfragen.",
    "wa.delay": "Hallo Herr Mag. Gusenov, ich warte seit längerer Zeit auf eine Entscheidung der MA35 und bitte um rechtliche Prüfung.",
    "wa.criminal": "Hallo Herr Mag. Gusenov, ich habe Unterlagen zu einem Strafverfahren und bitte um eine kostenfreie Ersteinschätzung.",
    "wa.booking": "Hallo Herr Mag. Gusenov, ich möchte einen persönlichen Termin anfragen.",
    "wa.other": "Hallo Herr Mag. Gusenov, ich benötige anwaltliche Unterstützung in einem anderen Rechtsgebiet.",
    "feedback.success": "Danke! Ihre Anfrage wurde erfolgreich gesendet.",
    "feedback.required": "Bitte alle Pflichtfelder ausfüllen.",
    "feedback.sending": "Anfrage wird gesendet...",
    "feedback.slotUnavailable": "Dieser Termin ist nicht mehr verfügbar. Bitte wählen Sie eine andere Uhrzeit.",
    "feedback.failed": "Senden fehlgeschlagen. Bitte erneut versuchen oder telefonisch kontaktieren."
  },
  ru: {
    "meta.title": "Маг. Вадим Гусенов | Адвокат в Вене",
    "meta.description":
      "Адвокат Маг. Вадим Гусенов в Вене. Представительство по семейному, трудовому, наследственному, миграционному, административному и уголовному праву.",
    "nav.services": "Услуги",
    "nav.about": "О канцелярии",
    "nav.contact": "Контакты",
    "hero.role": "Адвокат в Вене",
    "hero.lead":
      "Юридическое представительство в ключевых областях права с четкой стратегией, прямой коммуникацией и быстрой обратной связью.",
    "hero.call": "Позвонить сейчас",
    "hero.email": "Отправить e-mail",
    "hero.trust": "Быстрый ответ, прямой контакт, конфиденциальное сопровождение.",
    "hero.urgentTitle": "Экстренный случай? Звоните сразу.",
    "hero.urgentText":
      "Допрос, задержание, обыск или иная срочная ситуация: не ждите, звоните немедленно.",
    "areas.eyebrow": "Компетенции",
    "areas.title": "Области права",
    "areas.civil.1": "Семейное право",
    "areas.civil.2": "Трудовое право",
    "areas.civil.3": "Наследственное право",
    "areas.foreign.1": "Миграционное право и гражданство",
    "areas.foreign.2": "Визовые процедуры",
    "areas.foreign.3": "Административное право",
    "areas.criminal.1": "Уголовное право",
    "areas.criminal.2": "Преступления против половой неприкосновенности",
    "areas.criminal.3": "Дела о наркотиках",
    "citizenship.eyebrow": "Премиум-сопровождение",
    "citizenship.title": "Гражданство Австрии - профессиональное сопровождение всего процесса в MA35.",
    "citizenship.lead": "Для нас каждый запрос является премиум-делом, поэтому паушальный гонорар включает адвокатское сопровождение всей процедуры перед MA35.",
    "citizenship.ctaLead": "Мы подключаемся с самого начала и сопровождаем вас на протяжении всего процесса перед MA35.",
    "citizenship.facts": "Что входит в Премиум-пакет:",
    "citizenship.consult": "Бесплатная первичная консультация в WhatsApp",
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
    "delay.p1": "Если решение органа, в частности MA35, не принимается более шести месяцев, жалоба на бездействие может быть эффективным инструментом для ускорения процедуры.",
    "delay.p2": "Мы берем на себя адвокатское сопровождение по всей процедуре подачи такой жалобы - от подачи до завершения.",
    "delay.p3": "Если MA35 после подачи жалобы выносит решение самостоятельно, процедура на этом этапе завершается. Если дело передается в Verwaltungsgericht Wien, мы продолжаем представительство и в суде.",
    "delay.p4": "Если суд запрашивает дополнительные документы, мы подготавливаем необходимые письменные позиции и передаем предоставленные вами материалы. При назначении устного заседания мы готовим вас и сопровождаем на слушании.",
    "delay.note": "Государственные и судебные сборы, включая пошлину за подачу жалобы на бездействие, в гонорар не входят.",
    "delay.cta": "Написать в WhatsApp сейчас",
    "criminal.eyebrow": "Уголовное производство",
    "criminal.title": "Защита по уголовным делам - быстро, конфиденциально, последовательно",
    "criminal.lead": "Повестка, заявление или обыск? Отправьте документы сразу в WhatsApp - мы дадим бесплатную первичную оценку.",
    "criminal.text": "Далее при необходимости согласуем личную консультацию и выстроим стратегию защиты под ваш случай.",
    "criminal.points.1": "Бесплатный просмотр документов в WhatsApp",
    "criminal.points.2": "Четкая рекомендация по следующим правовым шагам",
    "criminal.points.3": "Личная консультация и при необходимости полное представительство по делу",
    "criminal.cta": "Отправить документы в WhatsApp",
    "criminal.cardEyebrow": "Если ситуация срочная",
    "criminal.cardTitle": "Не давайте показания без адвоката",
    "criminal.cardText": "Свяжитесь с нами немедленно перед допросом, обыском или задержанием. Мы сразу определим следующие правовые шаги.",
    "other.eyebrow": "Прочее",
    "other.title": "Другие направления права с персональным сопровождением",
    "other.lead": "Помимо дел по гражданству и уголовным делам, мы представляем вас и в других ключевых правовых направлениях.",
    "other.family.title": "Семейное право",
    "other.family.text": "Развод, опека, право на общение с ребенком и алименты - представляем ваши интересы со стратегией и спокойным ведением переговоров.",
    "other.work.title": "Трудовое право",
    "other.work.text": "Увольнение, расторжение, задолженность по зарплате или соглашение о прекращении - проверяем требования и последовательно защищаем ваши права.",
    "other.inheritance.title": "Наследственное право",
    "other.inheritance.text": "Наследственное производство, обязательная доля, завещание и споры между наследниками - обеспечиваем правовую ясность и представительство в процедуре.",
    "other.cta": "Отправить запрос в WhatsApp",
    "process.eyebrow": "Как проходит процесс",
    "process.title": "Путь к гражданству в 4 шага",
    "process.step1.title": "30-минутная консультация",
    "process.step1.text": "Мы анализируем ваше дело, шансы и оптимальную стратегию.",
    "process.step2.title": "Документы и план",
    "process.step2.text": "Вы получаете четкий список документов и реалистичный график.",
    "process.step3.title": "Подача в MA35",
    "process.step3.text": "Мы сопровождаем подачу структурированно и юридически надежно.",
    "process.step4.title": "Дальнейшее сопровождение",
    "process.step4.text": "Реагируем на письма ведомства и держим вас в курсе.",
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
    "about.consult": "Запросить первичную консультацию",
    "booking.eyebrow": "Онлайн-запрос",
    "booking.title": "Забронировать консультацию онлайн",
    "booking.text":
      "Отправьте запрос онлайн. Вы получите персональный ответ с конкретным предложением по времени.",
    "booking.points.1": "Первичная консультация только лично в канцелярии",
    "booking.points.2": "Ответ обычно в тот же рабочий день",
    "booking.urgent": "Срочно звоните по номеру",
    "booking.whatsapp": "Написать в WhatsApp",
    "booking.call": "Позвонить напрямую",
    "footer.contact": "Контакты",
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
    "wa.default": "Здравствуйте, господин маг. Гусенов, прошу первичную юридическую оценку.",
    "wa.citizenship": "Здравствуйте, господин маг. Гусенов, хочу запросить первичную консультацию по гражданству.",
    "wa.delay": "Здравствуйте, господин маг. Гусенов, долго нет решения MA35, прошу юридическую проверку дела.",
    "wa.criminal": "Здравствуйте, господин маг. Гусенов, у меня есть документы по уголовному делу и нужна бесплатная первичная оценка.",
    "wa.booking": "Здравствуйте, господин маг. Гусенов, хочу записаться на личную консультацию.",
    "wa.other": "Здравствуйте, господин маг. Гусенов, мне нужна юридическая помощь по другому правовому вопросу.",
    "feedback.success": "Спасибо! Ваш запрос успешно отправлен.",
    "feedback.required": "Пожалуйста, заполните все обязательные поля.",
    "feedback.sending": "Отправка запроса...",
    "feedback.slotUnavailable": "Этот слот уже недоступен. Пожалуйста, выберите другое время.",
    "feedback.failed": "Отправка не удалась. Повторите попытку или свяжитесь с нами по телефону."
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
  document.title = t("meta.title");

  if (metaDescriptionEl) {
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

if (bookingForm && bookingFeedback) {
  bookingForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(bookingForm);
    const website = String(formData.get("website") || "").trim();
    const fullName = String(formData.get("fullName") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const area = String(formData.get("area") || "").trim();
    const preferredDate = String(formData.get("preferredDate") || "").trim();
    const preferredTime = String(formData.get("preferredTime") || "").trim();
    const mode = String(formData.get("mode") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (website) {
      bookingFeedback.textContent = t("feedback.success");
      bookingFeedback.style.color = "#2d5c2c";
      bookingForm.reset();
      return;
    }

    if (!fullName || !email || !area || !preferredDate || !preferredTime || !mode) {
      bookingFeedback.textContent = t("feedback.required");
      bookingFeedback.style.color = "#7a1e1e";
      return;
    }

    bookingFeedback.textContent = t("feedback.sending");
    bookingFeedback.style.color = "#3d4653";

    try {
      const response = await fetch("/.netlify/functions/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          area,
          preferredDate,
          preferredTime,
          mode,
          message
        })
      });

      let responseBody = null;
      try {
        responseBody = await response.json();
      } catch (_parseError) {
        responseBody = null;
      }

      if (!response.ok) {
        if (response.status === 409) {
          bookingFeedback.textContent =
            (responseBody && responseBody.message) ||
            t("feedback.slotUnavailable");
          bookingFeedback.style.color = "#7a1e1e";
          return;
        }

        throw new Error("request_failed");
      }

      bookingFeedback.textContent = t("feedback.success");
      bookingFeedback.style.color = "#2d5c2c";
      bookingForm.reset();
    } catch (error) {
      bookingFeedback.textContent = t("feedback.failed");
      bookingFeedback.style.color = "#7a1e1e";
    }
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
