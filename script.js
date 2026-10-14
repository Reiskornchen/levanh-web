/* Levanh – kleine Verbesserungen. Die Seite funktioniert auch ohne dieses Skript. */

/* ---------- Geschichte: Bühne als Dashboard-Karte ----------
   Ab 60rem Breite steht links eine feste Karte wie in der App, rechts scrollt der Text normal.
   Die Karte wiederholt nur, was in den Schritten steht, deshalb aria-hidden. */
(function () {
  var story = document.querySelector(".story");
  if (!story || !("IntersectionObserver" in window)) return;

  var grid = story.querySelector(".story-grid");
  var steps = Array.prototype.slice.call(story.querySelectorAll(".step"));
  var wide = window.matchMedia("(min-width: 60rem)");

  function el(tag, className, text) {
    var node = document.createElement(tag);
    node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  // Dashboard-Karte wie in der App, gefüllt aus dem ersten Schritt
  var first = steps[0].querySelector(".mini");
  var stage = el("div", "stage");
  stage.setAttribute("aria-hidden", "true");
  var card = el("div", "card stage-card");

  var head = el("div", "stage-head");
  head.append(el("p", "stage-name", "Mai"), el("p", "stage-meta", "Weizen 550 · 100 % Hydration"));

  var pics = el("div", "stage-pics");
  steps.forEach(function (step) {
    var pic = step.querySelector(".mini-avatar").cloneNode(true);
    pic.className = "";
    var img = pic.querySelector("img");
    img.alt = "";
    img.removeAttribute("loading");
    pics.appendChild(pic);
  });

  var info = el("div", "stage-info");
  var countdown = first.querySelector(".countdown").cloneNode(true);
  var badge = first.querySelector(".badge").cloneNode(true);
  info.append(countdown, badge);

  var bar = first.querySelector(".peakbar").cloneNode(true);
  var labels = first.querySelector(".peakbar-labels").cloneNode(true);

  card.append(head, pics, info, bar, labels);
  stage.appendChild(card);
  grid.prepend(stage);

  function copy(from, selector) {
    stage.querySelector(selector).textContent = from.querySelector(selector).textContent;
  }

  var current = -1;
  function show(i) {
    if (i === current) return;
    current = i;
    var mini = steps[i].querySelector(".mini");
    steps.forEach(function (s, n) { s.classList.toggle("is-active", n === i); });
    Array.prototype.forEach.call(pics.children, function (p, n) { p.classList.toggle("is-active", n === i); });
    badge.className = mini.querySelector(".badge").className;
    [".badge", ".countdown-kicker", ".countdown-big", ".peakbar-fed", ".peakbar-peak-time"].forEach(function (sel) { copy(mini, sel); });
    bar.style.setProperty("--value", mini.querySelector(".peakbar").style.getPropertyValue("--value"));
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) show(steps.indexOf(e.target));
    });
  }, { rootMargin: "-45% 0px -45% 0px" });

  function update() {
    if (wide.matches) {
      story.classList.add("story-live");
      steps.forEach(function (s) { observer.observe(s); });
      if (current < 0) show(0);
    } else {
      story.classList.remove("story-live");
      observer.disconnect();
      steps.forEach(function (s) { s.classList.remove("is-active"); });
      current = -1;
    }
  }

  update();
  wide.addEventListener("change", update);
})();

/* ---------- Video: abspielen und pausieren ----------
   Startet nur von selbst, wenn keine reduzierte Bewegung gewünscht ist. Immer stumm. */
(function () {
  var calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  document.querySelectorAll(".video").forEach(function (figure) {
    var video = figure.querySelector("video");
    var button = figure.querySelector("[data-video-toggle]");
    if (!video || !button) return;

    video.muted = true;

    function label() {
      button.textContent = video.paused ? "Video abspielen" : "Video pausieren";
    }

    button.addEventListener("click", function () {
      if (video.paused) video.play(); else video.pause();
    });
    video.addEventListener("play", label);
    video.addEventListener("pause", label);

    if (!calm) {
      video.preload = "auto";
      video.play().catch(function () {});
    }
    label();
  });
})();
