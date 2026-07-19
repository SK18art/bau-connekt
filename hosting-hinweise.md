# Hosting-Hinweise für bau-connekt.com und bau-connekt.de

Die Website ist als statische Seite vorbereitet und kann bei jedem üblichen Webhoster hochgeladen werden.

Empfohlene Domain-Schaltung:

- Hauptdomain: `bau-connekt.de`
- Weiterleitung: `bau-connekt.com` leitet per `301` auf `https://bau-connekt.de` weiter

Wichtig: Beide Domains sollten nicht gegenseitig aufeinander weiterleiten, sonst entsteht eine Endlosschleife. Alternativ können beide Domains denselben Webspace anzeigen; für Suchmaschinen ist eine Hauptdomain trotzdem sinnvoll.

Beispiel für Apache `.htaccess`, wenn `bau-connekt.de` die Hauptdomain sein soll:

```apache
RewriteEngine On
RewriteCond %{HTTP_HOST} ^(www\.)?bau-connekt\.com$ [NC]
RewriteRule ^(.*)$ https://bau-connekt.de/$1 [L,R=301]
```

Wenn stattdessen `bau-connekt.com` die Hauptdomain sein soll, müssen Canonical-Link und Weiterleitung entsprechend auf `.com` geändert werden.
