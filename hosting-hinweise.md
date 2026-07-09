# Hosting-Hinweise für bau-connekt.com und bau-connekt.de

Die Website ist als statische Seite vorbereitet und kann bei jedem üblichen Webhoster hochgeladen werden.

Empfohlene Domain-Schaltung:

- Hauptdomain: `bau-connekt.com`
- Weiterleitung: `bau-connekt.de` leitet per `301` auf `https://bau-connekt.com` weiter

Wichtig: Beide Domains sollten nicht gegenseitig aufeinander weiterleiten, sonst entsteht eine Endlosschleife. Alternativ können beide Domains denselben Webspace anzeigen; für Suchmaschinen ist eine Hauptdomain trotzdem sinnvoll.

Beispiel für Apache `.htaccess`, wenn `bau-connekt.com` die Hauptdomain sein soll:

```apache
RewriteEngine On
RewriteCond %{HTTP_HOST} ^(www\.)?bau-connekt\.de$ [NC]
RewriteRule ^(.*)$ https://bau-connekt.com/$1 [L,R=301]
```

Wenn stattdessen `bau-connekt.de` die Hauptdomain sein soll, müssen Canonical-Link und Weiterleitung entsprechend auf `.de` geändert werden.
