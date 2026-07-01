# PLACEHOLDERS — what's left to fill in

---

## ✅ Wired up

- Discord invite
- Hidden game link (`crabcage#crabcage`)
- TikTok / Instagram / X
- Contact form → Formspree (`xeebrqqe`) with mailto fallback to `2x2slattyy@gmail.com`
- Full 10-track tracklist
- Shop: 3 Redbubble items (photo print, throw pillow, canvas print)
- Favicon, OG share image, 404 page

## ❌ Still placeholder

### 1. PRESAVE LINK
- **File:** `index.html`
- **Search for:** `id="presave-link"`
- Replace `href="#"` with your feature.fm / hyperfollow / distrokid URL.

### 2. Spotify / Apple Music / SoundCloud
- **File:** `index.html`
- **Search for:** `data-platform="spotify"`, `"apple"`, `"soundcloud"`
- Replace each `href="#"` with the artist page URL.

### 3. Moving background (when ready)
- Save as `docs/images/backgroundcoverhome.gif`
- Open `docs/css/style.css`, find `backgroundcoverhome.jpg`, change `.jpg` → `.gif`
- **Keep under ~2 MB** or mobile users bounce.

### 4. Optional: track durations / descriptions
- `<span class="track__time">` for durations, `<p class="track__note">` for descriptions.
- Empty by default (CSS hides them). Fill in only if you want them shown.

---

## Self-check

Open the site → DevTools console. Should see:

- Yellow warning listing any remaining `#` placeholders, OR
- Green **`Ready to ship.`** if you've filled everything in.
