# CLAUDE.md – Levanh Website (levanh.com)

Statische Website für die App **Levanh** (minimalistischer Sauerteig-Begleiter). Gehostet über GitHub Pages.
Seitensprache: Deutsch, Anrede "du". Sprache mit mir: Deutsch.

## Grundprinzipien
1. Datenschutz geht vor Optik.
2. Barrierefreiheit ist Pflicht, kein Extra.
3. Rechtliche Texte nie erfinden, bei Unsicherheit nachfragen.
4. Details zählen: lieber weniger, dafür sauber.
5. Jede Gestaltungsentscheidung muss sich begründen lassen (Funktion, Lesbarkeit, Hierarchie), nie nur "sieht schick aus".

## Technik
- Reines HTML, CSS und wenig JavaScript. Kein Framework, kein Build-Schritt, keine npm-Pakete im Repo.
- Prüfwerkzeuge (z. B. Lighthouse, axe, pa11y) dürfen lokal zum Testen genutzt werden, gehören aber nicht ins Repo.
- Dateien und Ordner klein geschrieben, ohne Leerzeichen oder Umlaute. Relative Pfade.
- Die Datei `CNAME` niemals ändern oder löschen.
- Struktur: index.html, impressum.html, datenschutz.html, style.css, fonts/, img/, video/.
- Bilder: width und height angeben, loading="lazy" (außer im sichtbaren Startbereich), sinnvolle Dateigröße, wenn möglich WebP/AVIF mit Fallback.
- Video: selbst gehostet (mp4), unter 5 MB, mit poster, stumm, kein Autoplay mit Ton.
- Jede Seite hat title, meta description, lang="de", viewport, favicon.

## Datenschutz (nicht verhandelbar)
- KEINE externen Anfragen: keine CDNs, kein Google Fonts, keine Analytics, keine Karten, keine eingebetteten Videos (YouTube, Vimeo), keine Social-Media-Widgets oder -Buttons, keine Formular- oder Newsletter-Embeds.
- Schriften (Lora, Inter) nur lokal aus fonts/, Lizenzdateien (OFL) liegen daneben.
- Keine Cookies, kein localStorage, kein sessionStorage. Ausnahme nur nach Rücksprache.
- Kontakt nur per mailto-Link.
- Neue Funktion, die Daten verarbeitet oder Dritte einbindet: ERST datenschutz.html anpassen und mich fragen, dann bauen.
- Ändert sich etwas, das die Datenschutzerklärung betrifft, das "Stand"-Datum dort aktualisieren.
- Keine personenbezogenen Daten in Code, Kommentaren oder Commit-Nachrichten.

## Rechtliches
- Impressum und Datenschutz sind von jeder Seite per Footer-Link erreichbar.
- Platzhalter in eckigen Klammern niemals selbst ausfüllen oder erfinden. Vor dem Livegang müssen sie ersetzt sein, darauf hinweisen.
- Keine Rechts- oder Datenschutztexte frei erfinden. Änderungen vorschlagen und kennzeichnen, dass sie rechtlich geprüft werden sollten.
- Keine Gesundheits-, Heilungs- oder Garantieversprechen. Backzeiten sind immer Richtwerte.
- Keine Store-Badges oder -Logos von Apple/Google, solange die App nicht live ist und deren Badge-Richtlinien nicht eingehalten werden. Bis dahin Text "bald verfügbar".
- Keine Preise, Rabatte oder Versprechen nennen, die nicht feststehen.
- Nur eigene Bilder, Avatare, Logos und Texte. Keine Stockfotos, keine fremde Musik, keine kopierten Texte.

## Barrierefreiheit (Ziel: WCAG 2.2, Stufe AA)
- Semantisches HTML: header, nav, main, section, footer. Genau eine h1 pro Seite, Überschriftenebenen nicht überspringen.
- "Zum Inhalt springen"-Link als erstes Element, sichtbar bei Fokus.
- Sichtbarer Tastaturfokus an allem Klickbaren, logische Reihenfolge. Fokus darf nicht vom sticky Header verdeckt werden (scroll-padding-top).
- Kontrast: Text mindestens 4,5:1, große Schrift und Bedienelemente mindestens 3:1, in Hell- UND Dunkelmodus.
- Klickflächen mindestens 44 x 44 px (absolutes Minimum 24 x 24 px).
- Informationen nie nur über Farbe vermitteln. Links im Fließtext zusätzlich unterstrichen.
- Bilder: aussagekräftiger alt-Text. Reine Dekoration bekommt alt="" bzw. aria-hidden="true".
- Animationen: nur transform und opacity, kurz und ruhig. prefers-reduced-motion immer respektieren. Nichts blinkt. Bewegte Inhalte, die länger als 5 Sekunden laufen, brauchen eine Pause-Schaltfläche.
- Die Scroll-Geschichte muss ohne JavaScript und ohne Animation vollständig lesbar sein (jeder Zustand als Text), per Tastatur bedienbar und für Screenreader sinnvoll.
- Videos: stumm, mit Pause-Möglichkeit und Textbeschreibung. Bei Sprache Untertitel und Transkript.
- Text bis 200 % Zoom nutzbar. Kein horizontales Scrollen bei 320 px Breite. Relative Einheiten (rem), Text wird nie abgeschnitten.
- ARIA sparsam, nur wo natives HTML nicht reicht. Native Elemente bevorzugen (details/summary, button, a).
- Sprache: kurze Sätze, einfache Wörter, Fachbegriffe erklären. Linktexte aussagekräftig (nicht "hier klicken").

## UI/UX-Grundlagen (Begründung statt Geschmack)
- **Visuelle Hierarchie:** Pro Abschnitt gibt es ein Hauptelement. Größe, Gewicht und Abstand lenken den Blick, nicht Farbe allein.
- **Typografie:** Modulare Skala (z. B. 1,25), Fließtext mindestens 16 px, Zeilenlänge 60 bis 75 Zeichen, Zeilenhöhe 1,5 bis 1,7, linksbündig, kein Blocksatz, keine Versalien in langen Texten.
- **Raster und Abstände:** Konsistentes 8-px-Raster. Abstände sind größer zwischen Gruppen als innerhalb von Gruppen (Gesetz der Nähe).
- **Gestaltgesetze:** Zusammengehörendes liegt zusammen und sieht gleich aus (Nähe, Ähnlichkeit, Gleichheit). Weißraum gruppiert, statt Linien und Rahmen überall.
- **Hick'sches Gesetz:** Wenige, klare Entscheidungen pro Bildschirm. Genau eine primäre Handlung pro Abschnitt.
- **Fitts'sches Gesetz:** Wichtige Ziele sind groß und gut erreichbar, besonders mobil (Daumenzone).
- **Jakob'sches Gesetz:** Vertraute Muster verwenden (Logo links oben führt zur Startseite, Footer mit Rechtlichem, Links sind erkennbar).
- **Progressive Disclosure:** Details erst auf Wunsch (z. B. FAQ, details/summary), Hauptbotschaft sofort.
- **Lesbarkeit zuerst:** Kurze Absätze, klare Zwischenüberschriften, scanbar. Seiten werden überflogen (F-/Z-Muster), die wichtigste Aussage steht oben links.
- **Mobile first:** Entwurf zuerst für 320 bis 390 px, dann erweitern. Keine Hover-only-Funktionen.
- **Konsistenz:** Gleiche Dinge sehen gleich aus und verhalten sich gleich. Ein Button-Stil für primär, einer für sekundär.
- **Rückmeldung und Zustände:** Hover, Fokus, Aktiv und Deaktiviert sind für alle interaktiven Elemente gestaltet.
- **Performance ist UX:** Schnelle Ladezeit, keine Layout-Sprünge (feste Bildmaße), kein Rendering blockierendes JS.
- **Bewegung mit Zweck:** Animation erklärt etwas (Zustandswechsel, Abfolge, Fortschritt) oder gibt Rückmeldung. Reine Dekoration nur sparsam und an einer Stelle.

## Design (Look)
- Farben, Radien, Abstände und Schriften NUR über CSS-Variablen in :root. Keine neuen Hex-Werte im Code.
- Schriften: Lora für Überschriften, Inter für Text. Keine weiteren.
- Stimmung: ruhig, clean, cozy, handgemacht. Cremefarbener Hintergrund, Salbeigrün als Akzent, Braun sparsam.
- Eigene Elemente stehen im Mittelpunkt: Levanh-Logo (Glas-Klammer), eigene Avatare, echte App-Screens.
- Hell- und Dunkelmodus müssen beide sauber sein (prefers-color-scheme).
- Tonfall: freundlich, klar, konkret, ohne Übertreibung.

## Kein "KI-Look" (bitte vermeiden)
- Farbverläufe, Glow, Glassmorphism, Neon, schwebende Blobs, Partikel-Hintergründe
- Emoji als Dekoration, Standard-Icon-Sets, Stockfotos, generische Illustrationen
- Raster aus vielen gleich großen Karten mit Icon, Überschrift und zwei Zeilen Text
- Immer gleiche Abfolge Hero, 3 Features, Testimonials, Preise, CTA
- Floskeln wie "revolutionär", "nahtlos", "einzigartig", "Erlebe", "Entdecke", "Tauche ein"
- Übertriebene Schatten, überall gleiche große Rundungen, zentrierte Textwände
- Animationen auf allem gleichzeitig, Parallax-Spielereien, Scroll-Hijacking
Stattdessen: eine klare Bildidee pro Abschnitt, ungleichmäßige, bewusst gesetzte Layouts, echte Inhalte, konkrete Sprache, wenige gezielte Details mit Handschrift.

## Arbeitsweise
1. Erst lesen: vorhandene Dateien ansehen, bevor etwas geändert wird.
2. Dann einen kurzen Plan vorlegen (was, warum, welche Dateien) und auf mein OK warten, bevor größere Umbauten beginnen.
3. In kleinen Schritten arbeiten, ein Thema pro Schritt, und nach jedem Schritt kurz berichten.
4. Nichts umbauen, was nicht angefragt wurde. Kein Löschen von Dateien ohne Rückfrage.
5. Nach jeder Änderung die Checkliste unten durchgehen und das Ergebnis nennen.
6. Bei Unsicherheit (rechtlich, gestalterisch, technisch) nachfragen statt raten.
7. Commit-Nachrichten kurz und auf Deutsch. Nicht selbst pushen, bevor ich es sage.

## Checkliste vor jedem Commit
- [ ] Keine externen Domains im Code (nach "http" und "//" suchen, außer Links, die Nutzer bewusst anklicken)
- [ ] Keine Cookies, kein localStorage, keine Tracker
- [ ] Impressum- und Datenschutz-Link im Footer jeder Seite
- [ ] Keine Platzhalter mit eckigen Klammern mehr, wenn die Seite live geht
- [ ] Alle Bilder mit passendem alt-Text (oder bewusst alt="")
- [ ] Tastatur: komplett bedienbar, Fokus immer sichtbar
- [ ] Kontrast in Hell und Dunkel geprüft
- [ ] prefers-reduced-motion getestet
- [ ] 320 px Breite und 200 % Zoom getestet
- [ ] Alle Links und Dateipfade funktionieren (Groß-/Kleinschreibung!)
- [ ] Lighthouse (Accessibility, Best Practices, Performance) ohne Fehler