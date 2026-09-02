# Honeycomb Cake Studio — Website

A single-page marketing site for a custom cake studio, featuring a hero section, menu categories, brand story, ordering process, and customer reviews.

## Folder Structure

```
honeycomb-cake-studio/
├── index.html      # Page markup
├── styles.css      # All styling
└── README.md       # This file
```

## How to Run

No build tools or server required.

1. Keep `index.html` and `styles.css` in the **same folder**.
2. Double-click `index.html` (or right-click → Open With → your browser).
3. The site will load exactly as designed, pulling in:
   - Google Fonts (**Bodoni Moda** + **Work Sans**) via CDN
   - Images hosted on Pexels via CDN

Both require an internet connection to load; the layout itself works fully offline once fonts/images are cached.

### Optional: Local dev server

If you prefer serving it locally instead of opening the file directly:

```bash
# Python 3
python -m http.server 8000

# then visit
http://localhost:8000
```

## Customization Notes

- **Colors, fonts, spacing:** all defined as CSS custom properties at the top of `styles.css` under `:root` (e.g. `--cream`, `--cocoa`, `--honey`, `--berry`). Change these to re-theme the entire site.
- **Content:** all text, prices, and links live directly in `index.html`.
- **Images:** currently pulled from Pexels URLs in `index.html` (`<img src="...">` and one CSS `background-image` in `styles.css` for the hero). Replace these with your own image paths (e.g. `images/hero.jpg`) if you want local assets instead of hotlinking.
- **Responsive breakpoints:** `960px` and `640px`, handled via `@media` queries near the bottom of `styles.css`.

## Sections

| Section | Anchor |
|---|---|
| Hero | `#top` |
| Menu | `#menu` |
| Our Story | `#story` |
| Custom Order Process | `#process` |
| Reviews | `#reviews` |

## Browser Support

Uses modern CSS (`clip-path`, `clamp()`, CSS Grid, `backdrop-filter`). Works in current versions of Chrome, Firefox, Safari, and Edge.
