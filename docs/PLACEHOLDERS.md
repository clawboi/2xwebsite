# AOCD — status

**Everything wired. Site is live-ready.**

## When you have the Linktree URL

Open `index.html`, find:

```html
<!-- Primary CTA — currently Spotify. When linktree is ready,
     swap the href to your linktree URL and change "LISTEN NOW"
     to "LINKTREE" if you want. -->
```

Change `href="https://open.spotify.com/artist/..."` → your linktree URL. Optionally change `LISTEN NOW` → `LINKTREE`. Done.

## Optional future updates

- **Moving background** — save as `docs/images/backgroundcoverhome.gif`, then `.jpg` → `.gif` on the `background-image` line in `docs/css/style.css`. Under ~2 MB.
- **Track durations / descriptions** — fill `<span class="track__time">` and `<p class="track__note">`. Empty by default (CSS hides them).

## Console self-check

Open DevTools console — should show:

```
[2X/AOCD] Ready to ship.
```

in green.
