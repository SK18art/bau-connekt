# Bau-Connekt Website

Statische Unternehmenswebsite für die Bau-Connekt GmbH.

## Inhalt

- Responsive HTML/CSS-Website
- Logo und Bildmaterial im Ordner `assets/`
- Projektanfrage als Formular-Popup
- Kunden- und Unternehmer-Registrierung im Kontaktbereich
- Mehrsprachiger 24h-Chatbot als statisches Website-Widget
- E-Mail-Vorbereitung an `r.khaki@bau-connekt.com`

## Projektstruktur

```text
.
├── assets/
│   ├── bau-connekt-logo-web.png
│   ├── bau-connekt-logo.png
│   ├── glasfaser-installation.png
│   └── hero-tiefbau-glasfaser.png
├── index.html
├── script.js
├── style.css
├── hosting-hinweise.md
├── .editorconfig
└── .gitignore
```

## Lokal öffnen

Die Website kann direkt im Browser geöffnet werden:

```text
index.html
```

Alternativ kann ein lokaler statischer Server genutzt werden, zum Beispiel:

```bash
python3 -m http.server 8080
```

Danach im Browser öffnen:

```text
http://localhost:8080
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

Die Website ist statisch und kann auf normalen Webhostings, Netlify, Vercel, GitHub Pages oder ähnlichen Diensten veröffentlicht werden.

Weitere Hinweise stehen in:

```text
hosting-hinweise.md
```
