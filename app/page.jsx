'use client';

import { useEffect } from 'react';

const pageMarkup = '\n    <header class="topbar">\n      <nav class="wrap nav" aria-label="Hauptnavigation">\n        <a class="logo" href="#start" aria-label="Bau-Connekt Startseite">\n          <img\n            class="brand-logo"\n            src="/assets/bau-connekt-logo-web.png"\n            alt="Bau-Connekt GmbH"\n            width="266"\n            height="140"\n          />\n        </a>\n        <div class="navlinks">\n          <a href="#leistungen">Leistungen</a>\n          <a href="#unternehmen">Unternehmen</a>\n          <a href="#kontakt">Kontakt</a>\n        </div>\n      </nav>\n    </header>\n\n    <main id="start">\n      <section class="hero" aria-label="Bau-Connekt Tiefbau und Glasfaser">\n        <div class="wrap">\n          <div class="hero-content">\n            <p class="eyebrow">Tiefbau · Glasfaser · Telekommunikationsnetze</p>\n            <h1>Bau-Connekt GmbH baut moderne Infrastruktur für vernetzte Städte.</h1>\n            <p>\n              Von Tiefbauarbeiten über die Verlegung und den Anschluss von Glasfaser- und Telekommunikationsnetzen\n              bis zu Wartung, Reparatur und technischer Infrastrukturbetreuung.\n            </p>\n            <div class="hero-actions">\n              <button class="button primary" type="button" data-open-project>Projekt anfragen</button>\n              <a class="button secondary" href="#leistungen">Leistungen ansehen</a>\n            </div>\n          </div>\n        </div>\n      </section>\n\n      <div class="trust-row" aria-label="Kurzprofil">\n        <div class="trust-item">\n          <strong>Sitz in Köln</strong>\n          <span>Regional verwurzelt und für Infrastrukturprojekte im Einsatz.</span>\n        </div>\n        <div class="trust-item">\n          <strong>Adresse in Köln</strong>\n          <span>Geschäftsanschrift: Clevischer Ring 61, 51063 Köln.</span>\n        </div>\n        <div class="trust-item">\n          <strong>Klare Verantwortung</strong>\n          <span>Geschäftsführer und Gesellschafter: Reza Khaki.</span>\n        </div>\n      </div>\n\n      <section id="leistungen">\n        <div class="wrap">\n          <div class="section-head">\n            <h2>Leistungen für belastbare Netze</h2>\n            <p>\n              Bau-Connekt verbindet Bauausführung, Netztechnik und Materialkompetenz zu einem praxisnahen\n              Leistungsangebot für Telekommunikations- und Infrastrukturprojekte.\n            </p>\n          </div>\n          <div class="services">\n            <article class="service">\n              <div class="icon" aria-hidden="true">01</div>\n              <h3>Tiefbauarbeiten</h3>\n              <p>\n                Ausführung von Tiefbauarbeiten für Leitungswege, Trassen, Hausanschlüsse und vorbereitende\n                Infrastrukturmaßnahmen.\n              </p>\n            </article>\n            <article class="service">\n              <div class="icon" aria-hidden="true">02</div>\n              <h3>Glasfaser & Telekommunikation</h3>\n              <p>\n                Ausbau, Verlegung und Anschluss von Glasfaser- und Telekommunikationsnetzen inklusive Montage\n                und Installation.\n              </p>\n            </article>\n            <article class="service">\n              <div class="icon" aria-hidden="true">03</div>\n              <h3>Wartung & Reparatur</h3>\n              <p>\n                Technische Servicearbeiten rund um Netzwerktechnik, Infrastruktur, Komponenten und laufende\n                Betriebsbereitschaft.\n              </p>\n            </article>\n            <article class="service">\n              <div class="icon" aria-hidden="true">04</div>\n              <h3>Baustoffhandel</h3>\n              <p>\n                Handel mit Baustoffen, Maschinen und technischen Komponenten für Bau- und Infrastrukturprojekte.\n              </p>\n            </article>\n            <article class="service">\n              <div class="icon" aria-hidden="true">05</div>\n              <h3>Infrastrukturtechnik</h3>\n              <p>\n                Dienstleistungen im Bereich Infrastruktur- und Netzwerktechnik mit Blick auf praktische Umsetzung\n                und Projektabläufe.\n              </p>\n            </article>\n            <article class="service">\n              <div class="icon" aria-hidden="true">06</div>\n              <h3>Handelsverträge</h3>\n              <p>\n                Unterstützung und Abwicklung von Handelsverträgen im Umfeld von Bau, Technik und Netzwerkkomponenten.\n              </p>\n            </article>\n          </div>\n        </div>\n      </section>\n\n      <section id="unternehmen" class="split">\n        <div class="wrap about-grid">\n          <div class="about-text">\n            <p class="eyebrow" style="color: var(--brand);">Unternehmen</p>\n            <h2>Ein Ansprechpartner für Bau, Montage und Netzanschluss.</h2>\n            <p>\n              Die Bau-Connekt GmbH steht für strukturierte Ausführung im Tiefbau und für technische Arbeiten an\n              Glasfaser- und Telekommunikationsnetzen. Das Unternehmen unterstützt Projekte von der baulichen\n              Vorbereitung über die Installation bis zu Wartungs- und Reparaturarbeiten.\n            </p>\n            <ul class="checks">\n              <li>Ausbau und Verlegung von Glasfaser- und Telekommunikationsnetzen</li>\n              <li>Bau-, Montage-, Installations-, Wartungs- und Reparaturarbeiten</li>\n              <li>Handel mit Baustoffen, Maschinen und technischen Komponenten</li>\n            </ul>\n          </div>\n          <figure class="about-image">\n            <img\n              src="/assets/glasfaser-installation.png"\n              alt="Techniker arbeitet an Glasfaser- und Telekommunikationsleitungen"\n              width="1448"\n              height="1086"\n              loading="lazy"\n            />\n          </figure>\n        </div>\n      </section>\n\n      <section id="kontakt" class="contact">\n        <div class="wrap contact-grid">\n          <div class="contact-box">\n            <p class="eyebrow">Kontakt</p>\n            <h2>Sprechen wir über Ihr Infrastrukturprojekt.</h2>\n            <p>\n              Für Projektanfragen, technische Abstimmungen oder Angebote erreichen Sie Bau-Connekt direkt per E-Mail.\n            </p>\n            <p>\n              <button class="button primary" type="button" data-open-project style="margin-top: 24px;">\n                Projekt anfragen\n              </button>\n            </p>\n          </div>\n          <div class="contact-box details">\n            <div class="detail">\n              <span>Firma</span>\n              <strong>Bau-Connekt GmbH</strong>\n            </div>\n            <div class="detail">\n              <span>Sitz</span>\n              <strong>Köln</strong>\n            </div>\n            <div class="detail">\n              <span>Geschäftsanschrift</span>\n              <strong>Clevischer Ring 61, 51063 Köln</strong>\n            </div>\n            <div class="detail">\n              <span>Geschäftsführer und Gesellschafter</span>\n              <strong>Reza Khaki</strong>\n            </div>\n            <div class="detail">\n              <span>E-Mail</span>\n              <a href="mailto:r.khaki@bau-connekt.com">r.khaki@bau-connekt.com</a>\n            </div>\n          </div>\n          <div class="contact-box registration">\n            <p class="eyebrow">Registrierung</p>\n            <h2>Kunden- und Unternehmer-Registrierung</h2>\n            <p>\n              Kunden und ausführende Unternehmen können sich hier mit den wichtigsten Angaben registrieren.\n            </p>\n            <form\n              class="form"\n              action="mailto:r.khaki@bau-connekt.com"\n              method="post"\n              enctype="text/plain"\n              data-mail-form\n              data-subject="Registrierung über die Website"\n            >\n              <div class="form-grid">\n                <div class="field">\n                  <label for="register-type">Ich registriere mich als</label>\n                  <select id="register-type" name="Art der Registrierung" required>\n                    <option value="">Bitte auswählen</option>\n                    <option>Kunde</option>\n                    <option>Unternehmer</option>\n                    <option>Partner / Lieferant</option>\n                  </select>\n                </div>\n                <div class="field">\n                  <label for="register-company">Firma / Name</label>\n                  <input id="register-company" name="Firma / Name" autocomplete="organization" required />\n                </div>\n                <div class="field">\n                  <label for="register-contact">Ansprechpartner</label>\n                  <input id="register-contact" name="Ansprechpartner" autocomplete="name" required />\n                </div>\n                <div class="field">\n                  <label for="register-email">E-Mail</label>\n                  <input id="register-email" name="E-Mail" type="email" autocomplete="email" required />\n                </div>\n                <div class="field">\n                  <label for="register-phone">Telefon</label>\n                  <input id="register-phone" name="Telefon" type="tel" autocomplete="tel" />\n                </div>\n                <div class="field">\n                  <label for="register-city">Ort / Einsatzgebiet</label>\n                  <input id="register-city" name="Ort / Einsatzgebiet" autocomplete="address-level2" />\n                </div>\n                <div class="field full">\n                  <label for="register-services">Leistungsbereich / Bedarf</label>\n                  <textarea\n                    id="register-services"\n                    name="Leistungsbereich / Bedarf"\n                    placeholder="Zum Beispiel Tiefbau, Glasfaser, Montage, Baustoffe, Maschinen oder Netzwerktechnik"\n                  ></textarea>\n                </div>\n              </div>\n              <p class="form-note">\n                Nach dem Absenden öffnet sich Ihr E-Mail-Programm. Die Registrierung ist an\n                r.khaki@bau-connekt.com adressiert.\n              </p>\n              <button class="button primary" type="submit">Registrierung senden</button>\n            </form>\n          </div>\n        </div>\n      </section>\n    </main>\n\n    <dialog class="modal" id="project-dialog" aria-labelledby="project-dialog-title">\n      <div class="modal-panel">\n        <div class="modal-head">\n          <div>\n            <p class="eyebrow" style="color: var(--brand);">Projektanfrage</p>\n            <h2 id="project-dialog-title">Anfrage stellen</h2>\n            <p>Beschreiben Sie kurz Ihr Vorhaben. Die Angaben werden als E-Mail an Bau-Connekt vorbereitet.</p>\n          </div>\n          <button class="close-button" type="button" data-close-project aria-label="Formular schließen">×</button>\n        </div>\n        <form\n          class="form"\n          action="mailto:r.khaki@bau-connekt.com"\n          method="post"\n          enctype="text/plain"\n          data-mail-form\n          data-subject="Projektanfrage über die Website"\n        >\n          <div class="form-grid">\n            <div class="field">\n              <label for="project-name">Name / Firma</label>\n              <input id="project-name" name="Name / Firma" autocomplete="organization" required />\n            </div>\n            <div class="field">\n              <label for="project-contact">Ansprechpartner</label>\n              <input id="project-contact" name="Ansprechpartner" autocomplete="name" required />\n            </div>\n            <div class="field">\n              <label for="project-email">E-Mail</label>\n              <input id="project-email" name="E-Mail" type="email" autocomplete="email" required />\n            </div>\n            <div class="field">\n              <label for="project-phone">Telefon</label>\n              <input id="project-phone" name="Telefon" type="tel" autocomplete="tel" />\n            </div>\n            <div class="field">\n              <label for="project-service">Gewünschte Leistung</label>\n              <select id="project-service" name="Gewünschte Leistung" required>\n                <option value="">Bitte auswählen</option>\n                <option>Tiefbauarbeiten</option>\n                <option>Glasfaser- und Telekommunikationsnetze</option>\n                <option>Montage / Installation</option>\n                <option>Wartung / Reparatur</option>\n                <option>Baustoffe, Maschinen oder Komponenten</option>\n                <option>Sonstiges</option>\n              </select>\n            </div>\n            <div class="field">\n              <label for="project-location">Projektort</label>\n              <input id="project-location" name="Projektort" autocomplete="address-level2" />\n            </div>\n            <div class="field full">\n              <label for="project-message">Projektbeschreibung</label>\n              <textarea\n                id="project-message"\n                name="Projektbeschreibung"\n                placeholder="Bitte kurz Umfang, Zeitraum und besondere Anforderungen beschreiben"\n                required\n              ></textarea>\n            </div>\n          </div>\n          <p class="form-note">\n            Nach dem Absenden öffnet sich Ihr E-Mail-Programm. Die Anfrage ist an\n            r.khaki@bau-connekt.com adressiert.\n          </p>\n          <button class="button primary" type="submit">Anfrage senden</button>\n        </form>\n      </div>\n    </dialog>\n\n    <footer>\n      <div class="wrap foot">\n        <span>© 2026 Bau-Connekt GmbH. Alle Rechte vorbehalten.</span>\n      </div>\n    </footer>\n\n    <div class="chatbot" id="site-chatbot">\n      <button class="chat-toggle" type="button" data-chat-open>24h Chat öffnen</button>\n      <section class="chat-window" aria-label="Bau-Connekt Chatbot">\n        <div class="chat-head">\n          <div>\n            <strong>Bau-Connekt Chatbot</strong>\n            <span>Antwortet rund um die Uhr in mehreren Sprachen</span>\n          </div>\n          <button class="chat-close" type="button" data-chat-close aria-label="Chat schließen">×</button>\n        </div>\n        <div class="chat-tools">\n          <select class="chat-language" id="chat-language" aria-label="Sprache auswählen">\n            <option value="de">Deutsch</option>\n            <option value="en">English</option>\n            <option value="tr">Türkçe</option>\n            <option value="ar">العربية</option>\n            <option value="fa">فارسی</option>\n            <option value="ru">Русский</option>\n          </select>\n          <div class="chat-quick">\n            <button class="chat-chip" type="button" data-chat-question="leistungen">Leistungen</button>\n            <button class="chat-chip" type="button" data-chat-question="anfrage">Anfrage</button>\n            <button class="chat-chip" type="button" data-chat-question="registrierung">Registrierung</button>\n            <button class="chat-chip" type="button" data-chat-question="kontakt">Kontakt</button>\n          </div>\n        </div>\n        <div class="chat-messages" id="chat-messages" aria-live="polite"></div>\n        <form class="chat-input-row" id="chat-form">\n          <input\n            class="chat-input"\n            id="chat-input"\n            name="chat"\n            placeholder="Ihre Frage eingeben..."\n            autocomplete="off"\n          />\n          <button class="chat-send" type="submit">Senden</button>\n        </form>\n      </section>\n    </div>\n';

export default function Home() {
  useEffect(() => {
    if (document.body.dataset.bauConnektReady === 'true') {
      return;
    }

    document.body.dataset.bauConnektReady = 'true';
    const recipient = "r.khaki@bau-connekt.com";
    const projectDialog = document.getElementById("project-dialog");

    document.querySelectorAll("[data-open-project]").forEach((button) => {
      button.addEventListener("click", () => {
        if (typeof projectDialog.showModal === "function") {
          projectDialog.showModal();
        } else {
          window.location.href = `mailto:${recipient}`;
        }
      });
    });

    document.querySelector("[data-close-project]").addEventListener("click", () => {
      projectDialog.close();
    });

    projectDialog.addEventListener("click", (event) => {
      if (event.target === projectDialog) {
        projectDialog.close();
      }
    });

    document.querySelectorAll("[data-mail-form]").forEach((form) => {
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const lines = [];

        formData.forEach((value, key) => {
          const cleanValue = String(value).trim();
          if (cleanValue) {
            lines.push(`${key}: ${cleanValue}`);
          }
        });

        const subject = form.dataset.subject || "Anfrage über die Website";
        const body = lines.join("\n");
        window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      });
    });

    const chatbot = document.getElementById("site-chatbot");
    const chatMessages = document.getElementById("chat-messages");
    const chatForm = document.getElementById("chat-form");
    const chatInput = document.getElementById("chat-input");
    const chatLanguage = document.getElementById("chat-language");

    const chatCopy = {
      de: {
        welcome:
          "Hallo, ich bin der 24h-Chat von Bau-Connekt. Ich helfe bei Tiefbau, Glasfaser, Telekommunikation, Projektanfragen und Registrierung.",
        placeholder: "Ihre Frage eingeben...",
        send: "Senden",
        services:
          "Bau-Connekt übernimmt Tiefbauarbeiten, Ausbau, Verlegung und Anschluss von Glasfaser- und Telekommunikationsnetzen sowie Montage, Installation, Wartung und Reparatur.",
        request:
          "Für eine Projektanfrage klicken Sie auf „Projekt anfragen“. Das Formular wird geöffnet und an r.khaki@bau-connekt.com vorbereitet.",
        register:
          "Kunden und Unternehmer können sich im Kontaktbereich über das Registrierungsformular anmelden. Die Registrierung geht an r.khaki@bau-connekt.com.",
        contact:
          "Sie erreichen Bau-Connekt per E-Mail an r.khaki@bau-connekt.com. Geschäftsanschrift: Clevischer Ring 61, 51063 Köln.",
        fallback:
          "Ich kann allgemeine Fragen beantworten. Für eine konkrete Anfrage nutzen Sie bitte das Formular oder schreiben Sie an r.khaki@bau-connekt.com."
      },
      en: {
        welcome:
          "Hello, I am the 24/7 Bau-Connekt chat. I can help with civil engineering, fiber optic networks, telecom projects, requests and registration.",
        placeholder: "Type your question...",
        send: "Send",
        services:
          "Bau-Connekt provides civil engineering work, fiber optic and telecom network expansion, cable installation, connection, assembly, maintenance and repair.",
        request:
          "For a project request, click “Projekt anfragen”. The form opens and prepares an email to r.khaki@bau-connekt.com.",
        register:
          "Customers and contractors can register in the contact section. The registration is sent to r.khaki@bau-connekt.com.",
        contact:
          "You can contact Bau-Connekt by email at r.khaki@bau-connekt.com. Business address: Clevischer Ring 61, 51063 Cologne, Germany.",
        fallback:
          "I can answer general questions. For a specific request, please use the form or email r.khaki@bau-connekt.com."
      },
      tr: {
        welcome:
          "Merhaba, ben Bau-Connekt 24 saat açık sohbet asistanıyım. Altyapı, fiber optik, telekom, proje talebi ve kayıt konularında yardımcı olurum.",
        placeholder: "Sorunuzu yazın...",
        send: "Gönder",
        services:
          "Bau-Connekt altyapı işleri, fiber optik ve telekom ağlarının genişletilmesi, kablo döşeme, bağlantı, montaj, bakım ve onarım hizmetleri sunar.",
        request:
          "Proje talebi için “Projekt anfragen” düğmesine tıklayın. Form açılır ve e-posta r.khaki@bau-connekt.com adresine hazırlanır.",
        register:
          "Müşteriler ve yüklenici firmalar iletişim bölümündeki kayıt formunu kullanabilir. Kayıt r.khaki@bau-connekt.com adresine gider.",
        contact:
          "Bau-Connekt ile r.khaki@bau-connekt.com adresinden iletişime geçebilirsiniz. Adres: Clevischer Ring 61, 51063 Köln.",
        fallback:
          "Genel soruları yanıtlayabilirim. Özel talepler için lütfen formu kullanın veya r.khaki@bau-connekt.com adresine yazın."
      },
      ar: {
        welcome:
          "مرحباً، أنا مساعد Bau-Connekt المتاح على مدار 24 ساعة. أساعد في أعمال البنية التحتية والألياف الضوئية والاتصالات وطلبات المشاريع والتسجيل.",
        placeholder: "اكتب سؤالك...",
        send: "إرسال",
        services:
          "تقدم Bau-Connekt أعمال الحفر والبنية التحتية، تمديد وربط شبكات الألياف الضوئية والاتصالات، التركيب، الصيانة والإصلاح.",
        request:
          "لطلب مشروع اضغط على “Projekt anfragen”. سيتم فتح النموذج وتجهيز رسالة إلى r.khaki@bau-connekt.com.",
        register:
          "يمكن للعملاء والمقاولين التسجيل من خلال نموذج التسجيل في قسم الاتصال. سيتم إرسال التسجيل إلى r.khaki@bau-connekt.com.",
        contact:
          "يمكنكم التواصل عبر البريد الإلكتروني r.khaki@bau-connekt.com. العنوان: Clevischer Ring 61, 51063 Köln.",
        fallback:
          "يمكنني الإجابة عن الأسئلة العامة. للطلبات المحددة يرجى استخدام النموذج أو مراسلة r.khaki@bau-connekt.com."
      },
      fa: {
        welcome:
          "سلام، من چت ۲۴ ساعته Bau-Connekt هستم. درباره زیرساخت، فیبر نوری، مخابرات، درخواست پروژه و ثبت‌نام کمک می‌کنم.",
        placeholder: "سؤال خود را بنویسید...",
        send: "ارسال",
        services:
          "Bau-Connekt خدمات عمرانی، توسعه و اجرای شبکه‌های فیبر نوری و مخابراتی، نصب، اتصال، نگهداری و تعمیرات ارائه می‌دهد.",
        request:
          "برای درخواست پروژه روی «Projekt anfragen» کلیک کنید. فرم باز می‌شود و ایمیل به r.khaki@bau-connekt.com آماده می‌گردد.",
        register:
          "مشتریان و پیمانکاران می‌توانند از فرم ثبت‌نام در بخش تماس استفاده کنند. ثبت‌نام به r.khaki@bau-connekt.com ارسال می‌شود.",
        contact:
          "برای تماس ایمیل بزنید: r.khaki@bau-connekt.com. آدرس: Clevischer Ring 61, 51063 Köln.",
        fallback:
          "من می‌توانم به پرسش‌های عمومی پاسخ دهم. برای درخواست مشخص از فرم استفاده کنید یا به r.khaki@bau-connekt.com ایمیل بزنید."
      },
      ru: {
        welcome:
          "Здравствуйте, я круглосуточный чат Bau-Connekt. Помогаю по вопросам земляных работ, оптоволокна, телекоммуникаций, заявок и регистрации.",
        placeholder: "Введите ваш вопрос...",
        send: "Отправить",
        services:
          "Bau-Connekt выполняет земляные работы, прокладку и подключение оптоволоконных и телекоммуникационных сетей, монтаж, обслуживание и ремонт.",
        request:
          "Для проектного запроса нажмите “Projekt anfragen”. Форма откроется и подготовит письмо на r.khaki@bau-connekt.com.",
        register:
          "Клиенты и подрядчики могут зарегистрироваться через форму в разделе контактов. Регистрация отправляется на r.khaki@bau-connekt.com.",
        contact:
          "Связаться с Bau-Connekt можно по адресу r.khaki@bau-connekt.com. Адрес: Clevischer Ring 61, 51063 Köln.",
        fallback:
          "Я отвечаю на общие вопросы. Для конкретного запроса используйте форму или напишите на r.khaki@bau-connekt.com."
      }
    };

    function currentChatCopy() {
      return chatCopy[chatLanguage.value] || chatCopy.de;
    }

    function addChatMessage(text, type = "bot") {
      const message = document.createElement("div");
      message.className = `chat-message ${type}`;
      message.textContent = text;
      chatMessages.appendChild(message);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function classifyChatQuestion(text) {
      const value = text.toLowerCase();
      if (/(leistung|service|tiefbau|glasfaser|telekom|fiber|fibre|montage|wartung|repair|hizmet|خدمات|فیبر|услуг)/i.test(value)) {
        return "services";
      }
      if (/(anfrage|angebot|projekt|request|quote|teklif|مشروع|درخواست|заявк)/i.test(value)) {
        return "request";
      }
      if (/(registr|unternehmer|kunde|contractor|customer|kayıt|تسجيل|ثبت|регистра)/i.test(value)) {
        return "register";
      }
      if (/(kontakt|email|adresse|contact|mail|telefon|iletişim|اتصال|تماس|контакт)/i.test(value)) {
        return "contact";
      }
      return "fallback";
    }

    function answerChat(questionKey) {
      const copy = currentChatCopy();
      addChatMessage(copy[questionKey] || copy.fallback);

      if (questionKey === "request" && typeof projectDialog.showModal === "function") {
        setTimeout(() => projectDialog.showModal(), 450);
      }
    }

    function resetChatGreeting() {
      chatMessages.innerHTML = "";
      const copy = currentChatCopy();
      chatInput.placeholder = copy.placeholder;
      document.querySelector(".chat-send").textContent = copy.send;
      addChatMessage(copy.welcome);
    }

    document.querySelector("[data-chat-open]").addEventListener("click", () => {
      chatbot.classList.add("is-open");
      if (!chatMessages.children.length) {
        resetChatGreeting();
      }
      chatInput.focus();
    });

    document.querySelector("[data-chat-close]").addEventListener("click", () => {
      chatbot.classList.remove("is-open");
    });

    chatLanguage.addEventListener("change", resetChatGreeting);

    document.querySelectorAll("[data-chat-question]").forEach((button) => {
      button.addEventListener("click", () => {
        const keyMap = {
          leistungen: "services",
          anfrage: "request",
          registrierung: "register",
          kontakt: "contact"
        };
        answerChat(keyMap[button.dataset.chatQuestion] || "fallback");
      });
    });

    chatForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const question = chatInput.value.trim();
      if (!question) {
        return;
      }

      addChatMessage(question, "user");
      chatInput.value = "";
      answerChat(classifyChatQuestion(question));
    });
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: pageMarkup }} />;
}
