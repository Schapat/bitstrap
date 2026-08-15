/* ==========================================================================
   Bitstrap · Website-Logik
   Baut die Seitennavigation, erzeugt zu jedem Beispiel den passenden
   Quelltext und kuemmert sich um Kopierknoepfe.
   ========================================================================== */
(function () {
  "use strict";

  /* ---- Navigationsstruktur (eine Quelle fuer alle Seiten) ---------------
     Beschriftungen stehen als Uebersetzungsschluessel, nicht als Text. */
  var NAV = [
    {
      title: "docsnav.start",
      items: [
        ["getting-started.html", "docsnav.install"],
        ["layout.html", "docsnav.layout"],
        ["themes.html", "docsnav.themes"],
      ],
    },
    {
      title: "docsnav.blocks",
      items: [
        ["components.html", "docsnav.components"],
        ["forms.html", "docsnav.forms"],
        ["widgets.html", "docsnav.widgets"],
        ["layouts.html", "docsnav.layouts"],
        ["icons.html", "docsnav.icons"],
      ],
    },
    {
      title: "docsnav.behaviour",
      items: [["javascript.html", "docsnav.js"]],
    },
    {
      title: "docsnav.optional",
      items: [["game-ui.html", "docsnav.game"]],
    },
  ];

  function t(key) {
    return window.BitstrapSite ? BitstrapSite.t(key) : key;
  }

  function buildNav() {
    var host = document.querySelector("[data-docs-nav]");
    if (!host) return;

    var here = location.pathname.split("/").pop() || "getting-started.html";
    var html = "";

    NAV.forEach(function (group) {
      html += "<h4>" + t(group.title) + "</h4>";
      group.items.forEach(function (item) {
        var active = item[0] === here ? ' class="is-active"' : "";
        html += '<a href="' + item[0] + '"' + active + ">" + t(item[1]) + "</a>";
      });
    });

    /* Sprungmarken der aktuellen Seite anhaengen. Die Ueberschriften
       stammen aus dem Seiteninhalt und bleiben daher unuebersetzt. */
    var sections = document.querySelectorAll(".docs__main section[id]");
    if (sections.length) {
      html += "<h4>" + t("docsnav.onthispage") + "</h4>";
      Array.prototype.forEach.call(sections, function (s) {
        var h = s.querySelector("h2, h3");
        if (h) html += '<a href="#' + s.id + '">' + h.textContent + "</a>";
      });
    }

    host.innerHTML = html;
  }

  /* ---- Sprungleiste der Startseite -------------------------------------
     Wird aus den Abschnitten erzeugt, damit sie beim Hinzufuegen eines
     Abschnitts nicht von Hand nachgezogen werden muss. Die Beschriftungen
     stammen aus den bereits uebersetzten Ueberschriften. */
  function buildJumpNav() {
    var host = document.querySelector("[data-jump-nav]");
    if (!host) return;

    var sections = document.querySelectorAll("main section[id]");
    var html = "";

    Array.prototype.forEach.call(sections, function (s) {
      var h = s.querySelector("h2");
      if (!h) return;
      html += '<a class="jump__link" href="#' + s.id + '">' + h.textContent.trim() + "</a>";
    });

    host.innerHTML = html;
  }

  /* ---- Quelltext aus der Vorschau ableiten -----------------------------
     Verhindert, dass Beispiel und abgedruckter Code auseinanderlaufen. */
  function dedent(text) {
    var lines = text.replace(/\t/g, "  ").split("\n");
    while (lines.length && !lines[0].trim()) lines.shift();
    while (lines.length && !lines[lines.length - 1].trim()) lines.pop();

    var indent = Infinity;
    lines.forEach(function (line) {
      if (!line.trim()) return;
      indent = Math.min(indent, line.match(/^ */)[0].length);
    });
    if (!isFinite(indent)) indent = 0;

    return lines
      .map(function (line) {
        return line.slice(indent);
      })
      .join("\n");
  }

  function escapeHtml(s) {
    return s
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  /* Sehr schlanker Highlighter: Tags, Attributnamen, Werte, Kommentare. */
  function highlight(escaped) {
    return escaped
      .replace(/(&lt;!--[\s\S]*?--&gt;)/g, '<span class="tok-com">$1</span>')
      .replace(/(&lt;\/?)([a-zA-Z][\w-]*)/g, '$1<span class="tok-tag">$2</span>')
      .replace(/([a-zA-Z-]+)(=)(&quot;|")/g, '<span class="tok-attr">$1</span>$2$3')
      .replace(/"([^"<>]*)"/g, '"<span class="tok-str">$1</span>"');
  }

  function buildDemos() {
    var demos = document.querySelectorAll(".doc-demo");

    Array.prototype.forEach.call(demos, function (demo, index) {
      var preview = demo.querySelector(".doc-demo__preview");
      if (!preview) return;

      var source = dedent(preview.innerHTML);
      var id = "demo-code-" + index;

      /* data-i18n statt fester Beschriftung: der Sprachumschalter
         erreicht die Knoepfe damit ohne Sonderbehandlung. */
      var bar = document.createElement("div");
      bar.className = "doc-demo__bar";
      bar.innerHTML =
        '<button class="bit-btn bit-btn--xs bit-btn--ghost" data-code-toggle data-i18n="demo.show" aria-expanded="false" aria-controls="' + id + '">' + t("demo.show") + "</button>" +
        '<button class="bit-btn bit-btn--xs bit-btn--ghost" data-code-copy data-i18n="demo.copy">' + t("demo.copy") + "</button>";

      var pre = document.createElement("pre");
      pre.className = "doc-demo__code";
      pre.id = id;
      pre.hidden = true;

      var code = document.createElement("code");
      code.innerHTML = highlight(escapeHtml(source));
      pre.appendChild(code);

      demo.appendChild(bar);
      demo.appendChild(pre);

      /* Rohfassung fuer die Zwischenablage getrennt aufbewahren -
         aus dem gefaerbten HTML liesse sie sich nur muehsam rekonstruieren. */
      demo.__source = source;
    });
  }

  /* ---- Kopieren ---------------------------------------------------------- */
  function copyText(text, button) {
    var done = function () {
      var key = button.getAttribute("data-i18n");
      var old = button.textContent;
      button.textContent = t("demo.copied");
      setTimeout(function () {
        /* Ueber den Schluessel zuruecksetzen, damit ein Sprachwechsel
           waehrend der Wartezeit nicht den alten Text wiederherstellt. */
        button.textContent = key ? t(key) : old;
      }, 1400);
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, function () {
        fallbackCopy(text, done);
      });
    } else {
      fallbackCopy(text, done);
    }
  }

  /* Fuer Seiten, die ohne HTTPS ausgeliefert werden - dort fehlt die
     Clipboard-API. */
  function fallbackCopy(text, done) {
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand("copy");
      done();
    } catch (e) {
      /* Dann eben nicht. */
    }
    document.body.removeChild(ta);
  }

  document.addEventListener("click", function (e) {
    var toggle = e.target.closest("[data-code-toggle]");
    if (toggle) {
      var demo = toggle.closest(".doc-demo");
      var pre = demo.querySelector(".doc-demo__code");
      pre.hidden = !pre.hidden;
      var key = pre.hidden ? "demo.show" : "demo.hide";
      toggle.setAttribute("data-i18n", key);
      toggle.textContent = t(key);
      toggle.setAttribute("aria-expanded", pre.hidden ? "false" : "true");
      return;
    }

    var copy = e.target.closest("[data-code-copy]");
    if (copy) {
      var d = copy.closest(".doc-demo");
      if (d && d.__source) copyText(d.__source, copy);
      return;
    }

    var plain = e.target.closest("[data-copy]");
    if (plain) {
      var target = document.querySelector(plain.getAttribute("data-copy"));
      if (target) copyText(target.textContent.trim(), plain);
    }
  });

  /* ---- Icon-Galerie ------------------------------------------------------ */
  var ICON_NAMES = [
    "arrow-down", "arrow-left", "arrow-right", "arrow-up", "bolt", "check",
    "coin", "cross", "gem", "ghost", "heart", "invader", "key", "lock",
    "menu", "minus", "pad", "plus", "potion", "power", "search", "shield",
    "skull", "star", "sword", "user",
  ];

  function buildIconGrid() {
    var host = document.querySelector("[data-icon-grid]");
    if (!host) return;

    host.innerHTML = ICON_NAMES.map(function (name) {
      return (
        '<div class="icon-cell" data-icon="' + name + '" title="Klicken zum Kopieren">' +
        '<span class="bit-icon bit-icon--' + name + '"></span>' +
        "<span>" + name + "</span></div>"
      );
    }).join("");

    host.addEventListener("click", function (e) {
      var cell = e.target.closest(".icon-cell");
      if (!cell) return;
      var markup =
        '<span class="bit-icon bit-icon--' + cell.getAttribute("data-icon") + '"></span>';
      copyText(markup, cell.querySelector("span:last-child"));
    });
  }

  /* ---- Theme-Umschalter auf der Seite ------------------------------------ */
  function buildThemePicker() {
    var picker = document.querySelector("[data-theme-picker]");
    if (!picker) return;

    picker.addEventListener("click", function (e) {
      var btn = e.target.closest("[data-theme-name]");
      if (!btn) return;

      var name = btn.getAttribute("data-theme-name");
      var preview = document.querySelector("[data-theme-target]");
      if (!preview) return;

      preview.className = preview.className
        .split(" ")
        .filter(function (c) {
          return c.indexOf("bit-theme-") !== 0;
        })
        .join(" ");

      if (name) preview.classList.add("bit-theme-" + name);

      picker.querySelectorAll("[data-theme-name]").forEach(function (b) {
        b.classList.toggle("is-active", b === btn);
      });
    });
  }

  /* ---- Jahr in der Fusszeile --------------------------------------------- */
  function stampYear() {
    var el = document.querySelector("[data-year]");
    if (el) el.textContent = new Date().getFullYear();
  }

  function boot() {
    buildDemos();
    buildNav();
    buildJumpNav();
    buildIconGrid();
    buildThemePicker();
    stampYear();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }

  /* i18n.js ruft das nach einem Sprachwechsel auf - beide Navigationen
     werden hier erzeugt und tragen daher keine data-i18n-Auszeichnungen.
     Die Sprungleiste muss NACH dem Uebersetzen der Ueberschriften neu
     gebaut werden, weil sie deren Text uebernimmt. */
  window.BitstrapDocs = {
    rebuildNav: function () {
      buildNav();
      buildJumpNav();
    }
  };
})();
