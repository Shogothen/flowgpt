# Flow your Design – Website

Statische Website für flowyourdesign.com, gebaut für GitHub Pages. Kein Build-Schritt, kein Framework – HTML, CSS, ein kleines JS.

## Struktur

| Datei | Inhalt |
|---|---|
| `index.html` | Startseite: Hero, Positionierung (Mütter), drei Säulen, Chartrechner-Band, Angebots-Teaser, Story-Teaser, CTA |
| `angebot.html` | Komplette Produkttreppe mit Preisen, Hinweisen und FAQ |
| `ueber-mich.html` | Story, Arbeitsweise, alle sechs Ausbildungen als Trust-Sektion |
| `human-design.html` | HD-Erklärseite mit Chartrechner-Integration |
| `kontakt.html` | E-Mail, Buchungskalender, Socials |
| `impressum.html` / `datenschutz.html` | Rechtstexte mit [PLATZHALTERN] – vor Livegang füllen |
| `klang.html` | Klangraum (Gruppe) und persönliche Klangsession |
| `anfrage.html` | Anfrageformular (FormSubmit) mit Angebots-Vorauswahl |
| `styles.css` | Komplettes Designsystem |
| `site.js` | Mobile-Nav, Scroll-Reveal, aktiver Nav-Punkt |

## Deployment (dein üblicher Weg)

1. Neues Repo anlegen (z. B. `flowyourdesign-site`), alle Dateien hochladen.
2. Settings → Pages → Branch `main`, Ordner `/ (root)`.
3. Hard Refresh nach Updates wie gewohnt.

## Vor dem Livegang – Pflicht

- [ ] Impressum: Anschrift, ggf. Telefon, USt-Angabe eintragen, gelben Hinweiskasten löschen
- [ ] Anfrageformular aktivieren: einmal selbst über `anfrage.html` absenden und den Bestätigungslink von FormSubmit in Sarahs Postfach anklicken (sonst werden Anfragen nicht zugestellt)
- [ ] Datenschutz: Anschrift eintragen, Hinweiskasten löschen; Widerrufsbelehrung für Online-Buchungen ergänzen (IHK-Vorgaben prüfen)
- [ ] TidyCal aufräumen: doppeltes Sound-Bath-Listing löschen, Sound Bath auf 29 € (Gruppe), Wake-up Call in „Orientierungsgespräch (20 Min)“ umbenennen und auf 20 Minuten kürzen
- [ ] Altes 88-€-Basic-Reading deaktivieren; neue Listings anlegen: Blueprint & Direction (189 € Einführung / 229 € regulär, 90 Min), Systemisches Coaching (149 € / 5er 690 €), Parent & Child Compass (299 €), Family Dynamics Intensive (449 €), Private Sound Session (129 €, 75 Min), Sound-Bath-Fünferkarte (125 €) – danach die `mailto:`-Buttons in `angebot.html` gegen TidyCal-Links tauschen
- [ ] Neue Angebote in TidyCal/Preisliste nachziehen: Klar entscheiden (399 €, 3 Sessions), Flow Circle (29 €/Monat, erst nach Warteliste starten), Mini-Klangreise (15-Min-Audio aufnehmen und als Antwortmail-Vorlage hinterlegen)
- [ ] Zurück zu dir: Gründungsrunden-Preis 990 € gilt für die ersten sechs Teilnehmerinnen, danach auf 1.490 € anheben (Datum/Zähler intern festhalten)

## Aus dem Businessplan noch offen (nicht Website, aber als Nächstes)

- Chartrechner auf `chart.flowyourdesign.com` umziehen, CTA zur Buchung + freiwillige E-Mail-Erfassung einbauen (Basis-Chart bleibt ohne E-Mail-Pflicht)
- Premium-Report (29 €) als erste App-Monetarisierung testen; GitHub-Repository vor größerem Rollout auf privat stellen oder Build-Deployment trennen
- E-Mail-Strecke (5 Mails) nach Chartberechnung aufsetzen
- 6 Beta-Kundinnen für Back to You über Bestandskontakte und lokale Netzwerke gewinnen, Fallstudien dokumentieren

## Neue Fotos einpflegen (picdrop-Galerie)

Die Galerie ist für automatische Zugriffe gesperrt – daher manuell: Fotos aus picdrop herunterladen, die fünf besten in `/assets` legen und in den HTML-Dateien die `assets.zyrosite.com`-URLs ersetzen (einfach nach `zyrosite` suchen). Empfohlene Zuordnung: 1 warmes Hochformat-Portrait für den Hero (`index.html`), 1 Portrait + 1 Ambiente für die Collage, je 1 Bild für Klar-entscheiden-, Flow-Circle- und Klang-Sektion. Hochformate ca. 4:5 beschneiden, unter 400 KB pro Bild (z. B. squoosh.app).

## Schrift TAN Twinkle (Sarahs Wunsch-Highlight-Schrift)

TAN Twinkle ist eine kommerzielle Schrift der TAN Type Foundry und darf nicht ohne Lizenz eingebunden werden. Lizenz kaufen (tantypefoundry.com, Desktop+Web), die Datei als `fonts/TANTwinkle.woff2` ablegen – fertig, der `@font-face`-Slot existiert bereits. Bis dahin zeigt die Seite automatisch Marcellus – die Schrift des Chartrechners. Grundschrift ist Jost (wie im Rechner); Raleway liegt weiter im Fonts-Ordner, ein Wechsel ist eine Zeile in styles.css (--font-body).

## Nächste Ausbaustufen

- **Eigene Domain:** Repo → Settings → Pages → Custom Domain `flowyourdesign.com` (bzw. erst als Testlauf unter Subdomain). Für den Chartrechner: `chart.flowyourdesign.com` als CNAME auf `shogothen.github.io` legen.
- ~~Google Fonts lokal einbinden~~ Erledigt: Schriften liegen als WOFF2 in `/fonts`, Datenschutz ist angepasst.
- **Bilder:** Aktuell laufen alle Fotos über das Zyrosite-CDN der alten Hostinger-Seite. Solange die Hostinger-Seite existiert, funktioniert das. Vor Kündigung von Hostinger: Originalfotos herunterladen, in `/assets` legen, `src`-Pfade tauschen.
- **Kundenstimmen:** Auskommentierter Block ist auf der Startseite vorbereitet (Suche nach „KUNDENSTIMMEN“). Nur echte, konkrete Stimmen einsetzen – keine erfundenen Zitate. Bis dahin bleibt der Block unsichtbar.
- **E-Mail-Liste:** Newsletter-Anbieter (z. B. Brevo, EU-Server) anbinden, PDF-Report im Chartrechner hinter E-Mail-Eingabe legen, Datenschutz ergänzen.
