# /images/

| filename                    | what it is                                                          |
| --------------------------- | ------------------------------------------------------------------- |
| `backgroundcoverhome.jpg`   | Album cover used as hero background (compressed ~1.1 MB from 11 MB) |
| `AOCD.png`                  | Transparent PNG of the AOCD title — sits over the background        |
| `favicon.png`               | 32×32 browser tab icon (red A from the title)                       |
| `favicon-256.png`           | 256×256 apple-touch / PWA icon                                      |

## Swapping to a GIF later

When you have the live cover GIF ready, save it as `backgroundcoverhome.gif` and update `css/style.css`:

```css
.hero__bg {
  background-image: url('../images/backgroundcoverhome.gif');
}
```

Keep the GIF under ~2 MB or mobile loads will stall.

## Shop product images (optional)

Drop product art in `images/shop/` later and update the HTML per `PLACEHOLDERS.md` § 6.
