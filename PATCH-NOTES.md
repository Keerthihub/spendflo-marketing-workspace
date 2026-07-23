# Spendflo DLS — patch notes

Two changes were applied to this build.

## 1. Left navigation "glitch on click" — FIXED
File: `_next/static/css/<hash>.css`
The stylesheet defined smooth sidebar animations, then cancelled them with two
later override rules. Both were removed:
  - `.np-subwrap { transition: none }`  (killed the submenu slide)
  - `.np-pill    { animation: none }`   (killed the active-pill pop)
The original smooth rules (`transition: grid-template-rows .4s …` and
`animation: navpop …`) now take effect, so submenus expand smoothly instead of
snapping/overlapping.

## 2. "Design workflow" page — REDESIGNED
Route: `/getting-started/design-workflow`
A premium, documentation-grade redesign replaces the old oversized hero + text:
mono eyebrow, tightened type hierarchy, a numbered 01–06 stepper whose gradient
connector fills on scroll, and a bento of the six workflow steps (Foundations →
Components → Templates → Assets → Publish → Scale). One inverted near-black
"Publish" tile creates the black/white rhythm; the Spendflo gradient is rationed
to the stepper, active dots, the ship button, and the primary CTA. Cards expand
smoothly, hover-elevate, reveal on scroll, and have idle icon motion. Related
pages + prev/next pager are preserved.

How it's wired (compiled static export, no source rebuild available):
  - Redesign styles: appended to the site stylesheet, fully scoped under `.dw`
    (own tokens, prefixed keyframes — cannot affect other pages).
  - Mounting: `/dw-init.js` (referenced from every page `<head>`) mounts the
    redesign into the design-workflow page *after* React hydration, so there are
    no hydration mismatches. It is route-gated (no-ops on every other page) and
    handles both hard loads and in-app navigation.
  - `IBM Plex Mono` (Google Fonts) is loaded for the mono meta labels.

### To revert
  - Delete `/dw-init.js`.
  - Remove the injected line from each page `<head>`:
    `<link … IBM+Plex+Mono …/><script defer src="/dw-init.js"></script>`
  - Delete the appended CSS block starting at `/* ===== DW redesign (scoped) ===== */`.
  - (Nav fix) re-add the two override rules if you truly want the old snap back.

## 3. Brand icon — Flo icon applied across the site
Reference assets installed (from the supplied Flo icon):
  - `brand/flo-icon-colour.svg`  (gradient, for light surfaces)
  - `brand/flo-icon-white.svg` / `flo-icon-white-gradient.svg` (for dark surfaces)
  - `logo/flo-icon.svg`, `downloads/brand/flo-icon.svg` (kept in sync)
  - Favicons generated: `favicon.ico`, `favicon.png`, `brand/favicon-32/48.png`,
    `brand/apple-touch-icon.png`, `apple-touch-icon.png`, `brand/flo-icon-colour.png`.

Where it now appears:
  - Favicon + apple-touch-icon: added to every page `<head>` (there was none before).
  - Navigation logo (all pages) and the documentation page-header mark: swapped
    from the Spendflo wordmark to the Flo icon. These are React-rendered, so the
    swap runs in `dw-init.js` after hydration and re-applies if React reverts it
    or on client-side navigation (self-correcting, keyed on the current `src`).
  - Design-workflow redesigned header shows the colour Flo icon.
  - Loading state: the page-transition loader carries no brand mark, so nothing
    to change there.

Deliberately preserved (Spendflo "explicitly required"):
  - `/foundations/logo` and `/foundations/brand-assets` keep their *documented*
    Spendflo wordmark artwork in the page body. Only the surrounding chrome
    (nav + header mark) uses the Flo icon on those pages. The original
    `brand/spendflo-*.svg` files are untouched so that documentation stays valid.

Sizing/alignment: nav mark 28px, doc-header mark 40px, both left-aligned to the
existing grid — matching the spacing the Spendflo mark previously used.

## 3b. Brand refinement (follow-up)
Revised the brand architecture per direction:
  - **Navigation** now shows the **Spendflo logo** (wordmark lockup) again — it is
    the primary company identity, so `brandSwap()` no longer touches the nav.
  - **Documentation page headers** keep the **Flo icon** (the DLS/product mark).
  - **Logo usage page** now documents the standalone **Spendflo icon** (the mark
    alone, cropped from the lockup): two cards — colour (light) and white (dark) —
    injected into the first logo grid, matching the native card style, with SVG/PNG.
  - New assets: `brand/spendflo-icon-colour.svg/.png`, `brand/spendflo-icon-white.svg/.png`.
  - Favicon/apple-touch still use the Flo icon; say the word to switch these to the
    Spendflo icon if you'd prefer the company mark in the browser tab.

## 3c. Logo usage page — additions (follow-up)
All injected on the /foundations/logo route by dw-init.js (after hydration, so
no React mismatch), styled via prefixed classes appended to the stylesheet:
  - **Removed** the "Flo icon · white gradient" variant entirely — its download
    card, its Download-list row, and any preview usage (repointed to plain white).
  - **Logo misuse** section (upgrades the old text list in #donts): a 6-card grid
    — don't stretch/distort, rotate, recolour, add shadows, ghost/fade, or sit on a
    low-contrast ground — each showing the Spendflo lockup with the mistake applied
    and a red ✗ badge + mono caption. Matches the supplied reference.
  - **Co-branding & partner lockups** section (new #partners block): intro + two
    approved lockups (Spendflo × Acumatica on light; both marks white on dark, each
    with a green ✓) and four "don't" cards (partner outweighs the mark, marks merged
    with no divider, partner recoloured in Spendflo pink, low-contrast ground).
    The Acumatica mark is a typographic stand-in (green "A" tile + wordmark), not an
    official asset — drop in the real Acumatica SVG to replace it if you have it.

## 3d. Logo page follow-ups
  - Low-contrast "ground" demos (misuse card + partner "don't pair" card) now use a
    Spendflo maroon gradient (#1c000f → #5e0f38) instead of the reference's orange.
  - Real Acumatica logo added (brand/acumatica-colour.svg, brand/acumatica-white.svg)
    and used in the partner lockups: colour on light, white on dark, and a pink
    silhouette (CSS mask) for the "don't recolour the partner" example.
  - Fixed the cropped "How to use this" nav item: as a direct flex child of the
    scrollable nav column its `overflow:hidden` zeroed its flex min-height, so it was
    shrunk and clipped. `.navpanel.zdark > *{ flex:0 0 auto }` restores full height.

## 3e. Logo usage — interactive logo showcase (hero)
Replaced the static hero preview with an animated showcase (injected on the
/foundations/logo route by dw-init.js; styles under .ls-* / .lg-* in the sheet):
  - Auto-cycles brand-approved grounds every ~4.2s: white, off-white, light gray,
    neutral gray, light beige, charcoal, brand maroon, deep purple, Spendflo gradient.
  - Crossfades between grounds (two layers, ~700ms) with a subtle background scale;
    the LOGO itself never scales/rotates/distorts.
  - Auto-switches the logo variant (black on light, white on dark/gradient) and shows
    a soft shadow only on light grounds. Logo stays centered with a dashed clear-space
    box, X markers, and a "CLEAR SPACE = X" measure.
  - Gentle float on the card; pauses on hover; soft magenta hover glow. Swatches are
    clickable to jump to a specific ground. Respects prefers-reduced-motion (static).
  - Below it: five guideline cards — Clear space, Minimum size, Approved backgrounds,
    Incorrect usage (→ #donts), Download assets (→ #downloads) — in DLS card styling.

## 4. Cache-busting (important) + showcase refinements
Why earlier changes may not have appeared: Next.js serves /_next/static/** with a
permanent "immutable" cache header. Custom rules had been appended to that hashed
stylesheet, so a returning browser kept serving the old cached copy and never picked
up the edits. Fixed structurally:
  - All custom CSS now lives in a fresh, non-immutable file: /dls-custom.css.
  - dw-init.js injects <link href="/dls-custom.css?v=8"> at boot, and every page's
    <script src="/dw-init.js?v=8"> is version-queried. New URLs bypass the stale cache.
  - The hashed stylesheet was trimmed back (custom appends removed); the nav-fix is
    re-applied additively inside dls-custom.css so it survives a stale hashed sheet.

Logo showcase refinements:
  - Grounds reduced to three: white, charcoal black, brand maroon.
  - Auto-cycles every 1s (fast crossfade ~0.4s, logo swap ~0.18s).
  - X markers moved inside the dashed clear-space box (top 52px in from each edge).
  - Added a green "correct placement" tick badge (top-right) alongside the clear-space
    box and CLEAR SPACE = X measure.

NOTE for hosting: serve non-hashed root files (/dw-init.js, /dls-custom.css, *.html)
with normal revalidation (not immutable). If a CDN still serves them stale, bump the
"?v=8" query to a higher number to force a fresh fetch.

## 5. Consistent phero headers + Spendflo icon everywhere
Getting Started (introduction, design-workflow, developer-workflow, contribution),
Design Tokens (colors, space-layout, elevation-motion) and the outlier
systems/whitepaper used the older single-column "doc-hd" header. They now use the
same "phero" header as Foundations/Systems, via a converter in dw-init.js
(convertDocHd) that runs after hydration on any page still carrying a .doc-hd:
  - Reads the number, section tag, title and lede; rebuilds them as the phero layout
    (phero-mark, mono "Section · NN" eyebrow, display h1, .desc lede, phero-chips,
    and a "What's inside" pill list generated from the page's real sections).
  - Right column gets a branded "cover" stage (framed card, faint section-number
    watermark, Spendflo icon, section tag) so the two-column hierarchy matches.
  - The existing meta-row + doc-rule already follow, so spacing/treatment is identical
    to the native phero pages.
  - design-workflow: its bento now renders below this shared phero header (the bento's
    own header/ghost are stripped at mount), so it's consistent with the rest.

Spendflo icon in every header: brandSwap now sets every img.phero-mark to
/brand/spendflo-icon-colour.svg (all sections, including the pages that already used
phero). Favicon/apple-touch regenerated from the Spendflo icon, and the SVG favicon
<link> repointed to /brand/spendflo-icon-colour.svg on all pages.

Cache: bumped to ?v=9 (dw-init.js + dls-custom.css) so returning browsers refetch.

Note: /systems/case-study and /systems/whitepaper log a pre-existing "Cannot set
properties of null" error from their own compiled scripts — present with our code
fully removed, unrelated to these header changes.

## 6. Removed nav item tag labels
The small mono kicker on each navigation row (.np-row .tg — e.g. "design", "dev",
"govern", "PPT", "web") is now hidden app-wide via dls-custom.css. Cache bumped to v10.

## 7. Removed items from the sidebar nav
Hidden app-wide via dls-custom.css (scoped to .np-row so only the sidebar is affected;
related-page and prev/next links elsewhere are untouched): Design workflow, Developer
workflow, Contribution & FAQs, Deck, Website DLS, and Agent avatars. The pages still
exist and work by direct URL. Cache bumped to v11.

## 8. Home index cleanup + removed theme toggle
  - The six removed pages are now also hidden from the home ("How to use this") index
    list (.index-row[href*=...]), matching their removal from the sidebar nav.
  - Removed the moon / theme-toggle button from the nav top
    (.np-kbd[aria-label="Toggle theme"]). The ⌘K search button is kept.
  Cache bumped to v12.

## 9. Design tokens / Foundations nav restructure
  - Removed "Colour tokens" and "Elevation & motion" from the sidebar (and the home
    index) via dls-custom.css.
  - restructureNav() in dw-init.js (runs after hydration, re-applied by the observer):
      * moves "Spacing & layout" (/tokens/space-layout) into the Foundations group,
      * moves "Brand assets" above "Logo usage" within Foundations,
      * hides the now-empty "Design tokens" group label.
  Cache bumped to v13.

## 10. Spendflo icon variants in logos & marks; Flo white-gradient removed
  - Installed official Spendflo icon artwork (brand/spendflo-icon-colour.png,
    -white.png, -white-gradient.png) and generated a matching white-gradient SVG.
  - The Logo usage "logos and marks" grid now documents three Spendflo icon variants:
    colour (light), white (dark), white gradient (maroon) — each with SVG + PNG.
  - Confirmed the "Flo icon · white gradient" variant stays removed. Fixed a selector
    bug where the Flo-removal rule ([*="flo-icon-white-gradient"]) also matched the new
    "spendflo-icon-white-gradient" as a substring and deleted it; scoped it to
    "/flo-icon-white-gradient". Cache bumped to v15.

## 11. Removed Brand assets app-wide
Hidden every link to /foundations/brand-assets via dls-custom.css
(a[href*="/foundations/brand-assets"]) — sidebar nav, the home "How to use this"
index, related-page chips, and prev/next links. Removed the obsolete brand-above-logo
reorder from restructureNav. The page still exists by direct URL. Cache bumped to v16.

## 12. Email Signature Builder (/systems/email-signature)
New file /sig-builder.js (loaded by dw-init.js only on that route; self-mounts after
hydration, re-mounts on client nav). Two-column DLS UI: form controls left, sticky live
preview right.
  - 7 templates: Standard Corporate, Community CTA, Marketing Banner, Minimal,
    Executive, Sales, Events & Campaign.
  - Editable fields: name, title, department, company, email, phone, website, profile
    image URL, LinkedIn, X, YouTube, Slack, GitHub, calendar, CTA (preset text + URL),
    promotional banner (library / paste URL / upload).
  - Live preview with Desktop/Mobile and Light/Dark toggles; empty fields auto-hidden;
    email validated; phone auto-formatted.
  - Output is bulletproof: table-based, inline-CSS, absolute asset URLs (uses
    location.origin), email-safe raster logos/icons. Exports: Copy signature (rich —
    ClipboardItem text/html with execCommand fallback), Copy HTML, Copy text,
    Download .html, Reset.
  - Brand-Team admin panel (in-page): brand colours, approved templates, social icon
    set, CTA style (solid/outline), banner library (add/remove), default disclaimer.
    Config + last signature persist in localStorage.
  - New assets: email-safe PNG logos (brand/spendflo-full-colour-black/white.png),
    monochrome icon set (/icons/social/*.png), default banners (brand/banner-*.png).
Cache bumped to v17.

## 13. Signature redesign (reference match) + full-view mode
  - New signature layout matching the requested reference: branded square tile
    (maroon gradient + Spendflo icon, brand/spendflo-avatar.png) or the user's profile
    photo, a hairline divider, greeting ("Cheers!"), "Name | Role", "Spendflo | tagline"
    (Spendflo in brand magenta), contact rows, black rounded-square social badges, and a
    pink pill CTA; optional full-width banner below.
  - New fields: greeting, company tagline, WhatsApp. New black badge icon set
    (/icons/social/black/*.png incl. whatsapp).
  - Full-view mode: an "⤢ Full view" button opens the signature in a large modal
    (light/dark toggle + Copy inside, Esc/backdrop to close) so the whole signature is
    always visible regardless of column width. Inline preview no longer clips (scrolls).
Cache bumped to v19.

## 14. Full view opens in a new window
The signature "↗ Open full view" button now opens a dedicated full-screen preview in a
NEW browser window (like a builder's open-full-screen): a standalone page with the
Spendflo header, Desktop/Mobile + Light/Dark toggles, and Copy signature / Download
buttons, showing the signature at full size. Assets resolve via same-origin absolute
URLs. If pop-ups are blocked it falls back to the in-page modal. Cache bumped to v20.

## 15. Full-screen Signature Builder app (/signature-builder.html)
Standalone full-screen builder matching the Newsletter-Builder UX (self-contained
HTML/CSS/JS, hosted at /signature-builder.html):
  - Top header: Spendflo lockup, "Auto saved", Desktop/Mobile, preview dark toggle,
    Copy, and an Export menu (Copy for Gmail/Outlook, Copy HTML, Download .html,
    Download .png, Reset).
  - Left icon rail: Details, Images, Social, Apps, Company, Branding (scroll-to).
  - Middle: big rounded editor cards (Details, Contact, Images w/ upload+URL, Social,
    Apps, Company/legal, Branding) with sparkle "Suggest" helpers (curated, client-side).
  - Right: live preview artboard (email-client chrome) + a toolbar (accent colour,
    font, size, Details label icon/text, Socials theme/colour) + numbered layout picker
    1–8 with an AI-shuffle, and a Desktop/Mobile + light/dark artboard.
  - 8 signature layouts, all bulletproof table/inline-CSS with absolute asset URLs.
  - Autosave to localStorage, Undo/Redo (Cmd/Ctrl+Z / Shift+Z), responsive.
  - The in-page tool's "Open full-screen builder" button now launches this app.
Note: it's a static single-file app (no backend), so the sparkle "Suggest" buttons use
built-in curated suggestions rather than a live AI service, and PNG export is
best-effort (works when assets are same-origin). Cache bumped to v21.

## 16. Email-signature page: compact launcher (replaces long inline builder)
The long inline form/preview/admin on /systems/email-signature is replaced by a short,
premium launcher card: intro copy + feature chips + a sample signature preview (inside a
mini mail-window), a primary "Open the builder ↗" button (opens /signature-builder.html)
and a "Copy a sample" button. The full editing experience now lives entirely in the
full-screen app. Cache bumped to v22.

## 17. Email-signature page now embeds the full builder inline
Replaced the launcher with the full builder embedded directly on /systems/email-signature
via an iframe of /signature-builder.html (allow clipboard). The page header/meta/rule and
related links are hidden so the builder fills the space (height ~calc(100vh-120px)).
Cache bumped to v23.

## 18. Restore header + Rules around the embedded builder
The embedded builder now lives inside the page's existing #builder section (keeping its
"Build your signature" heading); the phero page header and the #rules section are left
visible. So the page reads: header → Builder (embedded full app) → Rules. Embed height
tuned to min(840px, calc(100vh-90px)). Cache bumped to v24.

## 19. Rename Emailer -> Newsletter; harden signature page header/embed
  - relabelEmailer() in dw-init.js renames "Emailer" to "Newsletter" in the sidebar nav,
    the home index, related-page chips, prev/next links, and the /systems/emailer page H1.
  - Email-signature page: added a header bar above the embedded builder with an "Open in a
    new tab ↗" fallback link, and forced #builder visible (opacity:1) so the embed always
    shows alongside the page header and Rules section.
Cache bumped to v25.

## 20. Signature Builder updates (/signature-builder.html)
  1. CTA is now fully editable: custom text, link, style (solid/outline) and colour, plus on/off.
  2. Layout 1 (Classic Left) spacing evened out (middle-aligned, consistent padding + accent rule).
  3. Layout formerly #6 (Executive) no longer shows the full Spendflo logo.
  4. Removed Options 2 (Classic Right) and 8 (Card); layouts renumbered to 1–6.
  5. Removed the "Surprise Me" (AI shuffle) control.
  6. Images section redesigned: one Company logo upload + one Event image (banner) upload,
     cleaner drop-zone UI with preview/remove and URL paste. Profile photo field removed;
     Event image renders as a full-width banner under the signature. Embed cache-busted (?v=26).

## 21. Signature tweaks + Case Study fix + Newsletter (partial)
Signature Builder: Layout 1 logo top-aligned with a thin hairline divider (was a bold 2px
accent rule); removed Layout 6 (Split) -> 5 layouts; confirmed no full Spendflo logo in any
layout. (?v=27)
Case Study Builder: fixed the load crash — render() called $("#clientIn").value on a null
element, which threw and blocked editing; guarded it (and its listener). The builder now
loads clean and is editable.
Newsletter Builder: removed the Product Screen block (palette + templates) and removed the
divider from the Header Lockup (preview + email export).
Still to do on Newsletter: remove inline Insert-Block +, collapse emptied text, custom CTA
colour, remove one of two CTAs, H1–H6 text blocks, Testimonial block.

## 22. Newsletter Builder — full update (/tools/newsletter-builder.html)
  1. Removed the inline "Insert Block" + control (blocks still added via the left palette
     click/drag). 2. Added an editable Text block with H1–H6 + paragraph (variant picks the
     level; preview + email renders). 3. Testimonial block present (the "Testimonial" block).
  4. Empty contentEditable lines now collapse (no leftover gap) and expand on focus.
  5. CTA colour is fully customisable per block (inspector colour picker; applied in preview
     + email export for hero/cta/twoup/button). 6. Second CTA can be removed per block via a
     Two/One toggle (hero + CTA banner). Tool iframes cache-busted (?v=2); site ?v=28.
Also (prev turn): removed Product Screen block and the Header Lockup divider; fixed the
Case Study builder load crash so it's editable.
