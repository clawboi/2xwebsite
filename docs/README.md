# 2X — AOCD

Static album landing page for **2X**'s upcoming album **AOCD**, dropping soon.
Single-page site with: presave CTA, tracklist, listen/follow grid, mini shop, contact form, hidden game easter egg.

---

## Stack

- Plain HTML / CSS / vanilla JS — no build step
- Google Fonts (`Major Mono Display`, `Space Mono`)
- Supabase (contact form backend only)

---

## Project structure

```
docs/
├── index.html                ← all sections live here
├── css/
│   └── style.css
├── js/
│   ├── main.js               ← interactions, konami easter egg
│   └── supabase.js           ← contact form
├── images/
│   ├── backgroundcoverhome.PNG   ← cover art
│   ├── AOCD.png                  ← transparent AOCD title
│   └── README.md
├── README.md                 ← you are here
├── PLACEHOLDERS.md           ← every link/value to swap
├── SUPABASE_SETUP.md         ← contact form backend setup
└── .gitignore
```

---

## Deploy

The folder is named `docs/` on purpose — **GitHub Pages can serve directly from a `/docs` folder**, so you don't have to move anything.

### GitHub Pages from `/docs`

1. Push this `docs/` folder to your repo (typically at the root).
2. Repo → **Settings** → **Pages**.
3. Source: **Deploy from a branch**.
4. Branch: `main` (or `master`) — **/docs**.
5. Save. Live in ~30 seconds at `https://<your-username>.github.io/<repo-name>/`.

### Other hosts

- **Netlify / Vercel / Cloudflare Pages** — set publish/output directory to `docs/`.
- **Anywhere static** — upload the contents of `docs/` to the web root.

---

## Quick start (before push)

1. Open `PLACEHOLDERS.md` and swap every real link/value.
2. Open `SUPABASE_SETUP.md` if you want the contact form live (~5 min).
3. Open `index.html` locally to spot-check.
4. Push.

---

## Design notes

- Palette is locked: `#BD0906` red, `#00FF33` green, `#000000` black
- Green is used **sparingly** — status / accents only. Red carries primary actions.
- Zero border-radius anywhere — hard edges on purpose
- AOCD title gets a treatment in CSS (white inner edge + crimson outer glow + slight drop shadow) so the black hand-drawn ink reads against the red cover without losing its raw look
- Marquee strip at top inverted to black-on-red-border so it doesn't blend with the red cover behind
- PRESAVE button has a thick black border + 6px black offset shadow — gives hard separation from the red cover behind it
- Hero overlay is light in the center, heavier at edges (vignette) — lets the cover breathe while keeping CTAs readable
- Subtle 6-second "glitch" micro-shift on the AOCD title — barely visible, kill it in `css/style.css` (`@keyframes micro-shift`) if it bothers you

---

## Easter egg

The hidden game link is reachable two ways:

1. A small `▮` glyph at the bottom-right of the hero (22% opacity, brightens green on hover)
2. **Konami code** anywhere: `↑ ↑ ↓ ↓ ← → ← → B A`

Both pull from the same `<a id="hidden-game">` `href`, so set the game URL once in `index.html`.

---

## Self-check

After loading the page, open DevTools console. If you see:

```
[2X/AOCD] These links are still placeholders: PRESAVE, DISCORD, GAME (hidden)
```

…those `href`s are still `#`. The site won't break, but those CTAs go nowhere.

---

## Timeline

Locked by **July 1**.
