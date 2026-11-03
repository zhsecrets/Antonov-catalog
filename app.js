(function () {
  var F = window.FILTERS, W = window.WORKS;
  var GROUPS = ["genre", "place", "season", "status"];
  var sel = { genre: [], place: [], season: [], status: [] };
  var visible = [];
  var current = -1;

  var $ = function (id) { return document.getElementById(id); };
  var pad = function (n) { return (n < 10 ? "0" : "") + n; };
  var tagsOf = function (w, g) { return g === "status" ? [w.status] : (w[g] || []); };
  var metaOf = function (w) {
    var p = [];
    if (w.tech) p.push(w.tech);
    if (w.size) p.push(w.size + " см");
    if (w.year) p.push(w.year + (/\d$/.test(w.year) ? " г." : ""));
    return p.join(" · ");
  };
  var statusText = function (w) {
    var t = F.status.items[w.status] || "";
    return w.museum ? t + ": " + w.museum : t;
  };

  function matches(w, skip) {
    return GROUPS.every(function (g) {
      if (g === skip || !sel[g].length) return true;
      var t = tagsOf(w, g);
      return sel[g].some(function (k) { return t.indexOf(k) > -1; });
    });
  }

  // Filters
  function buildFilters() {
    var root = $("filter-groups");
    GROUPS.forEach(function (g) {
      var used = Object.keys(F[g].items).filter(function (k) {
        return W.some(function (w) { return tagsOf(w, g).indexOf(k) > -1; });
      });
      if (!used.length) return;
      var row = document.createElement("div");
      row.className = "fgroup " + g;
      row.innerHTML = '<span class="fgroup-label">' + F[g].label + '</span><div class="chips"></div>';
      var chips = row.querySelector(".chips");
      used.forEach(function (k) {
        var b = document.createElement("button");
        b.type = "button"; b.className = "chip"; b.dataset.g = g; b.dataset.k = k;
        b.setAttribute("aria-pressed", "false");
        b.innerHTML = F[g].items[k] + '<span class="c"></span>';
        b.addEventListener("click", function () {
          var a = sel[g], i = a.indexOf(k);
          if (i > -1) a.splice(i, 1); else a.push(k);
          render();
        });
        chips.appendChild(b);
      });
      root.appendChild(row);
    });
  }

  function updateChips() {
    document.querySelectorAll(".chip").forEach(function (b) {
      var g = b.dataset.g, k = b.dataset.k;
      b.setAttribute("aria-pressed", sel[g].indexOf(k) > -1 ? "true" : "false");
      var n = W.filter(function (w) { return matches(w, g) && tagsOf(w, g).indexOf(k) > -1; }).length;
      b.querySelector(".c").textContent = n;
      b.disabled = false;
      b.style.opacity = n || sel[g].indexOf(k) > -1 ? "" : ".4";
    });
  }

  // Grid
  function render() {
    visible = W.filter(function (w) { return matches(w); });
    var grid = $("grid");
    grid.innerHTML = "";
    visible.forEach(function (w, i) {
      var li = document.createElement("li");
      li.className = "card";
      li.innerHTML =
        '<button type="button">' +
          '<div class="frame"><img loading="lazy" src="img/thumb/' + pad(w.n) + '.jpg" width="' + w.w + '" height="' + w.h + '" alt="' + w.title.replace(/"/g, "&quot;") + '"></div>' +
          '<div class="cap"><span class="num">' + pad(w.n) + '</span><span class="t">' + w.title + '</span>' +
          '<div class="m">' + metaOf(w) + '</div>' +
          '<span class="badge ' + w.status + '">' + statusText(w) + '</span></div>' +
        '</button>';
      li.querySelector("button").addEventListener("click", function () { open(i); });
      grid.appendChild(li);
    });
    var any = GROUPS.some(function (g) { return sel[g].length; });
    $("count").textContent = any ? "Показано " + visible.length + " из " + W.length : "Всего работ: " + W.length;
    $("reset").hidden = !any;
    $("empty").hidden = visible.length > 0;
    updateChips();
  }

  function reset() { GROUPS.forEach(function (g) { sel[g] = []; }); render(); }
  $("reset").addEventListener("click", reset);
  $("reset2").addEventListener("click", reset);

  // Viewer
  var viewer = $("viewer"), lastFocus = null;
  function show(i) {
    current = (i + visible.length) % visible.length;
    var w = visible[current];
    var img = $("v-img");
    img.src = "img/full/" + pad(w.n) + ".jpg";
    img.alt = w.title;
    $("v-num").textContent = "№ " + w.n;
    $("v-title").textContent = w.title;
    $("v-meta").textContent = metaOf(w);
    $("v-status").innerHTML = '<span class="badge ' + w.status + '">' + statusText(w) + "</span>";
    history.replaceState(null, "", "#" + w.n);
    var nx = visible[(current + 1) % visible.length];
    if (nx) { var pre = new Image(); pre.src = "img/full/" + pad(nx.n) + ".jpg"; }
  }
  function open(i) {
    lastFocus = document.activeElement;
    viewer.hidden = false;
    document.body.style.overflow = "hidden";
    show(i);
    viewer.querySelector(".v-close").focus();
  }
  function close() {
    viewer.hidden = true;
    document.body.style.overflow = "";
    history.replaceState(null, "", location.pathname + location.search);
    if (lastFocus) lastFocus.focus();
  }
  viewer.querySelector(".v-close").addEventListener("click", close);
  viewer.querySelector(".v-prev").addEventListener("click", function () { show(current - 1); });
  viewer.querySelector(".v-next").addEventListener("click", function () { show(current + 1); });
  viewer.addEventListener("click", function (e) { if (e.target === viewer || e.target.classList.contains("v-img-wrap")) close(); });
  document.addEventListener("keydown", function (e) {
    if (viewer.hidden) return;
    if (e.key === "Escape") close();
    else if (e.key === "ArrowLeft") show(current - 1);
    else if (e.key === "ArrowRight") show(current + 1);
  });
  var sx = null, sy = null;
  viewer.addEventListener("touchstart", function (e) { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive: true });
  viewer.addEventListener("touchend", function (e) {
    if (sx === null) return;
    var dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) show(current + (dx < 0 ? 1 : -1));
    sx = null;
  });

  buildFilters();
  render();
  var h = parseInt(location.hash.slice(1), 10);
  if (h) { var idx = visible.findIndex(function (w) { return w.n === h; }); if (idx > -1) open(idx); }
})();
