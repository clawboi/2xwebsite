# PLACEHOLDERS — status

**Every link is wired.** Nothing left to swap in HTML.

Optional additions if you want them later:

- **Moving background** — save as `docs/images/backgroundcoverhome.gif`, then change `.jpg` → `.gif` on the `background-image` line in `docs/css/style.css`. Keep under ~2 MB.
- **Track durations / descriptions** — `<span class="track__time">` for durations (e.g. `2:34`), `<p class="track__note">` for a short note. Empty by default (CSS hides empty ones).
- **Live AOCD title art** — swap `docs/images/AOCD.png` with the new version, same filename.

## Self-check

Console should now log:

```
[2X/AOCD] Ready to ship.
```

in green. If you see a yellow warning, something didn't get pushed.
