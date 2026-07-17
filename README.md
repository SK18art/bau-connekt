# Bau-Connekt Website

Next.js-Unternehmenswebsite für die Bau-Connekt GmbH.

## Inhalt

- Responsive Next.js-Website
- Logo und Bildmaterial im Ordner `public/assets/`
- Projektanfrage als Formular-Popup
- Kunden- und Unternehmer-Registrierung im Kontaktbereich
- Mehrsprachiger 24h-Chatbot als statisches Website-Widget
- E-Mail-Vorbereitung an `r.khaki@bau-connekt.com`

## Projektstruktur

```text
.
├── app/
│   ├── globals.css
│   ├── layout.jsx
│   └── page.jsx
├── public/
│   ├── assets/
│   ├── robots.txt
│   └── sitemap.xml
├── index.html
├── next.config.mjs
├── package-lock.json
├── package.json
├── script.js
├── style.css
├── hosting-hinweise.md
├── .editorconfig
└── .gitignore
```

Die aktive Next.js-Anwendung liegt in `app/` und `public/`. Die ursprünglichen statischen Dateien `index.html`, `style.css`, `script.js` und `assets/` bleiben als Referenz erhalten.

## Lokal entwickeln

Abhängigkeiten installieren:

```bash
npm install
```

Entwicklungsserver starten:

```bash
npm run dev
```

Danach im Browser öffnen:

```text
http://localhost:3000
```

## Formulare

Die Formulare sind als statische `mailto:`-Formulare umgesetzt. Beim Absenden öffnet sich das E-Mail-Programm des Besuchers mit den vorbereiteten Angaben.

Zieladresse für Projektanfragen und Registrierungen:

```text
r.khaki@bau-connekt.com
```

Wichtig: Für automatisches Absenden ohne E-Mail-Programm ist später ein Formularservice oder Backend nötig.

## Chatbot

Der Chatbot läuft vollständig im Browser und beantwortet typische Fragen zu Leistungen, Kontakt, Projektanfrage und Registrierung in mehreren Sprachen.

Für einen echten KI-Chatbot mit freien Antworten und automatischer E-Mail-Verarbeitung ist später ein Backend/API-Service nötig.

## Deployment

## Statischer Export

Das Projekt ist für statischen Export vorbereitet:

```bash
npm run build
```

Der fertige Export liegt danach im Ordner `out/`.

## Deployment

Die Website kann auf Vercel, Netlify, GitHub Pages oder jedem Hosting veröffentlicht werden, das statische Next.js-Exports unterstützt.

Weitere Hinweise stehen in:

```text
hosting-hinweise.md
```
