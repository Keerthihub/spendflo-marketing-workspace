/* Spendflo DLS — Email Signature Builder
 * Injected on /systems/email-signature. Self-mounts after hydration and
 * re-mounts on client-side navigation. Produces bulletproof table-based,
 * inline-CSS signatures that survive Gmail / Outlook / Apple Mail.
 */
(function () {
  var ROUTE = '/systems/email-signature';
  function onRoute() { return location.pathname.replace(/\/$/, '').indexOf(ROUTE) !== -1; }
  var ORIGIN = location.origin;
  function abs(p) { return ORIGIN + p; }

  /* ---------------- Config (Brand-Team editable) ---------------- */
  var DEFAULT_CFG = {
    colors: { accent: '#e92589', ink: '#1c1917', sub: '#6b7280', maroon: '#390021', line: '#e7e5e4' },
    disclaimer: 'This email and any attachments are confidential and intended solely for the addressee.',
    templates: { standard: true, community: true, marketing: true, minimal: true, executive: true, sales: true, events: true },
    socialSet: { linkedin: true, whatsapp: true, x: true, youtube: true, slack: true, github: true },
    ctaPresets: ['Join the Community', 'Book a Demo', 'Visit Spendflo', 'Register for Event'],
    ctaStyle: 'solid', // solid | outline
    banners: [
      { label: 'Procurement Report 2026', url: abs('/brand/banner-report.png') },
      { label: 'Book a Demo', url: abs('/brand/banner-demo.png') }
    ]
  };
  var TEMPLATE_META = [
    ['standard', 'Standard Corporate', 'Logo, details, contact & social'],
    ['community', 'Community CTA', 'Adds a Join-the-Community button'],
    ['marketing', 'Marketing Banner', 'Adds a full-width campaign banner'],
    ['minimal', 'Minimal', 'Name, title, one contact line'],
    ['executive', 'Executive', 'Profile photo, refined & spacious'],
    ['sales', 'Sales', 'Book-a-demo CTA + calendar link'],
    ['events', 'Events & Campaign', 'Banner + register CTA']
  ];

  var LS = 'spendflo-sig-builder-v1';
  function loadState() {
    var d = {
      greeting: 'Cheers!',
      fullName: 'Alex Morgan', jobTitle: 'Account Executive', dept: '', company: 'Spendflo',
      tagline: 'AI Workforce for P2P',
      email: 'alex@spendflo.com', phone: '4155550142', website: 'https://spendflo.com',
      linkedin: 'https://linkedin.com/in/alexmorgan', whatsapp: '', x: '', youtube: '', slack: '', github: '',
      calendar: '', profileUrl: '',
      ctaEnabled: false, ctaText: 'Join the Community', ctaUrl: 'https://spendflo.com/community',
      bannerEnabled: false, bannerUrl: '',
      disclaimerEnabled: false,
      template: 'standard',
      device: 'desktop', bg: 'light'
    };
    try { var s = JSON.parse(localStorage.getItem(LS)); if (s && s.state) return Object.assign(d, s.state); } catch (e) {}
    return d;
  }
  function loadCfg() {
    try { var s = JSON.parse(localStorage.getItem(LS)); if (s && s.cfg) return deepMerge(DEFAULT_CFG, s.cfg); } catch (e) {}
    return JSON.parse(JSON.stringify(DEFAULT_CFG));
  }
  function persist() { try { localStorage.setItem(LS, JSON.stringify({ state: state, cfg: cfg })); } catch (e) {} }
  function deepMerge(a, b) { var o = JSON.parse(JSON.stringify(a)); for (var k in b) { if (b[k] && typeof b[k] === 'object' && !Array.isArray(b[k])) o[k] = deepMerge(a[k] || {}, b[k]); else o[k] = b[k]; } return o; }

  var state = loadState();
  var cfg = loadCfg();

  /* ---------------- Helpers ---------------- */
  function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function isEmail(s) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s || ''); }
  function isUrl(s) { return /^https?:\/\/.+/.test(s || '') || /^[\w-]+\.[\w.-]+/.test(s || ''); }
  function href(u) { if (!u) return ''; return /^https?:\/\//.test(u) ? u : ('https://' + u); }
  function fmtPhone(p) {
    if (!p) return '';
    var d = ('' + p).replace(/[^\d]/g, '');
    if (d.length === 10) return '(' + d.slice(0, 3) + ') ' + d.slice(3, 6) + '-' + d.slice(6);
    if (d.length === 11 && d[0] === '1') return '+1 (' + d.slice(1, 4) + ') ' + d.slice(4, 7) + '-' + d.slice(7);
    return p;
  }
  var FONT = "Inter, -apple-system, 'Segoe UI', Arial, sans-serif";

  /* ---------------- Signature building blocks (table/inline) ---------------- */
  function link(text, url, color, bold) {
    return '<a href="' + esc(url) + '" style="color:' + color + ';text-decoration:none;font-family:' + FONT + (bold ? ';font-weight:600' : '') + '">' + esc(text) + '</a>';
  }
  function contactRow(icon, text, url, c) {
    return '<tr><td style="padding:2px 0;font-family:' + FONT + ';font-size:13px;color:' + c.sub + ';line-height:1.5">' +
      '<img src="' + abs('/icons/social/' + icon + '.png') + '" width="14" height="14" alt="" style="vertical-align:middle;margin-right:8px">' +
      link(text, url, c.sub) + '</td></tr>';
  }
  function contactBlock(v, c) {
    var rows = '';
    if (isEmail(v.email)) rows += contactRow('mail', v.email, 'mailto:' + v.email, c);
    if (v.phone) rows += contactRow('phone', fmtPhone(v.phone), 'tel:' + ('' + v.phone).replace(/[^\d+]/g, ''), c);
    if (v.website) rows += contactRow('globe', ('' + v.website).replace(/^https?:\/\//, ''), href(v.website), c);
    if (v.calendar) rows += contactRow('calendar', 'Book time with me', href(v.calendar), c);
    return rows ? '<table cellpadding="0" cellspacing="0" role="presentation" style="margin-top:8px">' + rows + '</table>' : '';
  }
  function socialBlock(v, c, size) {
    size = size || 26;
    var order = ['linkedin', 'whatsapp', 'x', 'youtube', 'slack', 'github'];
    var out = '';
    order.forEach(function (k) {
      if (!cfg.socialSet[k]) return; var u = v[k]; if (!u) return;
      out += '<a href="' + esc(href(u)) + '" style="text-decoration:none;margin-right:7px;display:inline-block">' +
        '<img src="' + abs('/icons/social/black/' + k + '.png') + '" width="' + size + '" height="' + size + '" alt="' + k + '" style="vertical-align:middle;border:0"></a>';
    });
    return out ? '<div style="margin-top:12px;line-height:1">' + out + '</div>' : '';
  }
  function nameBlock(v, c, nameSize) {
    var out = '';
    if (v.greeting) out += '<div style="font-family:' + FONT + ';font-size:14px;color:' + c.ink + ';margin-bottom:4px">' + esc(v.greeting) + '</div>';
    var role = [v.jobTitle, v.dept].filter(Boolean).join(', ');
    out += '<div style="font-family:' + FONT + ';font-size:' + (nameSize || 16) + 'px;color:' + c.ink + ';line-height:1.35">' +
      '<b style="font-weight:700">' + esc(v.fullName || '') + '</b>' + (role ? ' <span style="color:' + c.sub + '">| ' + esc(role) + '</span>' : '') + '</div>';
    if (v.company) out += '<div style="font-family:' + FONT + ';font-size:' + (nameSize || 16) + 'px;line-height:1.35">' +
      '<b style="color:' + c.accent + ';font-weight:700">' + esc(v.company) + '</b>' + (v.tagline ? ' <span style="color:' + c.ink + '">| ' + esc(v.tagline) + '</span>' : '') + '</div>';
    return out;
  }
  function leftTile(v, size) {
    size = size || 122;
    if (v.profileUrl) return '<img src="' + esc(v.profileUrl) + '" width="' + size + '" height="' + size + '" alt="' + esc(v.fullName) + '" style="display:block;border-radius:16px;object-fit:cover">';
    return '<img src="' + abs('/brand/spendflo-avatar.png') + '" width="' + size + '" height="' + size + '" alt="Spendflo" style="display:block;border-radius:16px">';
  }
  function logoImg(which, w) {
    var src = which === 'white' ? abs('/brand/spendflo-full-colour-white.png') : abs('/brand/spendflo-full-colour-black.png');
    return '<img src="' + src + '" width="' + (w || 132) + '" alt="Spendflo" style="display:block">';
  }
  function iconImg(w) { return '<img src="' + abs('/brand/spendflo-icon-colour.png') + '" width="' + (w || 40) + '" alt="Spendflo" style="display:block">'; }
  function profileImg(v, size) {
    if (!v.profileUrl) return '';
    return '<img src="' + esc(v.profileUrl) + '" width="' + size + '" height="' + size + '" alt="' + esc(v.fullName) + '" style="display:block;border-radius:' + size + 'px;object-fit:cover">';
  }
  function ctaButton(v, c) {
    if (!v.ctaEnabled || !v.ctaText) return '';
    var solid = cfg.ctaStyle === 'solid';
    var inner = '<a href="' + esc(href(v.ctaUrl)) + '" style="display:inline-block;padding:11px 22px;font-family:' + FONT + ';font-size:13px;font-weight:700;text-decoration:none;border-radius:24px;' +
      (solid ? 'color:#ffffff;background:' + c.accent : 'color:' + c.accent + ';border:1.5px solid ' + c.accent) + '">' + esc(v.ctaText) + '</a>';
    return '<table cellpadding="0" cellspacing="0" role="presentation" style="margin-top:14px"><tr><td' + (solid ? ' bgcolor="' + c.accent + '" style="border-radius:24px"' : '') + '>' + inner + '</td></tr></table>';
  }
  function bannerImg(v) {
    if (!v.bannerEnabled || !v.bannerUrl) return '';
    return '<div style="margin-top:14px"><a href="' + esc(href(v.ctaUrl || v.website || 'https://spendflo.com')) + '"><img src="' + esc(v.bannerUrl) + '" width="468" alt="Spendflo campaign" style="display:block;max-width:468px;width:100%;height:auto;border-radius:10px"></a></div>';
  }
  function disclaimer(v, c) {
    if (!v.disclaimerEnabled || !cfg.disclaimer) return '';
    return '<div style="margin-top:14px;font-family:' + FONT + ';font-size:10px;color:#9aa0a6;line-height:1.5;max-width:468px">' + esc(cfg.disclaimer) + '</div>';
  }
  function rule(c) { return '<div style="height:1px;background:' + c.line + ';margin:14px 0;max-width:468px"></div>'; }

  /* ---------------- Templates ---------------- */
  function tplStandard(v, c, opts) {
    opts = opts || {};
    var body = '<table cellpadding="0" cellspacing="0" role="presentation"><tr>' +
      '<td style="vertical-align:top;padding-right:20px">' + leftTile(v, 122) + '</td>' +
      '<td style="vertical-align:top;padding-left:20px;border-left:1px solid ' + c.line + '">' +
        nameBlock(v, c) + contactBlock(v, c) + socialBlock(v, c) + (opts.cta ? ctaButton(v, c) : '') +
      '</td></tr></table>';
    var extra = (opts.banner ? bannerImg(v) : '') + disclaimer(v, c);
    return body + extra;
  }
  function tplMinimal(v, c) {
    var out = '<div>' + nameBlock(v, c, 15) + '</div>';
    var bits = [];
    if (isEmail(v.email)) bits.push(link(v.email, 'mailto:' + v.email, c.sub));
    if (v.phone) bits.push(link(fmtPhone(v.phone), 'tel:' + ('' + v.phone).replace(/[^\d+]/g, ''), c.sub));
    if (v.website) bits.push(link(('' + v.website).replace(/^https?:\/\//, ''), href(v.website), c.accent));
    if (bits.length) out += '<div style="margin-top:8px;font-family:' + FONT + ';font-size:13px;color:' + c.sub + '">' + bits.join('&nbsp;&nbsp;·&nbsp;&nbsp;') + '</div>';
    out += socialBlock(v, c, 20);
    return out;
  }
  function tplExecutive(v, c) {
    var body = '<table cellpadding="0" cellspacing="0" role="presentation"><tr>' +
      '<td style="vertical-align:top;padding-right:24px">' + leftTile(v, 150) + '</td>' +
      '<td style="vertical-align:top">' + nameBlock(v, c, 18) +
      '<div style="margin-top:10px">' + logoImg('black', 120) + '</div>' +
      contactBlock(v, c) + socialBlock(v, c) + '</td></tr></table>';
    return body + disclaimer(v, c);
  }
  function tplSales(v, c) {
    var sv = Object.assign({}, v, { ctaEnabled: true, ctaText: v.ctaText || 'Book a Demo', ctaUrl: v.ctaUrl || v.calendar || 'https://spendflo.com/demo' });
    return tplStandard(sv, c, { cta: true });
  }
  function tplCommunity(v, c) {
    var sv = Object.assign({}, v, { ctaEnabled: true, ctaText: v.ctaText || 'Join the Community', ctaUrl: v.ctaUrl });
    return tplStandard(sv, c, { cta: true });
  }
  function tplMarketing(v, c) {
    var sv = Object.assign({}, v, { bannerEnabled: true });
    return tplStandard(sv, c, { banner: true });
  }
  function tplEvents(v, c) {
    var sv = Object.assign({}, v, { bannerEnabled: true, ctaEnabled: true, ctaText: v.ctaText || 'Register for Event', ctaUrl: v.ctaUrl });
    return tplStandard(sv, c, { cta: true, banner: true });
  }
  var TEMPLATES = { standard: tplStandard, community: tplCommunity, marketing: tplMarketing, minimal: tplMinimal, executive: tplExecutive, sales: tplSales, events: tplEvents };

  function renderSignature() {
    var c = cfg.colors, v = state;
    var inner = (TEMPLATES[v.template] || tplStandard)(v, c);
    return '<table cellpadding="0" cellspacing="0" role="presentation" style="font-family:' + FONT + ';color:' + c.ink + '"><tr><td style="padding:2px">' + inner + '</td></tr></table>';
  }
  function plainText() {
    var v = state, L = [];
    if (v.fullName) L.push(v.fullName);
    var tl = [v.jobTitle, v.dept].filter(Boolean).join(' · '); if (tl) L.push(tl);
    if (v.company) L.push(v.company);
    L.push('');
    if (isEmail(v.email)) L.push('Email: ' + v.email);
    if (v.phone) L.push('Phone: ' + fmtPhone(v.phone));
    if (v.website) L.push('Web: ' + v.website);
    if (v.calendar) L.push('Calendar: ' + v.calendar);
    ['linkedin', 'whatsapp', 'x', 'youtube', 'slack', 'github'].forEach(function (k) { if (v[k]) L.push(k[0].toUpperCase() + k.slice(1) + ': ' + v[k]); });
    return L.join('\n');
  }

  /* ---------------- UI ---------------- */
  var el = {}; // refs
  function field(id, label, val, type, ph) {
    return '<label class="sig-f"><span>' + label + '</span>' +
      '<input class="sig-in" data-k="' + id + '" type="' + (type || 'text') + '" value="' + esc(val || '') + '" placeholder="' + esc(ph || '') + '"></label>';
  }
  function toggle(id, label) {
    return '<label class="sig-toggle"><input type="checkbox" data-t="' + id + '"' + (state[id] ? ' checked' : '') + '><span class="sig-tk"></span>' + label + '</label>';
  }

  function formHtml() {
    var tpls = TEMPLATE_META.filter(function (t) { return cfg.templates[t[0]]; }).map(function (t) {
      return '<button class="sig-tpl' + (state.template === t[0] ? ' on' : '') + '" data-tpl="' + t[0] + '"><b>' + t[1] + '</b><em>' + t[2] + '</em></button>';
    }).join('');
    var ctaOpts = cfg.ctaPresets.map(function (p) { return '<option value="' + esc(p) + '"' + (state.ctaText === p ? ' selected' : '') + '>' + esc(p) + '</option>'; }).join('');
    var bannerOpts = '<option value="">— choose a campaign —</option>' + cfg.banners.map(function (b) { return '<option value="' + esc(b.url) + '"' + (state.bannerUrl === b.url ? ' selected' : '') + '>' + esc(b.label) + '</option>'; }).join('');
    return '' +
      '<div class="sig-card"><div class="sig-h">Template</div><div class="sig-tpls">' + tpls + '</div></div>' +
      '<div class="sig-card"><div class="sig-h">Your details</div>' +
        field('greeting', 'Greeting (optional)', state.greeting, 'text', 'Cheers!') +
        field('fullName', 'Full name', state.fullName) +
        field('jobTitle', 'Job title', state.jobTitle) +
        field('dept', 'Department (optional)', state.dept) +
        field('company', 'Company', state.company) +
        field('tagline', 'Company tagline (optional)', state.tagline, 'text', 'AI Workforce for P2P') +
        '<div class="sig-note" data-err="email"></div>' +
        field('email', 'Email', state.email, 'email', 'you@spendflo.com') +
        field('phone', 'Phone', state.phone, 'tel', '(415) 555-0142') +
        field('website', 'Website', state.website, 'url') +
        field('profileUrl', 'Profile image URL (optional — else the Spendflo tile shows)', state.profileUrl, 'url', 'https://…/me.jpg') +
      '</div>' +
      '<div class="sig-card"><div class="sig-h">Social</div>' +
        field('linkedin', 'LinkedIn', state.linkedin, 'url') +
        field('whatsapp', 'WhatsApp', state.whatsapp, 'url', 'https://wa.me/1…') +
        field('x', 'X (Twitter)', state.x, 'url') +
        field('youtube', 'YouTube', state.youtube, 'url') +
        field('slack', 'Slack', state.slack, 'url') +
        field('github', 'GitHub (optional)', state.github, 'url') +
      '</div>' +
      '<div class="sig-card"><div class="sig-h">Call to action</div>' +
        toggle('ctaEnabled', 'Show CTA button') +
        '<label class="sig-f"><span>Button text</span><select class="sig-in" data-k="ctaText">' + ctaOpts + '</select></label>' +
        field('ctaUrl', 'Button URL', state.ctaUrl, 'url') +
        field('calendar', 'Calendar link (optional)', state.calendar, 'url') +
      '</div>' +
      '<div class="sig-card"><div class="sig-h">Promotional banner</div>' +
        toggle('bannerEnabled', 'Show banner') +
        '<label class="sig-f"><span>Campaign</span><select class="sig-in" data-k="bannerUrl">' + bannerOpts + '</select></label>' +
        field('bannerCustom', '…or paste a banner image URL', '', 'url', 'https://…/banner.png') +
        '<label class="sig-upl">Upload banner image<input type="file" accept="image/*" data-upl="bannerUrl"></label>' +
      '</div>' +
      '<div class="sig-card"><div class="sig-h">Legal</div>' + toggle('disclaimerEnabled', 'Append disclaimer') + '</div>' +
      adminHtml();
  }

  function adminHtml() {
    var t = TEMPLATE_META.map(function (m) { return '<label class="sig-toggle sm"><input type="checkbox" data-adm-tpl="' + m[0] + '"' + (cfg.templates[m[0]] ? ' checked' : '') + '><span class="sig-tk"></span>' + m[1] + '</label>'; }).join('');
    var s = ['linkedin', 'whatsapp', 'x', 'youtube', 'slack', 'github'].map(function (k) { return '<label class="sig-toggle sm"><input type="checkbox" data-adm-soc="' + k + '"' + (cfg.socialSet[k] ? ' checked' : '') + '><span class="sig-tk"></span>' + k + '</label>'; }).join('');
    var banners = cfg.banners.map(function (b, i) { return '<div class="sig-lib"><span>' + esc(b.label) + '</span><button data-adm-delban="' + i + '">Remove</button></div>'; }).join('');
    return '<details class="sig-admin"><summary>Brand Team configuration</summary><div class="sig-admin-b">' +
      '<div class="sig-h">Brand colours</div><div class="sig-cols">' +
        colInput('accent', 'Accent') + colInput('ink', 'Ink') + colInput('sub', 'Secondary') + colInput('maroon', 'Maroon') +
      '</div>' +
      '<div class="sig-h">Approved templates</div><div class="sig-admgrid">' + t + '</div>' +
      '<div class="sig-h">Social icon set</div><div class="sig-admgrid">' + s + '</div>' +
      '<div class="sig-h">CTA style</div>' +
        '<label class="sig-toggle sm"><input type="radio" name="ctaStyle" data-adm-cta="solid"' + (cfg.ctaStyle === 'solid' ? ' checked' : '') + '> Solid</label>' +
        '<label class="sig-toggle sm"><input type="radio" name="ctaStyle" data-adm-cta="outline"' + (cfg.ctaStyle === 'outline' ? ' checked' : '') + '> Outline</label>' +
      '<div class="sig-h">Banner library</div>' + banners +
        '<div class="sig-libadd"><input class="sig-in" placeholder="Label" data-adm-blabel><input class="sig-in" placeholder="Image URL" data-adm-burl><button data-adm-addban>Add</button></div>' +
      '<div class="sig-h">Default disclaimer</div><textarea class="sig-in" data-adm-disc rows="3">' + esc(cfg.disclaimer) + '</textarea>' +
      '</div></details>';
  }
  function colInput(k, label) { return '<label class="sig-col"><input type="color" data-adm-col="' + k + '" value="' + cfg.colors[k] + '"><span>' + label + '</span></label>'; }

  function shell() {
    return '<div class="sig-wrap">' +
      '<div class="sig-form">' + formHtml() + '</div>' +
      '<div class="sig-preview"><div class="sig-pv-bar">' +
        '<div class="sig-seg" data-seg="device"><button data-v="desktop" class="on">Desktop</button><button data-v="mobile">Mobile</button></div>' +
        '<div class="sig-seg" data-seg="bg"><button data-v="light" class="on">Light</button><button data-v="dark">Dark</button></div>' +
        '<button class="sig-full" data-full>↗ Open full-screen builder</button>' +
      '</div>' +
      '<div class="sig-stage" data-stage><div class="sig-canvas" data-canvas></div></div>' +
      '<div class="sig-exports">' +
        '<button data-x="rich" class="sig-x primary">Copy signature</button>' +
        '<button data-x="html" class="sig-x">Copy HTML</button>' +
        '<button data-x="plain" class="sig-x">Copy text</button>' +
        '<button data-x="download" class="sig-x">Download .html</button>' +
        '<button data-x="reset" class="sig-x ghost">Reset</button>' +
      '</div><div class="sig-toast" data-toast></div>' +
      '</div></div>';
  }

  /* ---------------- Render + events ---------------- */
  function refreshPreview() {
    var canvas = el.root.querySelector('[data-canvas]');
    if (canvas) canvas.innerHTML = renderSignature();
    var stage = el.root.querySelector('[data-stage]');
    stage.className = 'sig-stage ' + state.bg + ' ' + state.device;
    // email validation note
    var note = el.root.querySelector('[data-err="email"]');
    if (note) note.textContent = (state.email && !isEmail(state.email)) ? 'Enter a valid email address' : '';
    persist();
  }
  function rebuildForm() {
    var form = el.root.querySelector('.sig-form'); if (form) form.innerHTML = formHtml();
  }
  function toast(msg) {
    var t = el.root.querySelector('[data-toast]'); if (!t) return;
    t.textContent = msg; t.classList.add('show');
    clearTimeout(t._t); t._t = setTimeout(function () { t.classList.remove('show'); }, 1800);
  }

  var FULL_CSS = "*{box-sizing:border-box}body{margin:0;font-family:Inter,-apple-system,'Segoe UI',Arial,sans-serif;background:#f6f5f4;color:#1c1917}" +
    ".top{position:sticky;top:0;display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap;padding:14px 22px;background:#fff;border-bottom:1px solid #e7e5e4;z-index:2}" +
    ".brand{display:flex;align-items:center;gap:12px;font-weight:600}.brand img{display:block}.brand span{color:#6b7280;font-weight:500}" +
    ".tools{display:flex;align-items:center;gap:10px;flex-wrap:wrap}" +
    ".seg{display:inline-flex;background:#f4f3f2;border:1px solid #e7e5e4;border-radius:10px;padding:3px}" +
    ".seg button{border:0;background:transparent;padding:6px 12px;font:inherit;font-size:13px;color:#6b7280;border-radius:8px;cursor:pointer}" +
    ".seg button.on{background:#fff;color:#1c1917;box-shadow:0 1px 3px rgba(0,0,0,.1)}" +
    ".btn{border:1px solid #e7e5e4;background:#e92589;color:#fff;border-color:#e92589;border-radius:10px;padding:9px 16px;font:inherit;font-size:13px;font-weight:600;cursor:pointer}" +
    ".btn.ghost{background:#fff;color:#1c1917;border-color:#e7e5e4}" +
    ".stage{min-height:calc(100vh - 62px);display:flex;align-items:flex-start;justify-content:center;padding:56px 24px;transition:background .3s}" +
    ".stage.light{background:#fff}.stage.dark{background:#111114}" +
    ".canvas{width:100%;max-width:560px}.stage.mobile .canvas{max-width:360px}" +
    ".toast{position:fixed;bottom:24px;left:50%;transform:translateX(-50%) translateY(10px);background:#1c1917;color:#fff;padding:10px 18px;border-radius:10px;font-size:13px;opacity:0;transition:.25s;pointer-events:none}" +
    ".toast.show{opacity:1;transform:translateX(-50%)}";
  var FULL_JS = "var P=__PLAIN__;function $(s){return document.querySelector(s)}function toast(m){var t=$('#toast');t.textContent=m;t.classList.add('show');clearTimeout(t._t);t._t=setTimeout(function(){t.classList.remove('show')},1800)}" +
    "function seg(id){document.querySelectorAll('#'+id+' button').forEach(function(b){b.onclick=function(){document.querySelectorAll('#'+id+' button').forEach(function(x){x.classList.toggle('on',x===b)});var st=$('#stage');st.classList.remove('light','dark','desktop','mobile');st.classList.add($('#bg button.on').dataset.v);st.classList.add($('#device button.on').dataset.v)}})}seg('device');seg('bg');" +
    "$('#copy').onclick=function(){var c=$('#canvas');if(navigator.clipboard&&window.ClipboardItem){var h=new Blob([c.innerHTML],{type:'text/html'}),t=new Blob([P],{type:'text/plain'});navigator.clipboard.write([new ClipboardItem({'text/html':h,'text/plain':t})]).then(function(){toast('Signature copied — paste into your email settings')}).catch(sel)}else sel();function sel(){var r=document.createRange();r.selectNodeContents(c);var s=getSelection();s.removeAllRanges();s.addRange(r);try{document.execCommand('copy');toast('Signature copied')}catch(e){toast('Copy failed')}s.removeAllRanges()}};" +
    "$('#dl').onclick=function(){var doc='<!doctype html><meta charset=utf-8><body style=\"margin:24px\">'+$('#canvas').innerHTML+'</body>';var b=new Blob([doc],{type:'text/html'});var a=document.createElement('a');a.href=URL.createObjectURL(b);a.download='spendflo-signature.html';a.click();URL.revokeObjectURL(a.href);toast('Downloaded')};";
  function buildFullPage(sig, plain) {
    return '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">' +
      '<title>Spendflo — Signature preview</title><link rel="icon" href="' + abs('/brand/spendflo-icon-colour.png') + '"><style>' + FULL_CSS + '</style></head><body>' +
      '<header class="top"><div class="brand"><img src="' + abs('/brand/spendflo-full-colour-black.png') + '" height="22" alt="Spendflo"><span>Signature preview</span></div>' +
      '<div class="tools">' +
        '<div class="seg" id="device"><button data-v="desktop" class="on">Desktop</button><button data-v="mobile">Mobile</button></div>' +
        '<div class="seg" id="bg"><button data-v="light" class="on">Light</button><button data-v="dark">Dark</button></div>' +
        '<button class="btn" id="copy">Copy signature</button><button class="btn ghost" id="dl">Download</button>' +
      '</div></header>' +
      '<main class="stage light desktop" id="stage"><div class="canvas" id="canvas">' + sig + '</div></main>' +
      '<div class="toast" id="toast"></div>' +
      '<script>' + FULL_JS.replace('__PLAIN__', JSON.stringify(plain)) + '<\/script></body></html>';
  }
  function openFullView() {
    var w;
    try { w = window.open('/signature-builder.html?v=27', 'spendflo-signature-fullscreen'); } catch (e) { w = null; }
    if (!w) { openModal(); return; } // pop-up blocked -> in-page modal
    w.focus();
  }
  function openModal() {
    var old = document.getElementById('sig-modal'); if (old) old.remove();
    var m = document.createElement('div'); m.id = 'sig-modal';
    m.innerHTML =
      '<div class="sig-modal-back" data-close></div>' +
      '<div class="sig-modal-card">' +
        '<div class="sig-modal-bar">' +
          '<span>Signature preview</span>' +
          '<span class="sig-modal-tools">' +
            '<span class="sig-seg" data-mseg="bg"><button data-mv="light" class="' + (state.bg === 'light' ? 'on' : '') + '">Light</button><button data-mv="dark" class="' + (state.bg === 'dark' ? 'on' : '') + '">Dark</button></span>' +
            '<button class="sig-x primary" data-mcopy>Copy signature</button>' +
            '<button class="sig-modal-x" data-close>✕</button>' +
          '</span>' +
        '</div>' +
        '<div class="sig-modal-stage ' + state.bg + '" data-mstage><div class="sig-modal-canvas">' + renderSignature() + '</div></div>' +
      '</div>';
    document.body.appendChild(m);
    document.body.style.overflow = 'hidden';
    m.addEventListener('click', function (e) {
      if (e.target.closest('[data-close]')) { m.remove(); document.body.style.overflow = ''; return; }
      if (e.target.closest('[data-mcopy]')) { copyRich(); return; }
      var mb = e.target.closest('[data-mseg] button');
      if (mb) {
        state.bg = mb.getAttribute('data-mv'); persist();
        m.querySelector('[data-mstage]').className = 'sig-modal-stage ' + state.bg;
        m.querySelectorAll('[data-mseg] button').forEach(function (x) { x.classList.toggle('on', x === mb); });
        refreshPreview();
      }
    });
    document.addEventListener('keydown', function esc(ev) { if (ev.key === 'Escape') { var mm = document.getElementById('sig-modal'); if (mm) mm.remove(); document.body.style.overflow = ''; document.removeEventListener('keydown', esc); } });
  }

  function copyRich() {
    var html = renderSignature();
    var blobHtml = new Blob([html], { type: 'text/html' });
    var blobText = new Blob([plainText()], { type: 'text/plain' });
    if (navigator.clipboard && window.ClipboardItem) {
      navigator.clipboard.write([new ClipboardItem({ 'text/html': blobHtml, 'text/plain': blobText })])
        .then(function () { toast('Signature copied — paste into your email settings'); })
        .catch(function () { copyRichFallback(html); });
    } else copyRichFallback(html);
  }
  function copyRichFallback(html) {
    var d = document.createElement('div');
    d.style.cssText = 'position:fixed;left:-9999px;top:0'; d.contentEditable = 'true'; d.innerHTML = html;
    document.body.appendChild(d);
    var r = document.createRange(); r.selectNodeContents(d);
    var sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(r);
    try { document.execCommand('copy'); toast('Signature copied'); } catch (e) { toast('Copy failed — use Copy HTML'); }
    sel.removeAllRanges(); document.body.removeChild(d);
  }
  function fullDoc() {
    return '<!doctype html><html><head><meta charset="utf-8"><title>Spendflo signature</title></head><body style="margin:24px">' + renderSignature() + '</body></html>';
  }

  function bind() {
    var root = el.root;
    root.addEventListener('input', function (e) {
      var k = e.target.getAttribute('data-k');
      if (k === 'bannerCustom') { state.bannerUrl = e.target.value; state.bannerEnabled = !!e.target.value || state.bannerEnabled; refreshPreview(); return; }
      if (k) { state[k] = e.target.value; refreshPreview(); return; }
      var adminDisc = e.target.getAttribute('data-adm-disc') != null && e.target.hasAttribute('data-adm-disc');
      if (e.target.hasAttribute('data-adm-disc')) { cfg.disclaimer = e.target.value; refreshPreview(); }
    });
    root.addEventListener('change', function (e) {
      var t = e.target;
      if (t.getAttribute('data-t')) { state[t.getAttribute('data-t')] = t.checked; refreshPreview(); }
      else if (t.getAttribute('data-upl')) { handleUpload(t); }
      else if (t.hasAttribute('data-adm-tpl')) { cfg.templates[t.getAttribute('data-adm-tpl')] = t.checked; if (!cfg.templates[state.template]) { var first = TEMPLATE_META.filter(function (m) { return cfg.templates[m[0]]; })[0]; state.template = first ? first[0] : 'standard'; } persist(); rebuildForm(); refreshPreview(); }
      else if (t.hasAttribute('data-adm-soc')) { cfg.socialSet[t.getAttribute('data-adm-soc')] = t.checked; persist(); refreshPreview(); }
      else if (t.getAttribute('data-adm-cta')) { cfg.ctaStyle = t.getAttribute('data-adm-cta'); persist(); refreshPreview(); }
      else if (t.hasAttribute('data-adm-col')) { cfg.colors[t.getAttribute('data-adm-col')] = t.value; persist(); refreshPreview(); }
    });
    root.addEventListener('click', function (e) {
      var b = e.target.closest('[data-tpl],[data-x],[data-seg] button,[data-adm-addban],[data-adm-delban],[data-adm-col],[data-upl],[data-full]');
      if (!b) return;
      if (b.hasAttribute('data-full')) { openFullView(); return; }
      if (b.hasAttribute('data-tpl')) { state.template = b.getAttribute('data-tpl'); root.querySelectorAll('.sig-tpl').forEach(function (x) { x.classList.toggle('on', x === b); }); refreshPreview(); return; }
      if (b.parentElement && b.parentElement.hasAttribute('data-seg')) {
        var seg = b.parentElement.getAttribute('data-seg'); state[seg] = b.getAttribute('data-v');
        b.parentElement.querySelectorAll('button').forEach(function (x) { x.classList.toggle('on', x === b); }); refreshPreview(); return;
      }
      if (b.hasAttribute('data-x')) { doExport(b.getAttribute('data-x')); return; }
      if (b.hasAttribute('data-adm-addban')) {
        var lab = root.querySelector('[data-adm-blabel]'), url = root.querySelector('[data-adm-burl]');
        if (url.value) { cfg.banners.push({ label: lab.value || 'Campaign', url: url.value }); persist(); rebuildForm(); }
        return;
      }
      if (b.hasAttribute('data-adm-delban')) { cfg.banners.splice(+b.getAttribute('data-adm-delban'), 1); persist(); rebuildForm(); return; }
    });
  }
  function handleUpload(input) {
    var f = input.files && input.files[0]; if (!f) return;
    var r = new FileReader();
    r.onload = function () { state[input.getAttribute('data-upl')] = r.result; state.bannerEnabled = true; rebuildForm(); refreshPreview(); toast('Banner added (tip: host it for best email support)'); };
    r.readAsDataURL(f);
  }
  function doExport(kind) {
    if (kind === 'rich') return copyRich();
    if (kind === 'html') { navigator.clipboard.writeText(renderSignature()).then(function () { toast('HTML copied'); }); return; }
    if (kind === 'plain') { navigator.clipboard.writeText(plainText()).then(function () { toast('Plain text copied'); }); return; }
    if (kind === 'download') {
      var blob = new Blob([fullDoc()], { type: 'text/html' }); var a = document.createElement('a');
      a.href = URL.createObjectURL(blob); a.download = 'spendflo-signature.html'; a.click(); URL.revokeObjectURL(a.href); toast('Downloaded'); return;
    }
    if (kind === 'reset') { try { localStorage.removeItem(LS); } catch (e) {} state = loadState(); cfg = loadCfg(); rebuildForm(); refreshPreview(); toast('Reset to defaults'); return; }
  }

  /* ---------------- Mount ---------------- */
  function launcherHtml() {
    return '<div id="sig-launch" class="sl-wrap">' +
      '<div class="sl-left">' +
        '<div class="sl-eyebrow">Marketing · Tool</div>' +
        '<h2 class="sl-title">Email Signature Builder</h2>' +
        '<p class="sl-desc">Create a consistent, on-brand Spendflo signature in seconds. Pick a layout, fill in your details, and copy it straight into Gmail, Outlook or Apple Mail.</p>' +
        '<div class="sl-chips"><span>8 layouts</span><span>Live preview</span><span>One-click copy</span><span>On-brand</span></div>' +
        '<div class="sl-actions"><button class="sl-btn primary" data-open>Open the builder &#8599;</button><button class="sl-btn" data-copy>Copy a sample</button></div>' +
        '<div class="sl-note" data-toast></div>' +
      '</div>' +
      '<div class="sl-right"><div class="sl-mail"><div class="sl-mailbar"><span></span><span></span><span></span><em>New message</em></div>' +
        '<div class="sl-mailbody">' + renderSignature() + '</div></div></div>' +
    '</div>';
  }
  function wireLauncher() {
    el.root.addEventListener('click', function (e) {
      if (e.target.closest('[data-open]')) openFullView();
      else if (e.target.closest('[data-copy]')) copyRich();
    });
  }
  function mount() {
    if (!onRoute()) return;
    var content = document.querySelector('.content'); if (!content) return;
    if (content.querySelector('#sig-embed')) return;
    var sec = content.querySelector('#builder'); if (!sec) return;
    // keep the section heading; hide only its original placeholder body
    Array.prototype.slice.call(sec.children).forEach(function (ch) { if (ch.tagName !== 'H2') ch.style.display = 'none'; });
    var host = document.createElement('div'); host.id = 'sig-builder';
    host.innerHTML =
      '<div class="sig-embed-bar"><span>Fill in your details, pick a layout, then copy your signature.</span>' +
      '<a href="/signature-builder.html?v=27" target="_blank" rel="noopener">Open in a new tab &#8599;</a></div>' +
      '<div id="sig-embed" class="sig-embed"><iframe src="/signature-builder.html?v=27" title="Spendflo Signature Builder" allow="clipboard-read; clipboard-write"></iframe></div>';
    sec.appendChild(host);
  }

  function boot() {
    if (document.readyState === 'complete') setTimeout(mount, 60);
    else window.addEventListener('load', function () { setTimeout(mount, 60); });
    var host = document.querySelector('.app') || document.body;
    var mo = new MutationObserver(function () { if (onRoute() && !document.querySelector('#sig-builder')) mount(); });
    mo.observe(host, { childList: true, subtree: true });
    ['pushState', 'replaceState'].forEach(function (m) { var o = history[m]; history[m] = function () { var r = o.apply(this, arguments); setTimeout(mount, 80); return r; }; });
    window.addEventListener('popstate', function () { setTimeout(mount, 80); });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
