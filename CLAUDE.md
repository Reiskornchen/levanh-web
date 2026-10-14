# CLAUDE.md – Levanh Website (levanh.com)

Statische Website für die App **Levanh** (Sauerteig-Begleiter). Gehostet über GitHub Pages.
Sprache der Seite: Deutsch, Anrede "du". Sprache mit mir: Deutsch.

## Grundprinzipien
1. Datenschutz geht vor Optik.
2. Barrierefreiheit ist Pflicht, kein Extra.
3. Rechtliche Texte nie erfinden, bei Unsicherheit nachfragen.
4. Details zählen: lieber weniger, dafür sauber.

## Technik
- Reines HTML, CSS und etwas JavaScript. Kein Framework, kein Build-Schritt, keine npm-Pakete.
- Dateien und Ordner klein geschrieben, ohne Leerzeichen oder Umlaute. Relative Pfade.
- Die Datei `CNAME` niemals ändern oder löschen.
- Struktur: index.html, impressum.html, datenschutz.html, style.css, fonts/, img/, video/.
- Bilder: width und height angeben, loading="lazy" (außer im sichtbaren Startbereich), sinnvolle Dateigröße.
- Video: selbst gehostet (mp4), unter 5 MB, mit Vorschaubild (poster), stumm, nie mit Autoplay mit Ton.
- Jede Seite hat title, meta description, lang="de", viewport, favicon.

## Datenschutz (nicht verhandelbar)
- KEINE externen Anfragen: keine CDNs, kein Google Fonts, keine Analytics, keine Karten, keine eingebetteten Videos (YouTube, Vimeo), keine Social-Media-Widgets oder -Buttons, keine Kontaktformular-Dienste.
- Schriften (Lora, Inter) nur lokal aus fonts/.
- Keine Cookies, kein localStorage, kein sessionStorage. Ausnahme nur nach Rücksprache.
- Kontakt nur per mailto-Link.
- Neue Funktion, die Daten verarbeitet oder Dritte einbindet: ERST datenschutz.html anpassen und mich fragen, dann bauen.
- Wenn sich etwas ändert, das die Datenschutzerklärung betrifft, das "Stand"-Datum dort aktualisieren.
- Keine personenbezogenen Daten in den Code, in Kommentare oder in Commit-Nachrichten schreiben.

## Rechtliches
- Impressum und Datenschutz sind von jeder Seite per Footer-Link erreichbar.
- Platzhalter in eckigen Klammern (z. B. [Straße und Hausnummer]) niemals selbst ausfüllen oder erfinden. Vor dem Livegang müssen sie ersetzt sein, darauf hinweisen.
- Keine Rechts- oder Datenschutztexte frei erfinden. Änderungen vorschlagen und kennzeichnen, dass sie rechtlich geprüft werden sollten.
- Keine Gesundheits-, Heilungs- oder Garantieversprechen. Backzeiten sind immer Richtwerte.
- Keine Store-Badges oder -Logos von Apple/Google verwenden, solange die App nicht live ist und die Badge-Richtlinien der Stores nicht eingehalten werden. Bis dahin Text "bald verfügbar".
- Keine Preise, Rabatte oder Versprechen nennen, die nicht feststehen.
- Nur eigene Bilder, Avatare, Logos und Texte. Keine Stockfotos, keine fremde Musik, keine kopierten Texte.

## Barrierefreiheit (Ziel: WCAG 2.2, Stufe AA)
- Semantisches HTML: header, nav, main, section, footer. Genau eine h1 pro Seite, Überschriften ohne Ebenen zu überspringen.
- "Zum Inhalt springen"-Link als erstes Element, sichtbar bei Fokus.
- Sichtbarer Tastaturfokus an allem Klickbaren. Reihenfolge logisch. Fokus darf nicht vom sticky Header verdeckt werden.
- Kontrast: Text mindestens 4,5:1, große Schrift und Bedienelemente mindestens 3:1. Für Hell- UND Dunkelmodus prüfen.
- Klickflächen mindestens 44 x 44 px (Minimum 24 x 24 px).
- Informationen nie nur über Farbe vermitteln. Links nicht nur durch Farbe erkennbar.
- Bilder: aussagekräftiger alt-Text. Reine Dekoration bekommt alt="" bzw. aria-hidden.
- Animationen: nur transform und opacity, kurz und ruhig. Immer prefers-reduced-motion respektieren. Nichts blinkt. Bewegte Inhalte, die länger als 5 Sekunden laufen, brauchen eine Pause-Schaltfläche.
- Die Scroll-Geschichte muss ohne JavaScript und ohne Animation vollständig lesbar sein (jeder Zustand als Text), per Tastatur bedienbar und für Screenreader sinnvoll.
- Videos: stumm, mit Pause-Möglichkeit, Textalternative (kurze Beschreibung darunter). Bei Sprache Untertitel und Transkript.
- Text muss bis 200 % Zoom nutzbar bleiben. Kein horizontales Scrollen bei 320 px Breite. Relative Einheiten (rem), kein festes Abschneiden von Text.
- ARIA sparsam, nur wo natives HTML nicht reicht. Native Elemente bevorzugen (details/summary, button, a).
- Sprache: kurze Sätze, einfache Wörter, keine Fachbegriffe ohne Erklärung. Link-Texte sind aussagekräftig (nicht "hier klicken").

## Design
- Farben, Radien und Schriften NUR über die CSS-Variablen in :root (style.css). Keine neuen Hex-Werte im Code.
- Schriften: Lora für Überschriften, Inter für Text. Keine weiteren.
- Look: ruhig, clean, cozy. Cremefarbener Hintergrund, Salbeigrün als Akzent, Braun sparsam.
- Vermeiden: Farbverläufe, Glow-Effekte, Glassmorphism, Emoji als Dekoration, Standard-Icon-Sets, viele gleich große Karten, Marketing-Floskeln ("revolutionär", "einzigartig", "nahtlos").
- Eigene Elemente nutzen: Levanh-Logo (Glas-Klammer), eigene Avatare, echte App-Screens.
- Hell- und Dunkelmodus müssen beide sauber aussehen (prefers-color-scheme).
- Tonfall der Texte: freundlich, klar, konkret, ohne Übertreibung.

## Arbeitsweise
- Vor größeren Änderungen kurz sagen, was geändert wird und warum.
- Kleine, gezielte Änderungen. Nichts umbauen, was nicht angefragt wurde.
- Nach jeder Änderung die Checkliste unten durchgehen und das Ergebnis kurz berichten.
- Bei Unsicherheit (rechtlich, gestalterisch, technisch) nachfragen statt raten.

## Checkliste vor jedem Commit
- [ ] Keine externen Domains im Code (nach "http" und "//" suchen, außer Links, die Nutzer bewusst anklicken)
- [ ] Keine Cookies/localStorage, keine Tracker
- [ ] Impressum- und Datenschutz-Link im Footer jeder Seite
- [ ] Keine Platzhalter mit eckigen Klammern mehr, wenn die Seite live geht
- [ ] Alle Bilder haben passenden alt-Text (oder bewusst alt="")
- [ ] Tastatur: komplett bedienbar, Fokus immer sichtbar
- [ ] Kontrast in Hell und Dunkel geprüft
- [ ] prefers-reduced-motion getestet
- [ ] 320 px Breite und 200 % Zoom getestet
- [ ] Alle Links und Dateipfade funktionieren (Groß-/Kleinschreibung!)
- [ ] Lighthouse (Accessibility, Best Practices) ohne Fehler