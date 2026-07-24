/* Spendflo DLS — site patches (design-workflow redesign + Flo brand swap).
 * Compiled static export: React re-hydrates from flight data, so we (a) mount
 * the redesign after hydration and (b) swap the site-chrome brand mark (nav +
 * doc header) to the Flo icon, re-applying if React reverts it. The Flo swap is
 * self-correcting (keyed on the current src) and deliberately leaves the
 * documented artwork on /foundations/logo and /foundations/brand-assets alone.
 * Reversible: delete this file + the injected <head> tags. */
(function () {
  var ROUTE = '/getting-started/design-workflow';
  var TEMPLATE = "<div class=\"dw\" role=\"region\" aria-labelledby=\"dw-title\">\n  <div class=\"dw-wrap\">\n    <span class=\"dw-ghost\" data-parallax aria-hidden=\"true\">02</span>\n\n    <!-- Header -->\n    <header class=\"dw-head\" data-io>\n      <img class=\"dw-mark\" src=\"/brand/flo-icon-colour.svg\" alt=\"Flo\" style=\"height:34px;width:auto;display:block;margin-bottom:18px\"/>\n      <span class=\"dw-eyebrow\"><span class=\"dot\"></span>Getting started \u00b7 02</span>\n      <h1 class=\"dw-title\" id=\"dw-title\">Design workflow</h1>\n      <p class=\"dw-lede\">Foundations first, artifact second. Designers compose from tokens and documented patterns \u2014 so every new piece lands on-brand without a review cycle.</p>\n      <div class=\"dw-meta\">\n        <span class=\"dw-chip ok\">Stable</span>\n        <span class=\"dw-chip\">Owner<span class=\"sep\">\u00b7</span>Brand team</span>\n        <span class=\"dw-chip\">Updated<span class=\"sep\">\u00b7</span>Jul 2026</span>\n        <span class=\"dw-chip\">v1.0</span>\n      </div>\n      <div class=\"dw-rule\"></div>\n    </header>\n\n    <!-- Animated connector / progress flow -->\n    <div class=\"dw-flow\" data-io>\n      <span class=\"flow-track\" aria-hidden=\"true\"></span>\n      <span class=\"flow-fill\" aria-hidden=\"true\"></span>\n      <div class=\"flow-node\" style=\"--n:0\" data-step=\"1\"><span class=\"flow-dot\"></span><span class=\"flow-name\">Foundations</span><span class=\"flow-i\">01</span></div>\n      <div class=\"flow-node\" style=\"--n:1\" data-step=\"2\"><span class=\"flow-dot\"></span><span class=\"flow-name\">Components</span><span class=\"flow-i\">02</span></div>\n      <div class=\"flow-node\" style=\"--n:2\" data-step=\"3\"><span class=\"flow-dot\"></span><span class=\"flow-name\">Templates</span><span class=\"flow-i\">03</span></div>\n      <div class=\"flow-node\" style=\"--n:3\" data-step=\"4\"><span class=\"flow-dot\"></span><span class=\"flow-name\">Assets</span><span class=\"flow-i\">04</span></div>\n      <div class=\"flow-node\" style=\"--n:4\" data-step=\"5\"><span class=\"flow-dot\"></span><span class=\"flow-name\">Publish</span><span class=\"flow-i\">05</span></div>\n      <div class=\"flow-node\" style=\"--n:5\" data-step=\"6\"><span class=\"flow-dot\"></span><span class=\"flow-name\">Scale</span><span class=\"flow-i\">06</span></div>\n    </div>\n\n    <!-- Bento -->\n    <div class=\"dw-bento\" data-reveal>\n\n      <!-- 01 Foundations -->\n      <article class=\"tile t1\" style=\"--i:0\" data-step=\"1\">\n        <div class=\"tile-top\">\n          <span class=\"tile-ic\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m12 2 9 5-9 5-9-5 9-5Z\"/><path d=\"m3 12 9 5 9-5\"/><path d=\"m3 17 9 5 9-5\"/></svg></span>\n          <span class=\"tile-num\">01</span>\n        </div>\n        <h3 class=\"tile-h\">Foundations</h3>\n        <p class=\"tile-d\">Start from the raw materials \u2014 colour, type, radius, and space, all as copyable tokens.</p>\n        <div class=\"tile-demo\">\n          <div class=\"demo-row\">\n            <span class=\"sw ink\" title=\"ink\"></span>\n            <span class=\"sw stone\" title=\"stone\"></span>\n            <span class=\"sw grad\" title=\"brand gradient\"></span>\n            <span class=\"sw rad\" title=\"radius\"></span>\n            <span class=\"sw type\">Aa</span>\n          </div>\n        </div>\n        <div class=\"tile-foot\">\n          <div class=\"tile-more\"><div><p>Pull values, never eyeball them. Colours from Colour, styles from Typography, marks from Brand assets.</p><a class=\"lk\" href=\"/foundations/colour\">Colour \u2192</a><a class=\"lk\" href=\"/foundations/typography\">Typography \u2192</a></div></div>\n          <button class=\"tile-toggle\" aria-expanded=\"false\">Details <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m6 9 6 6 6-6\"/></svg></button>\n        </div>\n      </article>\n\n      <!-- 02 Components -->\n      <article class=\"tile t2\" style=\"--i:1\" data-step=\"2\">\n        <div class=\"tile-top\">\n          <span class=\"tile-ic\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"3\" width=\"8\" height=\"8\" rx=\"1.5\"/><rect x=\"13\" y=\"3\" width=\"8\" height=\"8\" rx=\"1.5\"/><rect x=\"3\" y=\"13\" width=\"8\" height=\"8\" rx=\"1.5\"/><rect x=\"13\" y=\"13\" width=\"8\" height=\"8\" rx=\"1.5\"/></svg></span>\n          <span class=\"tile-num\">02</span>\n        </div>\n        <h3 class=\"tile-h\">Components</h3>\n        <p class=\"tile-d\">Assemble documented parts \u2014 buttons, pills, fields \u2014 instead of drawing new ones.</p>\n        <div class=\"tile-demo\">\n          <div class=\"demo-row\">\n            <span class=\"demo-btn\">Book a demo</span>\n            <span class=\"demo-pill\"><span class=\"d\"></span>Auto-approve</span>\n            <span class=\"demo-input\"></span>\n          </div>\n        </div>\n        <div class=\"tile-foot\">\n          <div class=\"tile-more\"><div><p>Every part is drawn from the tokens, so a button here matches a button anywhere. No forks.</p><a class=\"lk\" href=\"/systems/website\">Component kit \u2192</a></div></div>\n          <button class=\"tile-toggle\" aria-expanded=\"false\">Details <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m6 9 6 6 6-6\"/></svg></button>\n        </div>\n      </article>\n\n      <!-- 03 Templates -->\n      <article class=\"tile t3\" style=\"--i:2\" data-step=\"3\">\n        <div class=\"tile-top\">\n          <span class=\"tile-ic\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\"/><path d=\"M3 9h18\"/><path d=\"M9 21V9\"/></svg></span>\n          <span class=\"tile-num\">03</span>\n        </div>\n        <h3 class=\"tile-h\">Templates</h3>\n        <p class=\"tile-d\">Open a System page \u2014 the anatomy is your starting file, not a blank canvas.</p>\n        <div class=\"tile-demo\">\n          <div class=\"wire\" aria-hidden=\"true\">\n            <div class=\"wire-bar\"></div>\n            <div class=\"wire-cols\">\n              <div><div class=\"wire-l m\"></div><div class=\"wire-l s\"></div></div>\n              <div><div class=\"wire-l s\"></div><div class=\"wire-l m\"></div></div>\n            </div>\n          </div>\n        </div>\n        <div class=\"tile-foot\">\n          <div class=\"tile-more\"><div><p>Deck, email, case study, social \u2014 each System documents its layout, spacing, and target feel.</p><a class=\"lk\" href=\"/systems/deck\">Systems \u2192</a></div></div>\n          <button class=\"tile-toggle\" aria-expanded=\"false\">Details <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m6 9 6 6 6-6\"/></svg></button>\n        </div>\n      </article>\n\n      <!-- 04 Assets -->\n      <article class=\"tile t4\" style=\"--i:3\" data-step=\"4\">\n        <div class=\"tile-top\">\n          <span class=\"tile-ic\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"7.5\" cy=\"7.5\" r=\"4\"/><path d=\"M14 4h6v6\"/><rect x=\"13\" y=\"13\" width=\"7\" height=\"7\" rx=\"1\"/></svg></span>\n          <span class=\"tile-num\">04</span>\n        </div>\n        <h3 class=\"tile-h\">Assets</h3>\n        <p class=\"tile-d\">Drop in documented lockups \u2014 never a recoloured or rebuilt mark.</p>\n        <div class=\"tile-demo\">\n          <div class=\"demo-row\">\n            <span class=\"asset\"><svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M12 3 4 11h4v7h8v-7h4Z\"/></svg></span>\n            <span class=\"asset inv\"><svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M12 3 4 11h4v7h8v-7h4Z\"/></svg></span>\n            <span class=\"asset\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"><path d=\"M12 4 5 10h3.5v6h7v-6H19Z\"/></svg></span>\n          </div>\n        </div>\n        <div class=\"tile-foot\">\n          <div class=\"tile-more\"><div><p>Clear space and contrast come pre-checked. Magenta is an accent \u2014 never body, never the logo fill.</p><a class=\"lk\" href=\"/foundations/brand-assets\">Brand assets \u2192</a></div></div>\n          <button class=\"tile-toggle\" aria-expanded=\"false\">Details <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m6 9 6 6 6-6\"/></svg></button>\n        </div>\n      </article>\n\n      <!-- 05 Publish (inverted) -->\n      <article class=\"tile t5 dark\" style=\"--i:4\" data-step=\"5\">\n        <div class=\"tile-top\">\n          <span class=\"tile-ic\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 3v13\"/><path d=\"m6 9 6-6 6 6\"/><path d=\"M5 21h14\"/></svg></span>\n          <span class=\"tile-num\">05</span>\n        </div>\n        <h3 class=\"tile-h\">Publish</h3>\n        <p class=\"tile-d\">Run the do/don't list, then export with the documented settings.</p>\n        <div class=\"tile-demo\">\n          <div class=\"demo-row\">\n            <span class=\"ship\">Ship it\n              <span class=\"ship-check\"><svg viewBox=\"0 0 24 24\"><path d=\"M20 6 9 17l-5-5\"/></svg></span>\n            </span>\n          </div>\n        </div>\n        <div class=\"tile-foot\">\n          <div class=\"tile-more\"><div><p>Confirm clear space and contrast, then export at the settings each System documents. No guesswork at the finish line.</p></div></div>\n          <button class=\"tile-toggle\" aria-expanded=\"false\">Details <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m6 9 6 6 6-6\"/></svg></button>\n        </div>\n      </article>\n\n      <!-- 06 Scale (wide) -->\n      <article class=\"tile t6\" style=\"--i:5\" data-step=\"6\">\n        <div class=\"tile-top\">\n          <span class=\"tile-ic\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 3v18h18\"/><path d=\"m7 15 4-4 3 3 5-6\"/></svg></span>\n          <span class=\"tile-num\">06</span>\n        </div>\n        <h3 class=\"tile-h\">Scale</h3>\n        <p class=\"tile-d\">The payoff: consistency at volume. New pieces stay on-brand because they reuse the same decisions.</p>\n        <div class=\"tile-demo\">\n          <div class=\"scale-row\" aria-hidden=\"true\">\n            <div class=\"scale-cell\"><span class=\"dot\"></span><span class=\"b\"></span><span class=\"b s\"></span></div>\n            <div class=\"scale-cell\"><span class=\"dot\"></span><span class=\"b\"></span><span class=\"b s\"></span></div>\n            <div class=\"scale-cell\"><span class=\"dot\"></span><span class=\"b\"></span><span class=\"b s\"></span></div>\n            <div class=\"scale-cell\"><span class=\"dot\"></span><span class=\"b\"></span><span class=\"b s\"></span></div>\n            <div class=\"scale-cell\"><span class=\"dot\"></span><span class=\"b\"></span><span class=\"b s\"></span></div>\n          </div>\n          <div class=\"scale-note\"><b>One-offs go back into the system</b> via contribution \u2014 that's how brand drift stays at zero.</div>\n        </div>\n        <div class=\"tile-foot\">\n          <div class=\"tile-more\"><div><p>If you had to invent something, propose it through contribution rather than shipping a one-off.</p><a class=\"lk\" href=\"/getting-started/contribution\">Contribution \u2192</a></div></div>\n          <button class=\"tile-toggle\" aria-expanded=\"false\">Details <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m6 9 6 6 6-6\"/></svg></button>\n        </div>\n      </article>\n\n    </div>\n\n    <!-- CTA -->\n    <div class=\"dw-cta\">\n      <a class=\"btn btn-primary\" href=\"/systems/deck\">Open a System page <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 12h14\"/><path d=\"m12 5 7 7-7 7\"/></svg></a>\n      <a class=\"btn btn-ghost\" href=\"/getting-started/contribution\">Read the ship checklist</a>\n    </div>\n  </div>\n</div>";
  var HIDE = ['#principle', '#steps', '#checks'];
  var settled = false, timer = null;

  function onRoute() { return location.pathname.replace(/\/$/, '').indexOf(ROUTE) !== -1; }

  /* ---------- Flo brand swap (runs on every route) ---------- */
  function swapImg(img, src, h) {
    if ((img.getAttribute('src') || '') === src) return;
    img.setAttribute('src', src);
    img.removeAttribute('srcset');
    img.removeAttribute('width'); img.removeAttribute('height');
    img.style.height = h; img.style.width = 'auto';
    img.setAttribute('alt', 'Flo');
  }
  function brandSwap() {
    // Navigation keeps the Spendflo LOGO (primary company identity) — no swap.
    // Every documentation page header shows the Spendflo ICON.
    document.querySelectorAll('img.phero-mark').forEach(function (img) {
      if ((img.getAttribute('src') || '') !== '/brand/spendflo-icon-colour.svg') {
        img.setAttribute('src', '/brand/spendflo-icon-colour.svg');
        img.removeAttribute('srcset'); img.removeAttribute('width'); img.removeAttribute('height');
        img.style.height = '40px'; img.style.width = 'auto'; img.setAttribute('alt', 'Spendflo');
      }
    });
  }

  /* ---------- Logo usage page: document the standalone Spendflo icon ---------- */
  var SF_ICON_CARDS =
    '<div class="logo-card" data-sf-icon><div class="logo-stage">' +
      '<img alt="Spendflo icon · colour" loading="lazy" decoding="async" ' +
      'style="color:transparent;height:auto;width:min(96px,55%)" src="/brand/spendflo-icon-colour.svg"/>' +
    '</div><div class="logo-meta"><div><div class="nm">Spendflo icon · colour</div>' +
      '<div class="nt">The mark alone — light backgrounds</div></div>' +
      '<div class="logo-dl"><a href="/brand/spendflo-icon-colour.svg" download="">SVG</a>' +
      '<a href="/brand/spendflo-icon-colour.png" download="">PNG</a></div></div></div>' +
    '<div class="logo-card" data-sf-icon><div class="logo-stage dark">' +
      '<img alt="Spendflo icon · white" loading="lazy" decoding="async" ' +
      'style="color:transparent;height:auto;width:min(96px,55%)" src="/brand/spendflo-icon-white.svg"/>' +
    '</div><div class="logo-meta"><div><div class="nm">Spendflo icon · white</div>' +
      '<div class="nt">The mark alone — dark &amp; maroon backgrounds</div></div>' +
      '<div class="logo-dl"><a href="/brand/spendflo-icon-white.svg" download="">SVG</a>' +
      '<a href="/brand/spendflo-icon-white.png" download="">PNG</a></div></div></div>' +
    '<div class="logo-card" data-sf-icon><div class="logo-stage" style="background:linear-gradient(140deg,#4a0a2c,#390021)">' +
      '<img alt="Spendflo icon · white gradient" loading="lazy" decoding="async" ' +
      'style="color:transparent;height:auto;width:min(96px,55%)" src="/brand/spendflo-icon-white-gradient.svg"/>' +
    '</div><div class="logo-meta"><div><div class="nm">Spendflo icon · white gradient</div>' +
      '<div class="nt">The mark alone — maroon signature</div></div>' +
      '<div class="logo-dl"><a href="/brand/spendflo-icon-white-gradient.svg" download="">SVG</a>' +
      '<a href="/brand/spendflo-icon-white-gradient.png" download="">PNG</a></div></div></div>';
  function injectSpendfloIcon() {
    if (location.pathname.indexOf('/foundations/logo') === -1) return;
    var grid = document.querySelector('.content .logo-grid');
    if (grid && !grid.querySelector('[data-sf-icon]')) grid.insertAdjacentHTML('beforeend', SF_ICON_CARDS);
    removeFloWhiteGradient();
    upgradeMisuse();
    addPartners();
    buildShowcase();
    addLogoGuides();
  }

  // Interactive logo showcase — replaces the static hero preview.
  var GROUNDS = [
    { bg: '#ffffff', v: 'dark',  sh: true,  sw: '#ffffff' },
    { bg: '#1c1917', v: 'white', sh: false, sw: '#1c1917' },
    { bg: '#390021', v: 'white', sh: false, sw: '#390021' }
  ];
  function buildShowcase() {
    var stageHost = document.querySelector('.content .phero-stage');
    if (!stageHost || stageHost.querySelector('#logo-showcase')) return;
    var sw = GROUNDS.map(function (g, i) {
      return '<span class="ls-sw" data-i="' + i + '" style="background:' + g.sw + '"></span>';
    }).join('');
    stageHost.innerHTML =
      '<div id="logo-showcase" class="ls-card ls-float">' +
        '<span class="ls-tick" title="Correct placement">' + OK_SVG + '</span>' +
        '<div class="ls-stage">' +
          '<div class="ls-bg a"></div><div class="ls-bg b"></div>' +
          '<div class="ls-clearbox"></div>' +
          '<span class="ls-x t">x</span><span class="ls-x r">x</span><span class="ls-x b">x</span><span class="ls-x l">x</span>' +
          '<img class="ls-logo" alt="Spendflo logo" src="/brand/spendflo-full-colour-black.svg"/>' +
        '</div>' +
        '<div class="ls-foot"><div class="ls-swatches">' + sw + '</div>' +
          '<span class="ls-cap">Right variant per ground</span></div>' +
        '<div class="ls-measure"><span>|</span><div class="bar"></div><span>CLEAR SPACE = X</span><div class="bar"></div><span>|</span></div>' +
      '</div>';
    initShowcase(stageHost.querySelector('#logo-showcase'));
  }
  function initShowcase(card) {
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var layers = [card.querySelector('.ls-bg.a'), card.querySelector('.ls-bg.b')];
    var logo = card.querySelector('.ls-logo');
    var sws = card.querySelectorAll('.ls-sw');
    var front = 0, idx = 0, timer = null;

    function paint(i, animate) {
      var g = GROUNDS[i];
      var incoming = layers[front ^ 1], outgoing = layers[front];
      incoming.style.background = g.bg;
      if (!animate) { incoming.classList.add('show'); outgoing.classList.remove('show'); }
      else {
        // crossfade bg
        incoming.classList.add('show'); outgoing.classList.remove('show');
        // fade logo out, swap, fade in
        logo.style.opacity = '0';
        setTimeout(function () {
          logo.src = g.v === 'white' ? '/brand/spendflo-full-colour-white.svg' : '/brand/spendflo-full-colour-black.svg';
          logo.classList.toggle('shadow', !!g.sh);
          card.classList.toggle('on-dark', g.v === 'white');
          logo.style.opacity = '1';
        }, 150);
      }
      if (!animate) {
        logo.src = g.v === 'white' ? '/brand/spendflo-full-colour-white.svg' : '/brand/spendflo-full-colour-black.svg';
        logo.classList.toggle('shadow', !!g.sh);
        card.classList.toggle('on-dark', g.v === 'white');
      }
      front ^= 1;
      sws.forEach(function (s, si) { s.classList.toggle('active', si === i); });
      idx = i;
    }
    function next() { paint((idx + 1) % GROUNDS.length, true); }
    function start() { if (!reduce && !timer) timer = setInterval(next, 1000); }
    function stop() { if (timer) { clearInterval(timer); timer = null; } }

    paint(0, false);
    card.addEventListener('mouseenter', stop);
    card.addEventListener('mouseleave', start);
    sws.forEach(function (s) {
      s.addEventListener('click', function () { stop(); paint(+s.dataset.i, true); if (!card.matches(':hover')) start(); });
    });
    start();
  }

  // Guideline cards below the preview.
  function addLogoGuides() {
    var content = document.querySelector('.content');
    if (!content || content.querySelector('#logo-guides')) return;
    var anchor = content.querySelector('#wordmark');
    if (!anchor) return;
    var mini = GROUNDS.filter(function (_, i) { return [0, 3, 5, 6, 8].indexOf(i) !== -1; })
      .map(function (g) { return '<i style="background:' + g.sw + '"></i>'; }).join('');
    var div = document.createElement('div');
    div.id = 'logo-guides';
    div.className = 'lg-grid';
    div.innerHTML =
      '<a class="lg-card" href="#clearspace"><div class="lg-vis"><span class="lg-clear"></span></div>' +
        '<div class="lg-h">Clear space</div><p class="lg-p">Keep at least the wordmark\u2019s cap-height clear on every side.</p>' +
        '<span class="lg-link">See clear space \u2192</span></a>' +
      '<div class="lg-card"><div class="lg-vis"><span class="lg-96">96px</span></div>' +
        '<div class="lg-h">Minimum size</div><p class="lg-p">96px minimum width on screen. Below that, use the Flo mark alone.</p></div>' +
      '<div class="lg-card"><div class="lg-vis"><span class="lg-mini">' + mini + '</span></div>' +
        '<div class="lg-h">Approved backgrounds</div><p class="lg-p">White, light neutrals, charcoal, brand maroon, and the Spendflo gradient.</p></div>' +
      '<a class="lg-card" href="#donts"><div class="lg-vis"><span class="lg-x">\u2715</span></div>' +
        '<div class="lg-h">Incorrect usage</div><p class="lg-p">Don\u2019t stretch, rotate, recolour, shadow, or fade the mark.</p>' +
        '<span class="lg-link">See misuse \u2192</span></a>' +
      '<a class="lg-card" href="#downloads"><div class="lg-vis"><span class="lg-dl">SVG \u00b7 PNG</span></div>' +
        '<div class="lg-h">Download assets</div><p class="lg-p">Every approved variant, ready to drop in.</p>' +
        '<span class="lg-link">Downloads \u2192</span></a>';
    anchor.parentNode.insertBefore(div, anchor);
  }

  // (1) Fully retire the "Flo icon · white gradient" variant: remove its
  //     download card and its Download-list row; repoint any stray preview.
  function removeFloWhiteGradient() {
    var sel = '.content [href*="/flo-icon-white-gradient"], .content img[src*="/flo-icon-white-gradient"]';
    document.querySelectorAll(sel).forEach(function (el) {
      var box = el.closest('.logo-card, .logo-dlrow');
      if (box) { box.remove(); return; }
      if (el.tagName === 'IMG') el.setAttribute('src', '/brand/flo-icon-white.svg');
    });
  }

  // (2) Upgrade the Misuse section (#donts) into a card grid.
  var MIS = [
    ['lm-stretch', "Don't stretch or distort"],
    ['lm-rotate', "Don't rotate it"],
    ['lm-recolour', "Don't recolour the mark"],
    ['lm-shadow', "Don't add shadows or effects"],
    ['lm-ghost', "Don't ghost or fade it"],
    ['lm-lowcon', "Don't sit it on a low-contrast ground"]
  ];
  var X_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>';
  var OK_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>';
  function upgradeMisuse() {
    var sec = document.querySelector('.content #donts');
    if (!sec || sec.dataset.upgraded) return;
    sec.dataset.upgraded = '1';
    var ul = sec.querySelector('ul.list'); if (ul) ul.remove();
    var html = '<p class="para lm-intro">The mark is fixed artwork. Don\u2019t redraw, restyle or recolour it \u2014 use the supplied files as-is.</p><div class="lm-grid">';
    MIS.forEach(function (m) {
      html += '<figure class="lm-card ' + m[0] + '"><div class="lm-stage">' +
        '<img class="lm-logo" src="/brand/spendflo-full-colour-black.svg" alt=""/>' +
        '<span class="lm-badge">' + X_SVG + '</span></div>' +
        '<figcaption class="lm-cap">' + m[1] + '</figcaption></figure>';
    });
    html += '</div>';
    sec.insertAdjacentHTML('beforeend', html);
  }

  // (3) Add the co-branding / partner-lockup section (Spendflo x Acumatica).
  function partnerLock(mode) { // mode: 'light' | 'dark' | 'pink'
    var sf = mode === 'dark' ? '/brand/spendflo-full-colour-white.svg' : '/brand/spendflo-full-colour-black.svg';
    var partner = mode === 'pink'
      ? '<span class="cb-pink" role="img" aria-label="Acumatica"></span>'
      : '<img class="cb-partner" src="/brand/acumatica-' + (mode === 'dark' ? 'white' : 'colour') + '.svg" alt="Acumatica"/>';
    return '<span class="cb-lock"><img class="cb-sf" src="' + sf + '" alt="Spendflo"/>' +
      '<span class="cb-div"></span>' + partner + '</span>';
  }
  function addPartners() {
    var content = document.querySelector('.content');
    if (!content || content.querySelector('#partners')) return;
    var sec = document.createElement('div');
    sec.id = 'partners';
    sec.className = 'dw-safe-section';
    sec.innerHTML =
      '<h2 class="sec">Co-branding &amp; partner lockups</h2>' +
      '<p class="para cb-intro">When Spendflo appears next to a partner brand, pair the marks \u2014 don\u2019t merge them. ' +
      'Spendflo first, a hairline divider, clear space \u2265 <b>x</b> on either side, and the partner scaled to the same optical height.</p>' +
      '<div class="cb-dos">' +
        '<div class="cb-card big"><span class="cb-badge ok">' + OK_SVG + '</span><div class="cb-stage">' + partnerLock('light') + '</div>' +
          '<div class="cb-cap">On white &amp; light neutrals: full-colour Spendflo, the partner in its own colours</div></div>' +
        '<div class="cb-card big dark"><span class="cb-badge ok">' + OK_SVG + '</span><div class="cb-stage">' + partnerLock('dark') + '</div>' +
          '<div class="cb-cap">On dark or maroon grounds, both marks go white</div></div>' +
      '</div>' +
      '<div class="cb-donts">' +
        '<div class="cb-card sm cb-outweigh"><span class="cb-badge no">' + X_SVG + '</span><div class="cb-stage">' + partnerLock('light') + '</div><div class="cb-cap">Don\u2019t let the partner outweigh the mark</div></div>' +
        '<div class="cb-card sm cb-merged"><span class="cb-badge no">' + X_SVG + '</span><div class="cb-stage">' + partnerLock('light') + '</div><div class="cb-cap">Don\u2019t merge the marks, keep the divider</div></div>' +
        '<div class="cb-card sm cb-recolour"><span class="cb-badge no">' + X_SVG + '</span><div class="cb-stage">' + partnerLock('pink') + '</div><div class="cb-cap">Don\u2019t recolour the partner in Spendflo pink</div></div>' +
        '<div class="cb-card sm lowcon cb-lowcon"><span class="cb-badge no">' + X_SVG + '</span><div class="cb-stage">' + partnerLock('dark') + '</div><div class="cb-cap">Don\u2019t pair on a ground either mark can\u2019t clear</div></div>' +
      '</div>';
    var stop = content.querySelector('.related');
    if (stop) content.insertBefore(sec, stop); else content.appendChild(sec);
  }

  /* ---- Sidebar nav restructure (move items between groups) ---- */
  function navWrapper(href) {
    var a = document.querySelector('.navpanel a.np-row[href*="' + href + '"]');
    return a ? a.parentElement : null;
  }
  function navGroup(label) {
    var ls = document.querySelectorAll('.navpanel .np-glabel');
    for (var i = 0; i < ls.length; i++) if (ls[i].textContent.trim() === label) return ls[i].parentElement;
    return null;
  }
  function restructureNav() {
    var foundations = navGroup('Foundations');
    if (!foundations) return;
    // Move Spacing & layout into Foundations (at the end)
    var spaceW = navWrapper('/tokens/space-layout');
    if (spaceW && spaceW.parentElement !== foundations) foundations.appendChild(spaceW);
    // Hide the now-empty Design tokens group
    var dt = navGroup('Design tokens');
    if (dt) dt.style.display = 'none';
  }


  var DOCMETA = {
    '/getting-started/introduction':     { chips: ['Overview', 'Principles', 'How to use'] },
    '/getting-started/developer-workflow': { chips: ['Tokens in code', 'Components', 'Handoff'] },
    '/getting-started/contribution':     { chips: ['Propose', 'Review', 'Governance'] },
    '/getting-started/design-workflow':  { chips: ['Compose from tokens', 'On-brand by default'],
      wi: [['01', 'Foundations'], ['02', 'Components'], ['03', 'Templates'], ['04', 'Assets'], ['05', 'Publish'], ['06', 'Scale']] },
    '/tokens/colors':          { chips: ['CSS variables', 'Copy-ready', 'Semantic'] },
    '/tokens/space-layout':    { chips: ['8px system', 'Grid', 'Breakpoints'] },
    '/tokens/elevation-motion':{ chips: ['Shadows', 'Durations', 'Easing'] },
    '/systems/whitepaper':     { chips: ['A4 · print', 'Long-form'] }
  };
  function routeKey() { return location.pathname.replace(/\/$/, ''); }
  function deriveWi() {
    var out = [], n = 0;
    document.querySelectorAll('.content section[id]').forEach(function (s) {
      if (n >= 6 || s.style.display === 'none') return;
      var h = s.querySelector('h2.sec') || s.querySelector('h2');
      if (!h) return;
      n++; out.push([('0' + n).slice(-2), h.textContent.trim()]);
    });
    return out;
  }
  function convertDocHd() {
    var hd = document.querySelector('.content .doc-hd');
    if (!hd || hd.dataset.converted) return;
    hd.dataset.converted = '1';
    var meta = DOCMETA[routeKey()] || {};
    var num = (hd.querySelector('.doc-num') || {}).textContent || '';
    var tagEl = hd.querySelector('.doc-head-tag span:last-child');
    var tag = tagEl ? tagEl.textContent.trim() : '';
    var titleEl = hd.querySelector('.doc-title, h1');
    var title = titleEl ? titleEl.textContent.trim() : '';
    var ledeEl = hd.querySelector('.doc-lede');
    var lede = ledeEl ? ledeEl.innerHTML.trim() : '';
    var wi = meta.wi || deriveWi();
    var chips = (meta.chips || [tag]).map(function (c) { return '<span class="pchip">' + c + '</span>'; }).join('');
    var pills = wi.map(function (p) { return '<span class="wi-pill"><em>' + p[0] + '</em>' + p[1] + '</span>'; }).join('');
    var eyebrow = tag + (num ? ' \u00b7 ' + num : '');
    var cover =
      '<div class="phero-stage"><div class="fr cover-fr">' +
        (num ? '<span class="cover-num">' + num + '</span>' : '') +
        '<div class="cover-inner"><img class="cover-mark" src="/brand/spendflo-icon-colour.svg" alt=""/>' +
        '<span class="cover-tag">' + (tag || 'Spendflo DLS') + '</span></div></div></div>';
    var phero = document.createElement('div');
    phero.className = 'phero';
    phero.innerHTML =
      '<div><img class="phero-mark" src="/brand/spendflo-icon-colour.svg" alt="Spendflo" style="height:40px;width:auto;display:block;margin-bottom:26px"/>' +
        '<div class="phero-eyebrow">' + eyebrow + '</div>' +
        '<h1>' + title + '</h1>' +
        (lede ? '<p class="desc">' + lede + '</p>' : '') +
        (chips ? '<div class="phero-chips">' + chips + '</div>' : '') +
        (pills ? '<div class="wi"><span class="wi-label">What\u2019s inside</span><div class="wi-list">' + pills + '</div></div>' : '') +
      '</div>' + cover;
    hd.parentNode.replaceChild(phero, hd);
  }


  function mount() {
    if (!onRoute()) return;
    var content = document.querySelector('.content');
    if (!content) return;
    if (content.querySelector('#dw-redesign')) return;
    HIDE.forEach(function (sel) {
      content.querySelectorAll(sel).forEach(function (n) { n.style.display = 'none'; });
    });
    var wrap = document.createElement('div');
    wrap.id = 'dw-redesign';
    wrap.innerHTML = TEMPLATE;
    // Header now comes from the converted phero; drop the bento's own header + ghost.
    ['.dw-head', '.dw-ghost'].forEach(function (sel) {
      var el = wrap.querySelector(sel); if (el) el.remove();
    });
    var stop = content.querySelector('.related');
    if (stop) content.insertBefore(wrap, stop);
    else content.appendChild(wrap);
    init(wrap);
  }

  function loadSigBuilder() {
    if (location.pathname.indexOf('/systems/email-signature') === -1) return;
    if (window.__sigLoaded) return; window.__sigLoaded = true;
    var s = document.createElement('script'); s.defer = true; s.src = '/sig-builder.js?v=29';
    document.head.appendChild(s);
  }
  function relabelEmailer() {
    // Rename "Emailer" -> "Newsletter" in the nav, home index, related & prev/next links.
    document.querySelectorAll('.navpanel a.np-row[href*="/systems/emailer"] .lb').forEach(function (n) { if (n.textContent.trim() === 'Emailer') n.textContent = 'Newsletter'; });
    document.querySelectorAll('[href*="/systems/emailer"]').forEach(function (a) {
      a.querySelectorAll('*').forEach(function (n) { if (n.children.length === 0 && n.textContent.trim() === 'Emailer') n.textContent = 'Newsletter'; });
    });
    if (location.pathname.indexOf('/systems/emailer') !== -1) {
      var h = document.querySelector('.content .phero h1, .content .doc-title, .content h1');
      if (h && h.textContent.trim() === 'Emailer') h.textContent = 'Newsletter';
    }
  }
  function applyAll() { restructureNav(); relabelEmailer(); convertDocHd(); brandSwap(); injectSpendfloIcon(); loadSigBuilder(); mount(); }
  function schedule() { clearTimeout(timer); timer = setTimeout(applyAll, 120); }

  function init(root) {
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
      }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
      root.querySelectorAll('[data-io],[data-reveal]').forEach(function (el) { io.observe(el); });
    } else {
      root.querySelectorAll('[data-io],[data-reveal]').forEach(function (el) { el.classList.add('in'); });
    }
    root.querySelectorAll('.tile-toggle').forEach(function (btn) {
      if (btn.dataset.wired) return; btn.dataset.wired = '1';
      btn.addEventListener('click', function () {
        var tile = btn.closest('.tile');
        var open = tile.classList.toggle('open');
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
        btn.firstChild.textContent = open ? 'Show less ' : 'Details ';
      });
    });
    var nodes = {};
    root.querySelectorAll('.flow-node').forEach(function (n) { nodes[n.dataset.step] = n; });
    root.querySelectorAll('.tile[data-step]').forEach(function (tile) {
      tile.addEventListener('mouseenter', function () { var n = nodes[tile.dataset.step]; if (n) n.classList.add('hot'); });
      tile.addEventListener('mouseleave', function () { var n = nodes[tile.dataset.step]; if (n) n.classList.remove('hot'); });
    });
    if (!reduce) {
      var ghost = root.querySelector('[data-parallax]');
      if (ghost) {
        var ticking = false;
        window.addEventListener('scroll', function () {
          if (ticking) return; ticking = true;
          requestAnimationFrame(function () {
            var r = ghost.getBoundingClientRect();
            var mid = (r.top + r.height / 2) - window.innerHeight / 2;
            ghost.style.transform = 'translateY(' + (mid * -0.06).toFixed(1) + 'px)';
            ticking = false;
          });
        }, { passive: true });
      }
    }
  }

  function afterHydration(cb) {
    if (document.readyState === 'complete') setTimeout(cb, 60);
    else window.addEventListener('load', function () { setTimeout(cb, 60); });
  }

  function boot() {
    // Load custom styles from a fresh URL (the hashed Next stylesheet is cached
    // "immutable", so appended rules there may never reach a returning visitor).
    if (!document.querySelector('link[data-dls-custom]')) {
      var l = document.createElement('link');
      l.rel = 'stylesheet'; l.href = '/dls-custom.css?v=29'; l.setAttribute('data-dls-custom', '1');
      document.head.appendChild(l);
    }
    // Swap brand ASAP too (best-effort pre-hydration), then keep it applied.
    brandSwap();
    afterHydration(function () {
      settled = true;
      applyAll();
      var host = document.querySelector('.app') || document.body;
      var mo = new MutationObserver(function () { schedule(); });
      mo.observe(host, { childList: true, subtree: true, attributes: true, attributeFilter: ['src'] });
      ['pushState', 'replaceState'].forEach(function (m) {
        var orig = history[m];
        history[m] = function () { var r = orig.apply(this, arguments); schedule(); return r; };
      });
      window.addEventListener('popstate', schedule);
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
