# /images/

| filename                    | what it is                                                          |
| --------------------------- | ------------------------------------------------------------------- |
| `backgroundcoverhome.jpg`   | Album cover used as hero background                                 |
| `AOCD.png`                  | Transparent PNG of the AOCD title                                   |
| `og-image.jpg`              | 1200×630 preview shown when the link is shared on social            |
| `favicon.png`               | 32×32 browser tab icon                                              |
| `favicon-256.png`           | 256×256 apple-touch icon                                            |
| `THROWPILLOW1.PNG`          | Shop tile — throw pillow product image (drop in from Redbubble)     |
| `CANVASPRINT1.PNG`          | Shop tile — canvas print product image (drop in from Redbubble)     |

## Product images

Both shop tiles pull from these two files. Aspect ratio is cropped to 1:1 via CSS `object-fit: cover`, so any product image dimensions work — the tile will crop to square automatically.

If you swap them out later, keep the same filenames and the site picks up the new versions automatically.

## Moving background (when ready)

Save as `backgroundcoverhome.gif` and change `.jpg` → `.gif` on the `background-image` line in `css/style.css`. Under ~2 MB.
