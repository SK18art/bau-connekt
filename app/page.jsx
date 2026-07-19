'use client';

import { useRef } from 'react';

const recipient = 'r.khaki@bau-connekt.com';

function sendMailForm(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const formData = new FormData(form);
  const lines = [];

  formData.forEach((value, key) => {
    const cleanValue = String(value).trim();
    if (cleanValue) {
      lines.push(`${key}: ${cleanValue}`);
    }
  });

  const subject = form.dataset.subject || 'Anfrage über die Website';
  const body = lines.join('\n');
  window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function Home() {
  const projectDialogRef = useRef(null);

  function openProjectDialog() {
    const dialog = projectDialogRef.current;
    if (dialog && typeof dialog.showModal === 'function') {
      dialog.showModal();
      return;
    }

    window.location.href = `mailto:${recipient}`;
  }

  function closeProjectDialog() {
    projectDialogRef.current?.close();
  }

  function closeDialogFromBackdrop(event) {
    if (event.target === projectDialogRef.current) {
      closeProjectDialog();
    }
  }

  return (
    <>
      <header className="topbar">
        <nav className="wrap nav" aria-label="Hauptnavigation">
          <a className="logo" href="#start" aria-label="Bau-Connekt Startseite">
            <img
              className="brand-logo"
              src="/assets/bau-connekt-logo-web.png"
              alt="Bau-Connekt GmbH"
              width="266"
              height="140"
            />
          </a>
          <div className="navlinks">
            <a href="#leistungen">Leistungen</a>
            <a href="#unternehmen">Unternehmen</a>
            <a href="#kontakt">Kontakt</a>
          </div>
        </nav>
      </header>

      <main id="start">
        <section className="hero" aria-label="Bau-Connekt Tiefbau und Glasfaser">
          <div className="wrap">
            <div className="hero-content">
              <p className="eyebrow">Tiefbau · Glasfaser · Telekommunikationsnetze</p>
              <h1>Bau-Connekt GmbH baut moderne Infrastruktur für vernetzte Städte.</h1>
              <p>
                Von Tiefbauarbeiten über die Verlegung und den Anschluss von Glasfaser- und Telekommunikationsnetzen
                bis zu Wartung, Reparatur und technischer Infrastrukturbetreuung.
              </p>
              <div className="hero-actions">
                <button className="button primary" type="button" onClick={openProjectDialog}>
                  Projekt anfragen
                </button>
                <a className="button secondary" href="#leistungen">
                  Leistungen ansehen
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="trust-row" aria-label="Kurzprofil">
          <div className="trust-item">
            <strong>Sitz in Köln</strong>
            <span>Regional verwurzelt und für Infrastrukturprojekte im Einsatz.</span>
          </div>
          <div className="trust-item">
            <strong>Adresse in Köln</strong>
            <span>Geschäftsanschrift: Clevischer Ring 61, 51063 Köln.</span>
          </div>
          <div className="trust-item">
            <strong>Klare Verantwortung</strong>
            <span>Geschäftsführer und Gesellschafter: Reza Khaki.</span>
          </div>
        </div>

        <section id="leistungen">
          <div className="wrap">
            <div className="section-head">
              <h2>Leistungen für belastbare Netze</h2>
              <p>
                Bau-Connekt verbindet Bauausführung, Netztechnik und Materialkompetenz zu einem praxisnahen
                Leistungsangebot für Telekommunikations- und Infrastrukturprojekte.
              </p>
            </div>
            <div className="services">
              <article className="service">
                <div className="icon" aria-hidden="true">
                  01
                </div>
                <h3>Tiefbauarbeiten</h3>
                <p>
                  Ausführung von Tiefbauarbeiten für Leitungswege, Trassen, Hausanschlüsse und vorbereitende
                  Infrastrukturmaßnahmen.
                </p>
              </article>
              <article className="service">
                <div className="icon" aria-hidden="true">
                  02
                </div>
                <h3>Glasfaser & Telekommunikation</h3>
                <p>
                  Ausbau, Verlegung und Anschluss von Glasfaser- und Telekommunikationsnetzen inklusive Montage
                  und Installation.
                </p>
              </article>
              <article className="service">
                <div className="icon" aria-hidden="true">
                  03
                </div>
                <h3>Wartung & Reparatur</h3>
                <p>
                  Technische Servicearbeiten rund um Netzwerktechnik, Infrastruktur, Komponenten und laufende
                  Betriebsbereitschaft.
                </p>
              </article>
              <article className="service">
                <div className="icon" aria-hidden="true">
                  04
                </div>
                <h3>Baustoffhandel</h3>
                <p>Handel mit Baustoffen, Maschinen und technischen Komponenten für Bau- und Infrastrukturprojekte.</p>
              </article>
              <article className="service">
                <div className="icon" aria-hidden="true">
                  05
                </div>
                <h3>Infrastrukturtechnik</h3>
                <p>
                  Dienstleistungen im Bereich Infrastruktur- und Netzwerktechnik mit Blick auf praktische Umsetzung
                  und Projektabläufe.
                </p>
              </article>
              <article className="service">
                <div className="icon" aria-hidden="true">
                  06
                </div>
                <h3>Handelsverträge</h3>
                <p>Unterstützung und Abwicklung von Handelsverträgen im Umfeld von Bau, Technik und Netzwerkkomponenten.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="unternehmen" className="split">
          <div className="wrap about-grid">
            <div className="about-text">
              <p className="eyebrow" style={{ color: 'var(--brand)' }}>
                Unternehmen
              </p>
              <h2>Ein Ansprechpartner für Bau, Montage und Netzanschluss.</h2>
              <p>
                Die Bau-Connekt GmbH steht für strukturierte Ausführung im Tiefbau und für technische Arbeiten an
                Glasfaser- und Telekommunikationsnetzen. Das Unternehmen unterstützt Projekte von der baulichen
                Vorbereitung über die Installation bis zu Wartungs- und Reparaturarbeiten.
              </p>
              <ul className="checks">
                <li>Ausbau und Verlegung von Glasfaser- und Telekommunikationsnetzen</li>
                <li>Bau-, Montage-, Installations-, Wartungs- und Reparaturarbeiten</li>
                <li>Handel mit Baustoffen, Maschinen und technischen Komponenten</li>
              </ul>
            </div>
            <figure className="about-image">
              <img
                src="/assets/glasfaser-installation.png"
                alt="Techniker arbeitet an Glasfaser- und Telekommunikationsleitungen"
                width="1448"
                height="1086"
                loading="lazy"
              />
            </figure>
          </div>
        </section>

        <section id="kontakt" className="contact">
          <div className="wrap contact-grid">
            <div className="contact-box">
              <p className="eyebrow">Kontakt</p>
              <h2>Sprechen wir über Ihr Infrastrukturprojekt.</h2>
              <p>Für Projektanfragen, technische Abstimmungen oder Angebote erreichen Sie Bau-Connekt direkt per E-Mail.</p>
              <p>
                <button className="button primary" type="button" onClick={openProjectDialog} style={{ marginTop: 24 }}>
                  Projekt anfragen
                </button>
              </p>
            </div>
            <div className="contact-box details">
              <div className="detail">
                <span>Firma</span>
                <strong>Bau-Connekt GmbH</strong>
              </div>
              <div className="detail">
                <span>Sitz</span>
                <strong>Köln</strong>
              </div>
              <div className="detail">
                <span>Geschäftsanschrift</span>
                <strong>Clevischer Ring 61, 51063 Köln</strong>
              </div>
              <div className="detail">
                <span>Geschäftsführer und Gesellschafter</span>
                <strong>Reza Khaki</strong>
              </div>
              <div className="detail">
                <span>E-Mail</span>
                <a href="mailto:r.khaki@bau-connekt.com">r.khaki@bau-connekt.com</a>
              </div>
            </div>
            <div className="contact-box registration">
              <p className="eyebrow">Registrierung</p>
              <h2>Kunden- und Unternehmer-Registrierung</h2>
              <p>Kunden und ausführende Unternehmen können sich hier mit den wichtigsten Angaben registrieren.</p>
              <form
                className="form"
                action="mailto:r.khaki@bau-connekt.com"
                method="post"
                encType="text/plain"
                data-subject="Registrierung über die Website"
                onSubmit={sendMailForm}
              >
                <div className="form-grid">
                  <div className="field">
                    <label htmlFor="register-type">Ich registriere mich als</label>
                    <select id="register-type" name="Art der Registrierung" required>
                      <option value="">Bitte auswählen</option>
                      <option>Kunde</option>
                      <option>Unternehmer</option>
                      <option>Partner / Lieferant</option>
                    </select>
                  </div>
                  <div className="field">
                    <label htmlFor="register-company">Firma / Name</label>
                    <input id="register-company" name="Firma / Name" autoComplete="organization" required />
                  </div>
                  <div className="field">
                    <label htmlFor="register-contact">Ansprechpartner</label>
                    <input id="register-contact" name="Ansprechpartner" autoComplete="name" required />
                  </div>
                  <div className="field">
                    <label htmlFor="register-email">E-Mail</label>
                    <input id="register-email" name="E-Mail" type="email" autoComplete="email" required />
                  </div>
                  <div className="field">
                    <label htmlFor="register-phone">Telefon</label>
                    <input id="register-phone" name="Telefon" type="tel" autoComplete="tel" />
                  </div>
                  <div className="field">
                    <label htmlFor="register-city">Ort / Einsatzgebiet</label>
                    <input id="register-city" name="Ort / Einsatzgebiet" autoComplete="address-level2" />
                  </div>
                  <div className="field full">
                    <label htmlFor="register-services">Leistungsbereich / Bedarf</label>
                    <textarea
                      id="register-services"
                      name="Leistungsbereich / Bedarf"
                      placeholder="Zum Beispiel Tiefbau, Glasfaser, Montage, Baustoffe, Maschinen oder Netzwerktechnik"
                    />
                  </div>
                </div>
                <p className="form-note">
                  Nach dem Absenden öffnet sich Ihr E-Mail-Programm. Die Registrierung ist an r.khaki@bau-connekt.com
                  adressiert.
                </p>
                <button className="button primary" type="submit">
                  Registrierung senden
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <dialog
        className="modal"
        id="project-dialog"
        aria-labelledby="project-dialog-title"
        ref={projectDialogRef}
        onClick={closeDialogFromBackdrop}
      >
        <div className="modal-panel">
          <div className="modal-head">
            <div>
              <p className="eyebrow" style={{ color: 'var(--brand)' }}>
                Projektanfrage
              </p>
              <h2 id="project-dialog-title">Anfrage stellen</h2>
              <p>Beschreiben Sie kurz Ihr Vorhaben. Die Angaben werden als E-Mail an Bau-Connekt vorbereitet.</p>
            </div>
            <button className="close-button" type="button" onClick={closeProjectDialog} aria-label="Formular schließen">
              ×
            </button>
          </div>
          <form
            className="form"
            action="mailto:r.khaki@bau-connekt.com"
            method="post"
            encType="text/plain"
            data-subject="Projektanfrage über die Website"
            onSubmit={sendMailForm}
          >
            <div className="form-grid">
              <div className="field">
                <label htmlFor="project-name">Name / Firma</label>
                <input id="project-name" name="Name / Firma" autoComplete="organization" required />
              </div>
              <div className="field">
                <label htmlFor="project-contact">Ansprechpartner</label>
                <input id="project-contact" name="Ansprechpartner" autoComplete="name" required />
              </div>
              <div className="field">
                <label htmlFor="project-email">E-Mail</label>
                <input id="project-email" name="E-Mail" type="email" autoComplete="email" required />
              </div>
              <div className="field">
                <label htmlFor="project-phone">Telefon</label>
                <input id="project-phone" name="Telefon" type="tel" autoComplete="tel" />
              </div>
              <div className="field">
                <label htmlFor="project-service">Gewünschte Leistung</label>
                <select id="project-service" name="Gewünschte Leistung" required>
                  <option value="">Bitte auswählen</option>
                  <option>Tiefbauarbeiten</option>
                  <option>Glasfaser- und Telekommunikationsnetze</option>
                  <option>Montage / Installation</option>
                  <option>Wartung / Reparatur</option>
                  <option>Baustoffe, Maschinen oder Komponenten</option>
                  <option>Sonstiges</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="project-location">Projektort</label>
                <input id="project-location" name="Projektort" autoComplete="address-level2" />
              </div>
              <div className="field full">
                <label htmlFor="project-message">Projektbeschreibung</label>
                <textarea
                  id="project-message"
                  name="Projektbeschreibung"
                  placeholder="Bitte kurz Umfang, Zeitraum und besondere Anforderungen beschreiben"
                  required
                />
              </div>
            </div>
            <p className="form-note">
              Nach dem Absenden öffnet sich Ihr E-Mail-Programm. Die Anfrage ist an r.khaki@bau-connekt.com adressiert.
            </p>
            <button className="button primary" type="submit">
              Anfrage senden
            </button>
          </form>
        </div>
      </dialog>

      <footer>
        <div className="wrap foot">
          <span>© 2026 Bau-Connekt GmbH. Alle Rechte vorbehalten.</span>
          <nav className="footer-links" aria-label="Rechtliche Links">
            <a href="#impressum">Impressum</a>
            <a href="#datenschutz">Datenschutz</a>
            <a href="#cookie-richtlinie">Cookie-Richtlinie</a>
          </nav>
        </div>
      </footer>
    </>
  );
}
