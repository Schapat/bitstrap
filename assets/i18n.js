/* ==========================================================================
   Bitstrap · Website-Uebersetzung

   Zwei getrennte Ebenen, die hier zusammenlaufen:
     1. Bitstrap.i18n  - die Texte der Widgets (Teil des Frameworks)
     2. SITE           - die Texte dieser Website

   Der Umschalter setzt beides. Elemente werden ueber data-i18n
   ausgezeichnet:
     <span data-i18n="nav.docs">Doku</span>
     <input data-i18n-attr="placeholder:search.hint">
   ========================================================================== */
(function () {
  "use strict";

  var SITE = {
    de: {
      "skip": "Zum Inhalt springen",
      "nav.docs": "Doku",
      "nav.components": "Komponenten",
      "nav.widgets": "Widgets",
      "nav.layouts": "Layouts",
      "nav.icons": "Icons",
      "nav.themes": "Themes",
      "nav.theme.toggle": "Farbschema wechseln",
      "nav.language": "Sprache",

      "docsnav.start": "Start",
      "docsnav.blocks": "Bausteine",
      "docsnav.behaviour": "Verhalten",
      "docsnav.optional": "Optional",
      "docsnav.onthispage": "Auf dieser Seite",
      "docsnav.install": "Installation",
      "docsnav.layout": "Layout & Grid",
      "docsnav.themes": "Themes & Anpassung",
      "docsnav.components": "Komponenten",
      "docsnav.forms": "Formulare",
      "docsnav.widgets": "Formular-Widgets",
      "docsnav.layouts": "Layouts & Daten",
      "docsnav.icons": "Icons",
      "docsnav.js": "JavaScript",
      "docsnav.game": "Spiel-UI",

      "demo.show": "Code anzeigen",
      "demo.hide": "Code verbergen",
      "demo.copy": "Kopieren",
      "demo.copied": "Kopiert!",


      "footer.license": "MIT-Lizenz",
      "footer.disclaimer": "Nicht mit Nintendo oder anderen Herstellern verbunden.",

      /* ---- Zusaetzliche Abschnitte ---- */
      "jump.label": "Direkt zu",
      "s.type": "Typografie",
      "s.type.sub": "Ueberschriften, Fliesstext, Zitate, Code und Listen - alles im Pixelraster.",
      "s.layout": "Layout & Raster",
      "s.layout.sub": "Zwoelf Spalten auf CSS-Grid, dazu drei Kurzformen fuer den Alltag.",
      "s.frames": "Rahmen, Schatten & Muster",
      "s.frames.sub": "Die abgetreppten Ecken entstehen aus vier versetzten Schatten - nicht aus Bildern.",
      "s.more": "Weitere Bausteine",
      "s.shell": "App-Shell",
      "s.shell.sub": "Kopfzeile, feste Seitenleiste, scrollender Inhalt. Auf schmalen Schirmen uebernimmt die Schublade.",
      "s.effects": "Effekte & Animationen",
      "s.effects.sub": "Bewegung in Stufen statt weichem Easing - 8-Bit-Hardware kannte keine Zwischenbilder.",
      "s.palette": "Farbpalette",
      "s.palette.sub": "22 Grundfarben plus semantische Tokens. Nutzbar als Klasse oder Variable.",
      "s.density": "Dichte",
      "l.headings": "Ueberschriften",
      "l.body": "Fliesstext",
      "l.quote": "Zitat",
      "l.lists": "Listen",
      "l.columns": "Spalten",
      "l.shortcuts": "Kurzformen",
      "l.spacing": "Abstaende",
      "l.avatar": "Avatar",
      "l.divider": "Trenner",
      "l.toolbar": "Werkzeugleiste",
      "l.codeblock": "Codeblock",
      "l.deflist": "Begriffsliste",
      "l.patterns": "Muster",
      "l.animations": "Animationen",
      "l.textfx": "Texteffekte",
      "l.overview": "Uebersicht",
      "l.account": "Konto",
      "l.reports": "Berichte",
      "l.new": "Neu",
      "l.compact": "kompakt",
      "l.large": "gross",
      "l.arcade": "Arcade",
      /* ---- Praesentation ---- */
      "p.embed": "Einbinden",
      "p.embed.sub": "Drei Wege, je nach Projekt. Alle drei fuehren zum selben Ergebnis.",
      "p.embed.file": "Datei",
      "p.embed.npm": "npm",
      "p.embed.src": "Quellen",
      "p.embed.file.note": "Zwei Dateien herunterladen, neben die Seite legen, verlinken. Kein Build, kein Werkzeug.",
      "p.embed.npm.note": "Fuer Projekte mit Bundler. Die Zusatzmodule sind einzeln importierbar.",
      "p.embed.src.note": "Nur einbinden, was gebraucht wird. Die Tokens muessen immer zuerst kommen.",
      "p.first": "Die erste Seite",
      "p.first.sub": "Links der komplette Quelltext, rechts das Ergebnis. Mehr ist es nicht.",
      "p.blocks": "Bloecke",
      "p.blocks.sub": "Fertige Bildschirme aus Bitstrap-Komponenten. Kopieren, Texte tauschen, fertig - so sieht die Bibliothek im Einsatz aus.",
      "p.blocks.uses": "Verwendet",
      "p.b.login": "Anmeldung",
      "p.b.dash": "Dashboard",
      "p.b.pricing": "Preise",
      "p.b.settings": "Einstellungen",
      "p.b.checkout": "Bestellvorgang",
      "p.b.profile": "Profil",
      "p.theming": "Anpassen",
      "p.theming.sub": "Oben rechts das Theme wechseln - die ganze Seite zieht mit. Kein Neuladen, kein zweites Stylesheet.",
      "p.theming.note": "Ein Theme setzt ausschliesslich Farbvariablen. Kein einziger Komponenten-Selektor wird ueberschrieben.",
      "p.i18n": "Mehrsprachig",
      "p.i18n.sub": "Sprache oben wechseln - Monatsnamen, Knopftexte und das Datumsformat folgen mit.",
      "p.a11y": "Barrierefrei von Haus aus",
      "p.a11y.sub": "Retro-Optik ist keine Ausrede fuer schlechte Bedienbarkeit.",
      "p.a11y.1": "Sichtbarer Fokusring auf allem, was bedienbar ist",
      "p.a11y.2": "Dialoge fangen den Fokus und geben ihn zurueck",
      "p.a11y.3": "Tabs mit Pfeiltasten, Dialoge mit Escape",
      "p.a11y.4": "prefers-reduced-motion legt alle Animationen still",
      "p.a11y.5": "Checkbox, Radio und Switch behalten ihr echtes <input>",
      "p.a11y.6": "ARIA-Rollen werden beim Start automatisch ergaenzt",
      "p.components": "Der Baukasten",
      "p.components.sub": "75 Bausteine in neun Gruppen. Jede Gruppe hat ihre eigene Doku-Seite mit Quelltext zum Kopieren.",
      "p.faq": "Haeufige Fragen",
      "p.explore": "Bloecke ansehen",
      "p.count": "Bausteine",
      "g.basics": "Grundlagen",
      "g.forms": "Formulare",
      "g.widgets": "Widgets",
      "g.feedback": "Rueckmeldung",
      "g.nav": "Navigation",
      "g.overlays": "Overlays",
      "g.data": "Daten",
      "g.layout": "Layout",
      "g.game": "Spiel-UI",
      "faq.q3": "Kollidiert es mit anderen Frameworks?",
      "faq.a3": "Nein. Alle Klassen tragen das Praefix bit-. Bitstrap laesst sich auch nur fuer einen Teilbereich einer bestehenden Seite einsetzen.",
      "faq.q4": "Muss ich die Pixelschrift mitliefern?",
      "faq.a4": "Nein. Ohne sie faellt Bitstrap sauber auf Monospace zurueck und funktioniert vollstaendig. Empfohlen ist Press Start 2P ueber Google Fonts.",
      "b.login.title": "Willkommen zurueck",
      "b.login.user": "E-Mail",
      "b.login.pw": "Passwort",
      "b.login.remember": "Angemeldet bleiben",
      "b.login.submit": "Anmelden",
      "b.login.alt": "Neu hier? Konto anlegen",
      "b.pricing.free": "Kostenlos",
      "b.pricing.pro": "Pro",
      "b.pricing.team": "Team",
      "b.pricing.month": "pro Monat",
      "b.pricing.popular": "Beliebt",
      "b.pricing.choose": "Waehlen",
      "b.settings.profile": "Profil",
      "b.settings.notify": "Benachrichtigungen",
      "b.settings.danger": "Gefahrenzone",
      "b.settings.mail": "E-Mail bei Antworten",
      "b.settings.digest": "Woechentliche Zusammenfassung",
      "b.settings.delete": "Konto loeschen",
      "b.settings.save": "Speichern",
      "b.checkout.cart": "Warenkorb",
      "b.checkout.ship": "Versand",
      "b.checkout.pay": "Zahlung",
      "b.checkout.total": "Gesamt",
      "b.checkout.next": "Weiter zum Versand",
      "b.profile.follow": "Folgen",
      "b.profile.msg": "Nachricht",
      "b.dash.today": "Heute",
      "b.dash.week": "Woche",
      "b.dash.month": "Monat",
      /* ---- Hero ---- */
      "hero.badge": "v1.0 · MIT-Lizenz",
      "hero.title1": "DAS 8-BIT",
      "hero.title2": "CSS-FRAMEWORK",
      "hero.sub": "Ueber 50 Komponenten im Pixel-Art-Stil - vom Button bis zum Datepicker. Keine Abhaengigkeiten, kein Build-Zwang, 17 KB uebertragen.",
      "hero.cta1": "Los geht's",
      "hero.cta2": "Doku lesen",
      "hero.tip": "Alles auf dieser Seite ist echtes Bitstrap - kein einziger Screenshot.",
      "hero.stat.components": "Komponenten",
      "hero.stat.size": "KB gzip",
      "hero.stat.deps": "Abhaengigkeiten",
      "hero.stat.langs": "Sprachen",

      /* ---- Installation ---- */
      "install.heading": "In 30 Sekunden startklar",
      "install.note": "Kein npm noetig. Kein Bundler noetig. Kein Framework noetig.",
      "install.copy": "Kopieren",

      /* ---- Abschnittsueberschriften ---- */
      "s.buttons": "Buttons & Badges",
      "s.buttons.sub": "Acht Varianten, fuenf Groessen. Beim Klick rutscht der Button eine Pixelreihe nach unten.",
      "s.forms": "Formulare",
      "s.forms.sub": "Checkbox, Radio, Switch und Slider sind neu gezeichnet - das native Element bleibt darunter erhalten.",
      "s.widgets": "Widgets",
      "s.widgets.sub": "Datumsauswahl, Autovervollstaendigung, Mehrfachauswahl. Die Bausteine, die CSS-Frameworks sonst auslassen.",
      "s.feedback": "Rueckmeldung",
      "s.feedback.sub": "Meldungen, Fortschritt, Ladezustaende.",
      "s.nav": "Navigation & Overlays",
      "s.nav.sub": "Tabs, Accordion, Dialoge, Schubladen - alles per Attribut gesteuert und mit der Tastatur bedienbar.",
      "s.data": "Daten",
      "s.data.sub": "Sortieren, filtern, darstellen. Klick auf einen Spaltenkopf.",
      "s.cards": "Karten & Dialogboxen",
      "s.icons": "26 Icons",
      "s.icons.sub": "Als CSS-Masken eingebettet. Faerbung ueber color, Groesse ueber eine Variable, null zusaetzliche Requests.",
      "s.themes": "Ein Klick, ein neues Jahrzehnt",
      "s.themes.sub": "Jedes Theme setzt nur Farbvariablen - kein einziger Komponenten-Selektor wird angefasst.",
      "s.game": "Spiel-UI",
      "s.game.sub": "Eine optionale Ebene. Fuer gewoehnliche Anwendungen nicht noetig - beim eigenen Build einfach weglassen.",
      "s.why": "Warum Bitstrap",

      /* ---- Beschriftungen in den Demos ---- */
      "l.sizes": "Groessen",
      "l.states": "Zustaende",
      "l.group": "Gruppe",
      "l.disabled": "Deaktiviert",
      "l.loading": "Laedt",
      "l.text": "Textfeld",
      "l.select": "Auswahl",
      "l.choices": "Optionen",
      "l.toggles": "Schalter",
      "l.rating": "Bewertung",
      "l.code": "Bestaetigungscode",
      "l.amount": "Menge",
      "l.date": "Datum",
      "l.language": "Sprache",
      "l.tags": "Schlagworte",
      "l.search": "Suchen",
      "l.password": "Passwort",
      "l.newsletter": "Newsletter abonnieren",
      "l.terms": "Bedingungen akzeptieren",
      "l.difficulty": "Schwierigkeit",
      "l.easy": "Leicht",
      "l.normal": "Normal",
      "l.hard": "Schwer",
      "l.volume": "Lautstaerke",
      "l.view": "Ansicht",
      "l.list": "Liste",
      "l.grid": "Raster",
      "l.map": "Karte",
      "l.storage": "Speicher",
      "l.load": "Auslastung",
      "l.visits": "Besuche",
      "l.errors": "Fehlerrate",
      "l.tab1": "Uebersicht",
      "l.tab2": "Verlauf",
      "l.tab3": "Einstellungen",
      "l.menu": "Menue",
      "l.modal": "Dialog",
      "l.drawer": "Schublade",
      "l.popover": "Popover",
      "l.toast": "Toast",
      "l.tooltip": "Tooltip",
      "l.tooltip.text": "Auch per Tastatur erreichbar.",
      "l.step1": "Konto",
      "l.step2": "Adresse",
      "l.step3": "Pruefen",
      "l.next": "Weiter",
      "l.prev": "Zurueck",
      "l.name": "Name",
      "l.points": "Punkte",
      "l.filter": "Filtern...",
      "l.empty.title": "Nichts gefunden",
      "l.empty.text": "Andere Suchbegriffe ausprobieren.",
      "l.loadingstate": "Ladezustand",
      "l.default": "Standard",

      "faq.q1": "Brauche ich einen Build-Schritt?",
      "faq.a1": "Nein. Eine CSS-Datei und optional eine JS-Datei einbinden, fertig.",
      "faq.q2": "Funktioniert es ohne JavaScript?",
      "faq.a2": "Layout, Formulare, Karten, Tabellen und Tooltips vollstaendig. Nur Overlays und Widgets brauchen die JS-Datei.",

      "card.item": "Gegenstand",
      "card.rare": "Selten",
      "card.equip": "Ausruesten",
      "dialog.speaker": "HANDBUCH",
      "dialog.text": "Der Text erscheint Zeichen fuer Zeichen, sobald die Box ins Bild scrollt.",
      "alert.saved.title": "Gespeichert",
      "alert.saved.text": "Alle Aenderungen wurden uebernommen.",
      "alert.warn": "Wenig Speicherplatz. Bitte aufraeumen.",
      "alert.error": "Verbindung verloren.",

      "themes.default": "Standard",
      "themes.menu": "MENUE",
      "themes.attack": "Bestaetigen",
      "themes.items": "Optionen",
      "themes.flee": "Abbrechen",
      "themes.confirm": "Speichern",
      "themes.back": "Zurueck",

      "modal.title": "Aenderungen speichern?",
      "modal.text": "Nicht gespeicherte Aenderungen gehen verloren.",
      "modal.cancel": "Abbrechen",
      "modal.save": "Speichern",
      "modal.close": "Schliessen",
      "toast.title": "Gespeichert",
      "toast.text": "Die Aenderungen sind uebernommen.",

      "why.1.title": "Eine Variable, alles skaliert",
      "why.1.text": "Das gesamte Raster haengt an --bit-px. Von 3px auf 6px umgestellt, und aus der Webseite wird ein Arcade-Automat.",
      "why.2.title": "Echte Pixelkanten",
      "why.2.text": "Die abgetreppten Ecken entstehen aus versetzten Schatten, nicht aus Bildern. Beliebig gross, beliebig faerbbar, immer scharf.",
      "why.3.title": "Bedienbar bleibt bedienbar",
      "why.3.text": "Sichtbarer Fokusring, Fokusfalle in Dialogen, Tastaturbedienung fuer Tabs und Combobox, ARIA wird automatisch ergaenzt.",
      "why.4.title": "Widgets, die sonst fehlen",
      "why.4.text": "Datepicker, Combobox, Stepper, Drawer, sortierbare Tabellen. Jedes baut auf einem echten Formularelement auf.",
      "why.5.title": "Elf Sprachen",
      "why.5.text": "Alle Widget-Texte laufen ueber Bitstrap.i18n. Eigene Sprache ergaenzen heisst: ein Objekt registrieren, kein Build.",
      "why.6.title": "Sechs Themes",
      "why.6.text": "Arcade, Handheld, Terminal, Candy, Hell und Dunkel. Jedes setzt nur Farbvariablen.",

      "cta.heading": "Bereit?",
      "cta.text": "Alles auf dieser Seite steht in der Doku - mit Quelltext zum Kopieren.",
      "cta.button": "Zur Dokumentation"
    },

    en: {
      "skip": "Skip to content",
      "nav.docs": "Docs",
      "nav.components": "Components",
      "nav.widgets": "Widgets",
      "nav.layouts": "Layouts",
      "nav.icons": "Icons",
      "nav.themes": "Themes",
      "nav.theme.toggle": "Switch colour scheme",
      "nav.language": "Language",

      "docsnav.start": "Start",
      "docsnav.blocks": "Building blocks",
      "docsnav.behaviour": "Behaviour",
      "docsnav.optional": "Optional",
      "docsnav.onthispage": "On this page",
      "docsnav.install": "Installation",
      "docsnav.layout": "Layout & grid",
      "docsnav.themes": "Themes & theming",
      "docsnav.components": "Components",
      "docsnav.forms": "Forms",
      "docsnav.widgets": "Form widgets",
      "docsnav.layouts": "Layouts & data",
      "docsnav.icons": "Icons",
      "docsnav.js": "JavaScript",
      "docsnav.game": "Game UI",

      "demo.show": "Show code",
      "demo.hide": "Hide code",
      "demo.copy": "Copy",
      "demo.copied": "Copied!",


      "footer.license": "MIT licence",
      "footer.disclaimer": "Not affiliated with Nintendo or any other manufacturer.",

      /* ---- Additional sections ---- */
      "jump.label": "Jump to",
      "s.type": "Typography",
      "s.type.sub": "Headings, body copy, quotes, code and lists - all on the pixel grid.",
      "s.layout": "Layout & grid",
      "s.layout.sub": "Twelve columns on CSS grid, plus three shorthands for everyday use.",
      "s.frames": "Frames, shadows & patterns",
      "s.frames.sub": "The stepped corners come from four offset shadows - not from images.",
      "s.more": "More building blocks",
      "s.shell": "App shell",
      "s.shell.sub": "Header, fixed sidebar, scrolling content. On narrow screens the drawer takes over.",
      "s.effects": "Effects & animation",
      "s.effects.sub": "Motion in steps instead of smooth easing - 8-bit hardware had no in-between frames.",
      "s.palette": "Colour palette",
      "s.palette.sub": "22 base colours plus semantic tokens. Usable as a class or a variable.",
      "s.density": "Density",
      "l.headings": "Headings",
      "l.body": "Body copy",
      "l.quote": "Quote",
      "l.lists": "Lists",
      "l.columns": "Columns",
      "l.shortcuts": "Shorthands",
      "l.spacing": "Spacing",
      "l.avatar": "Avatar",
      "l.divider": "Divider",
      "l.toolbar": "Toolbar",
      "l.codeblock": "Code block",
      "l.deflist": "Definition list",
      "l.patterns": "Patterns",
      "l.animations": "Animations",
      "l.textfx": "Text effects",
      "l.overview": "Overview",
      "l.account": "Account",
      "l.reports": "Reports",
      "l.new": "New",
      "l.compact": "compact",
      "l.large": "large",
      "l.arcade": "arcade",
      /* ---- Presentation ---- */
      "p.embed": "Embedding",
      "p.embed.sub": "Three routes, depending on your project. All three end up in the same place.",
      "p.embed.file": "File",
      "p.embed.npm": "npm",
      "p.embed.src": "Sources",
      "p.embed.file.note": "Download two files, drop them next to your page, link them. No build, no tooling.",
      "p.embed.npm.note": "For projects with a bundler. The extra modules can be imported separately.",
      "p.embed.src.note": "Include only what you need. The tokens always have to come first.",
      "p.first": "Your first page",
      "p.first.sub": "The full source on the left, the result on the right. That is all of it.",
      "p.blocks": "Blocks",
      "p.blocks.sub": "Finished screens built from Bitstrap components. Copy, swap the text, done - this is the library in use.",
      "p.blocks.uses": "Uses",
      "p.b.login": "Sign in",
      "p.b.dash": "Dashboard",
      "p.b.pricing": "Pricing",
      "p.b.settings": "Settings",
      "p.b.checkout": "Checkout",
      "p.b.profile": "Profile",
      "p.theming": "Theming",
      "p.theming.sub": "Switch the theme top right - the whole page follows. No reload, no second stylesheet.",
      "p.theming.note": "A theme sets colour variables and nothing else. Not one component selector is overridden.",
      "p.i18n": "Multilingual",
      "p.i18n.sub": "Switch the language above - month names, button labels and the date format follow along.",
      "p.a11y": "Accessible out of the box",
      "p.a11y.sub": "Retro looks are no excuse for poor usability.",
      "p.a11y.1": "Visible focus ring on everything operable",
      "p.a11y.2": "Dialogs trap focus and hand it back",
      "p.a11y.3": "Tabs by arrow keys, dialogs by Escape",
      "p.a11y.4": "prefers-reduced-motion silences every animation",
      "p.a11y.5": "Checkbox, radio and switch keep their real <input>",
      "p.a11y.6": "ARIA roles are filled in automatically on boot",
      "p.components": "The toolbox",
      "p.components.sub": "75 building blocks in nine groups. Each group has its own docs page with source to copy.",
      "p.faq": "Common questions",
      "p.explore": "Explore blocks",
      "p.count": "building blocks",
      "g.basics": "Basics",
      "g.forms": "Forms",
      "g.widgets": "Widgets",
      "g.feedback": "Feedback",
      "g.nav": "Navigation",
      "g.overlays": "Overlays",
      "g.data": "Data",
      "g.layout": "Layout",
      "g.game": "Game UI",
      "faq.q3": "Does it clash with other frameworks?",
      "faq.a3": "No. Every class carries the bit- prefix. You can use Bitstrap for just one part of an existing page.",
      "faq.q4": "Do I have to ship the pixel font?",
      "faq.a4": "No. Without it Bitstrap falls back to monospace and works fully. Press Start 2P via Google Fonts is recommended.",
      "b.login.title": "Welcome back",
      "b.login.user": "Email",
      "b.login.pw": "Password",
      "b.login.remember": "Keep me signed in",
      "b.login.submit": "Sign in",
      "b.login.alt": "New here? Create an account",
      "b.pricing.free": "Free",
      "b.pricing.pro": "Pro",
      "b.pricing.team": "Team",
      "b.pricing.month": "per month",
      "b.pricing.popular": "Popular",
      "b.pricing.choose": "Choose",
      "b.settings.profile": "Profile",
      "b.settings.notify": "Notifications",
      "b.settings.danger": "Danger zone",
      "b.settings.mail": "Email me on replies",
      "b.settings.digest": "Weekly digest",
      "b.settings.delete": "Delete account",
      "b.settings.save": "Save",
      "b.checkout.cart": "Cart",
      "b.checkout.ship": "Shipping",
      "b.checkout.pay": "Payment",
      "b.checkout.total": "Total",
      "b.checkout.next": "Continue to shipping",
      "b.profile.follow": "Follow",
      "b.profile.msg": "Message",
      "b.dash.today": "Today",
      "b.dash.week": "Week",
      "b.dash.month": "Month",
      "hero.badge": "v1.0 · MIT licence",
      "hero.title1": "THE 8-BIT",
      "hero.title2": "CSS FRAMEWORK",
      "hero.sub": "Over 50 pixel-art components, from buttons to a datepicker. No dependencies, no build step required, 17 KB over the wire.",
      "hero.cta1": "Get started",
      "hero.cta2": "Read the docs",
      "hero.tip": "Everything on this page is real Bitstrap - not a single screenshot.",
      "hero.stat.components": "components",
      "hero.stat.size": "KB gzip",
      "hero.stat.deps": "dependencies",
      "hero.stat.langs": "languages",

      "install.heading": "Ready in 30 seconds",
      "install.note": "No npm needed. No bundler needed. No framework needed.",
      "install.copy": "Copy",

      "s.buttons": "Buttons & badges",
      "s.buttons.sub": "Eight variants, five sizes. On click the button drops by one pixel row.",
      "s.forms": "Forms",
      "s.forms.sub": "Checkbox, radio, switch and slider are redrawn - the native element stays underneath.",
      "s.widgets": "Widgets",
      "s.widgets.sub": "Date picking, autocomplete, multi-select. The parts CSS frameworks usually skip.",
      "s.feedback": "Feedback",
      "s.feedback.sub": "Messages, progress, loading states.",
      "s.nav": "Navigation & overlays",
      "s.nav.sub": "Tabs, accordion, dialogs, drawers - all driven by attributes and usable by keyboard.",
      "s.data": "Data",
      "s.data.sub": "Sort, filter, display. Click a column header.",
      "s.cards": "Cards & dialogue boxes",
      "s.icons": "26 icons",
      "s.icons.sub": "Embedded as CSS masks. Coloured via color, sized via one variable, zero extra requests.",
      "s.themes": "One click, another decade",
      "s.themes.sub": "Every theme only sets colour variables - not a single component selector is touched.",
      "s.game": "Game UI",
      "s.game.sub": "An optional layer. Not needed for ordinary apps - just leave it out of your build.",
      "s.why": "Why Bitstrap",

      "l.sizes": "Sizes",
      "l.states": "States",
      "l.group": "Group",
      "l.disabled": "Disabled",
      "l.loading": "Loading",
      "l.text": "Text field",
      "l.select": "Select",
      "l.choices": "Options",
      "l.toggles": "Toggles",
      "l.rating": "Rating",
      "l.code": "Verification code",
      "l.amount": "Quantity",
      "l.date": "Date",
      "l.language": "Language",
      "l.tags": "Tags",
      "l.search": "Search",
      "l.password": "Password",
      "l.newsletter": "Subscribe to newsletter",
      "l.terms": "Accept the terms",
      "l.difficulty": "Difficulty",
      "l.easy": "Easy",
      "l.normal": "Normal",
      "l.hard": "Hard",
      "l.volume": "Volume",
      "l.view": "View",
      "l.list": "List",
      "l.grid": "Grid",
      "l.map": "Map",
      "l.storage": "Storage",
      "l.load": "Load",
      "l.visits": "Visits",
      "l.errors": "Error rate",
      "l.tab1": "Overview",
      "l.tab2": "History",
      "l.tab3": "Settings",
      "l.menu": "Menu",
      "l.modal": "Dialog",
      "l.drawer": "Drawer",
      "l.popover": "Popover",
      "l.toast": "Toast",
      "l.tooltip": "Tooltip",
      "l.tooltip.text": "Reachable by keyboard too.",
      "l.step1": "Account",
      "l.step2": "Address",
      "l.step3": "Review",
      "l.next": "Next",
      "l.prev": "Back",
      "l.name": "Name",
      "l.points": "Points",
      "l.filter": "Filter...",
      "l.empty.title": "Nothing found",
      "l.empty.text": "Try different search terms.",
      "l.loadingstate": "Loading state",
      "l.default": "Default",

      "faq.q1": "Do I need a build step?",
      "faq.a1": "No. Include one CSS file and optionally one JS file, that is it.",
      "faq.q2": "Does it work without JavaScript?",
      "faq.a2": "Layout, forms, cards, tables and tooltips work fully. Only overlays and widgets need the JS file.",

      "card.item": "Item",
      "card.rare": "Rare",
      "card.equip": "Equip",
      "dialog.speaker": "MANUAL",
      "dialog.text": "The text appears character by character as soon as the box scrolls into view.",
      "alert.saved.title": "Saved",
      "alert.saved.text": "All changes have been applied.",
      "alert.warn": "Low disk space. Please clean up.",
      "alert.error": "Connection lost.",

      "themes.default": "Default",
      "themes.menu": "MENU",
      "themes.attack": "Confirm",
      "themes.items": "Options",
      "themes.flee": "Cancel",
      "themes.confirm": "Save",
      "themes.back": "Back",

      "modal.title": "Save changes?",
      "modal.text": "Unsaved changes will be lost.",
      "modal.cancel": "Cancel",
      "modal.save": "Save",
      "modal.close": "Close",
      "toast.title": "Saved",
      "toast.text": "Your changes have been applied.",

      "why.1.title": "One variable scales everything",
      "why.1.text": "The whole grid hangs off --bit-px. Change it from 3px to 6px and your site turns into an arcade cabinet.",
      "why.2.title": "Real pixel edges",
      "why.2.text": "The stepped corners come from offset shadows, not images. Any size, any colour, always crisp.",
      "why.3.title": "Usable stays usable",
      "why.3.text": "Visible focus ring, focus trap in dialogs, keyboard support for tabs and combobox, ARIA filled in automatically.",
      "why.4.title": "The widgets others skip",
      "why.4.text": "Datepicker, combobox, stepper, drawer, sortable tables. Each one builds on a real form element.",
      "why.5.title": "Eleven languages",
      "why.5.text": "Every widget string runs through Bitstrap.i18n. Adding your own language means registering an object - no build.",
      "why.6.title": "Six themes",
      "why.6.text": "Arcade, handheld, terminal, candy, light and dark. Each one only sets colour variables.",

      "cta.heading": "Ready?",
      "cta.text": "Everything on this page is in the docs - with source you can copy.",
      "cta.button": "Go to the documentation"
    }
  };

  /* Sprachen, in denen die Website selbst vorliegt. Waehlt jemand eine
     andere Framework-Sprache, faellt die Oberflaeche auf Englisch
     zurueck - die Widgets sprechen trotzdem die gewaehlte Sprache. */
  var SITE_LANGS = ["de", "en"];

  var LABELS = {
    de: "Deutsch", en: "English", fr: "Francais", es: "Espanol",
    it: "Italiano", nl: "Nederlands", pt: "Portugues", pl: "Polski",
    tr: "Turkce", ja: "日本語", ar: "العربية"
  };

  function current() {
    return window.Bitstrap ? Bitstrap.i18n.locale : "de";
  }

  function siteT(key) {
    var lang = current();
    var dict = SITE[lang] || SITE.en;
    if (dict[key] === undefined) dict = SITE.en;
    return dict[key] === undefined ? key : dict[key];
  }

  /** Setzt alle ausgezeichneten Texte und Attribute neu. */
  function apply(root) {
    var scope = root || document;

    scope.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = siteT(el.getAttribute("data-i18n"));
    });

    /* Doku-Prosa: der deutsche Text steht im Markup und ist damit der
       Standard. Uebersetzt wird nur, wenn ein Eintrag vorliegt - und
       ueber innerHTML, damit Inline-Auszeichnung wie <code> oder Links
       erhalten bleibt. Das Original wird beim ersten Durchlauf gemerkt,
       sonst waere der Weg zurueck nach Deutsch verbaut. */
    scope.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      if (el.__bitOriginal === undefined) el.__bitOriginal = el.innerHTML;

      var docs = (window.BitstrapDocsText || {})[current()] || {};
      var text = docs[el.getAttribute("data-i18n-html")];

      el.innerHTML = text === undefined ? el.__bitOriginal : text;
    });

    /* Form: "placeholder:key;aria-label:key" */
    scope.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      el.getAttribute("data-i18n-attr").split(";").forEach(function (pair) {
        var bits = pair.split(":");
        if (bits.length === 2) {
          el.setAttribute(bits[0].trim(), siteT(bits[1].trim()));
        }
      });
    });

    var title = document.querySelector("[data-i18n-title]");
    if (title) document.title = siteT(title.getAttribute("data-i18n-title"));
  }

  /**
   * Haengt den Umschalter in die Kopfzeile. Damit muss keine der Seiten
   * den Picker im Markup fuehren.
   */
  function buildPicker() {
    var bar = document.querySelector(".site-header .bit-navbar__inner");
    if (!bar || bar.querySelector("[data-bit-locale]")) return;

    /* Nur die Sprachen anbieten, in denen die Website selbst vorliegt.
       Das Framework kennt elf - eine davon zu waehlen wuerde hier aber
       nur die Widgets umstellen und die Oberflaeche auf Englisch
       zuruecklassen. Das ist ein Feature der Bibliothek, kein sinnvoller
       Schalter fuer Besucher dieser Seite. */
    var codes = SITE_LANGS.slice();

    var wrap = document.createElement("label");
    wrap.className = "lang-picker";

    var label = document.createElement("span");
    label.className = "bit-sr-only";
    label.setAttribute("data-i18n", "nav.language");
    label.textContent = siteT("nav.language");

    var select = document.createElement("select");
    /* Groesse kommt aus .lang-picker select - keine eigene Modifier-Klasse. */
    select.className = "bit-select";
    select.setAttribute("data-bit-locale", "");

    select.innerHTML = codes
      .map(function (c) {
        return '<option value="' + c + '">' + (LABELS[c] || c.toUpperCase()) + "</option>";
      })
      .join("");

    select.value = current();

    wrap.appendChild(label);
    wrap.appendChild(select);

    var themeBtn = bar.querySelector('[data-bit-toggle="theme"]');
    if (themeBtn) bar.insertBefore(wrap, themeBtn);
    else bar.appendChild(wrap);
  }

  /* =====================================================================
     THEME-UMSCHALTER

     Bitstrap kennt zwei Mechanismen: hell/dunkel laeuft ueber
     data-bit-theme, die Farbwelten ueber eine .bit-theme-*-Klasse.
     Der Umschalter fasst beides zu EINER Auswahl zusammen - zwei
     getrennte Bedienelemente dafuer waeren nur verwirrend.
     ===================================================================== */
  var THEMES = [
    ["light", "Hell", "Light"],
    ["dark", "Dunkel", "Dark"],
    ["arcade", "Arcade", "Arcade"],
    ["handheld", "Handheld", "Handheld"],
    ["terminal", "Terminal", "Terminal"],
    ["candy", "Candy", "Candy"]
  ];

  var THEME_KEY = "bitstrap-site-theme";

  function applyTheme(name) {
    var root = document.documentElement;

    /* Alte Farbwelt entfernen, egal welche es war. */
    root.className = root.className
      .split(" ")
      .filter(function (c) { return c.indexOf("bit-theme-") !== 0; })
      .join(" ")
      .trim();

    if (name === "light" || name === "dark") {
      root.setAttribute("data-bit-theme", name);
    } else {
      /* Die Farbwelten bringen ihre eigenen Werte mit; hell/dunkel
         darf ihnen nicht dazwischenfunken. */
      root.setAttribute("data-bit-theme", "light");
      root.classList.add("bit-theme-" + name);
    }

    try {
      localStorage.setItem(THEME_KEY, name);
    } catch (e) { /* ohne Persistenz weiter */ }
  }

  function currentTheme() {
    try {
      var saved = localStorage.getItem(THEME_KEY);
      if (saved) return saved;
    } catch (e) { /* ignorieren */ }

    var cls = document.documentElement.className.match(/bit-theme-([a-z]+)/);
    if (cls) return cls[1];
    return document.documentElement.getAttribute("data-bit-theme") === "dark" ? "dark" : "light";
  }

  function buildThemePicker() {
    var bar = document.querySelector(".site-header .bit-navbar__inner");
    if (!bar || bar.querySelector("[data-site-theme]")) return;

    var wrap = document.createElement("label");
    wrap.className = "lang-picker";

    var label = document.createElement("span");
    label.className = "bit-sr-only";
    label.setAttribute("data-i18n", "nav.themes");
    label.textContent = siteT("nav.themes");

    var select = document.createElement("select");
    select.className = "bit-select";
    select.setAttribute("data-site-theme", "");
    select.innerHTML = THEMES.map(function (t) {
      return '<option value="' + t[0] + '">' + t[1] + "</option>";
    }).join("");
    select.value = currentTheme();

    select.addEventListener("change", function () {
      applyTheme(select.value);
    });

    wrap.appendChild(label);
    wrap.appendChild(select);

    /* Vor den Sprachumschalter, damit die Reihenfolge auf allen
       Seiten gleich ist: Theme, Sprache. */
    var lang = bar.querySelector(".lang-picker");
    if (lang) bar.insertBefore(wrap, lang);
    else bar.appendChild(wrap);
  }

  /** Beschriftungen der Theme-Auswahl an die Sprache anpassen. */
  function refreshThemeLabels() {
    var select = document.querySelector("[data-site-theme]");
    if (!select) return;
    var en = current() !== "de";
    Array.prototype.forEach.call(select.options, function (opt, i) {
      opt.textContent = en ? THEMES[i][2] : THEMES[i][1];
    });
    select.value = currentTheme();
  }

  function refresh() {
    apply();
    refreshThemeLabels();
    var select = document.querySelector("[data-bit-locale]");
    if (select) select.value = current();
    /* Die Doku-Navigation wird von docs.js erzeugt und muss mit. */
    if (window.BitstrapDocs && window.BitstrapDocs.rebuildNav) {
      window.BitstrapDocs.rebuildNav();
    }
  }

  function boot() {
    applyTheme(currentTheme());
    buildPicker();
    buildThemePicker();
    refresh();
    document.documentElement.addEventListener("bit:locale:change", refresh);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }

  window.BitstrapSite = { t: siteT, apply: apply, refresh: refresh };
})();
