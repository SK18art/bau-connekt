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
