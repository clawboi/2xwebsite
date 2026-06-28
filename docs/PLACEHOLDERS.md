# PLACEHOLDERS — what to swap before launch

Every value below is currently a placeholder. Search for the marker in the file and replace.
All of these are reachable with a single Ctrl+F / Cmd+F per file.

---

## 1. PRESAVE LINK

- **File:** `index.html`
- **Search for:** `id="presave-link"`
- **Replace:** the `href="#"` with your `feature.fm` / `linkfire.com` / `hyperfollow` / `distrokid` presave URL.

```html
<a href="REPLACE_WITH_PRESAVE_URL" id="presave-link" ...>
```

---

## 2. DISCORD LINK

- **File:** `index.html`
- **Search for:** `id="discord-link"`
- **Replace:** the `href="#"` with your Discord invite (e.g. `https://discord.gg/xxxxx`).

```html
<a href="REPLACE_WITH_DISCORD_INVITE" id="discord-link" ...>
```

---

## 3. HIDDEN GAME LINK

- **File:** `index.html`
- **Search for:** `id="hidden-game"`
- **Replace:** the `href="#"` with the game URL (e.g. `https://fameup.io/`).

Reachable via the tiny ▮ glyph bottom-right of the hero, AND via the Konami code (↑↑↓↓←→←→BA).

```html
<a href="REPLACE_WITH_GAME_URL" id="hidden-game" ...>
```

---

## 4. TRACKLIST

- **File:** `index.html`
- **Search for:** `<!-- REPLACE: track 1 -->` through `track 5`
- **For each track, replace:**
  - `TRACK ONE TITLE` → real title
  - `2:34` → real duration
  - `short description...` → 1–2 sentence note

Add more `<li class="track">` blocks if there are more than 5 tracks. The pattern is identical — copy/paste and bump the `01` to `06`, `07`, etc.

---

## 5. SOCIAL / LISTEN LINKS (6 platforms)

- **File:** `index.html`
- **Search for:** `data-platform="spotify"` (and `apple`, `soundcloud`, `tiktok`, `instagram`, `x`)
- **Replace** each `href="#"` with the artist URL.

| platform     | what to paste                                                 |
| ------------ | ------------------------------------------------------------- |
| Spotify      | artist profile URL (e.g. `https://open.spotify.com/artist/…`) |
| Apple Music  | artist profile URL                                            |
| SoundCloud   | profile URL                                                   |
| TikTok       | `https://www.tiktok.com/@2x_handle`                           |
| Instagram    | `https://instagram.com/2x_handle`                             |
| X / Twitter  | `https://x.com/2x_handle`                                     |

Icons are inline SVG — no extra setup needed.

---

## 6. SHOP — 6 Redbubble products

- **File:** `index.html`
- **Search for:** `<!-- REPLACE: shop item 1 -->` through `shop item 6`
- **For each item, replace:**
  - `href="#"` → the Redbubble product URL
  - `AOCD COVER POSTER` → real product name
  - (optional) `data-placeholder="POSTER"` → label that shows while no image is set

To add real product images later, replace the `<div class="shop__art" ...>` with an `<img>`:

```html
<img src="images/shop/your-product.jpg" alt="..." class="shop__art" />
```

You'd then need a small CSS tweak to make `<img>` cover the tile — easy to add when you have art.

---

## 7. SUPABASE — contact form backend

- **File:** `js/supabase.js`
- **Search for:** `YOUR_SUPABASE_PROJECT_URL` and `YOUR_SUPABASE_ANON_KEY`
- **See:** `SUPABASE_SETUP.md` for the full step-by-step (creates the table, sets RLS, etc.)

Also swap `YOUR_EMAIL@EXAMPLE.COM` if you set up email forwarding (optional).

---

## 8. META / SEO (optional but recommended before launch)

- **File:** `index.html`
- **Search for:** `<meta name="description"` and the `og:` tags
- Update with whatever copy you want pulled in when the link is shared on iMessage / Discord / Twitter.

---

## Self-check before push

Open the site in a browser, open DevTools console. If you see:

```
[2X/AOCD] These links are still placeholders: PRESAVE, DISCORD, GAME (hidden)
```

…then those are still `#`. The site won't break, but those CTAs won't work.
