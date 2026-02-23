# HyperFocus — Creative Agency Website

On-demand creative team for content & branding. Based in Atlanta, GA.

## Structure

```
redo-media-website/
├── index.html          # Main single-page site
├── css/
│   └── styles.css      # All styles (black/white/yellow theme, responsive)
├── js/
│   └── main.js         # Animations, carousels, FAQ accordion, scroll effects
├── assets/
│   └── images/         # Place your actual images here
└── README.md
```

## Getting Started

1. Clone or download this repository
2. Open `index.html` in a browser — no build tools needed
3. To deploy, push to GitHub and enable GitHub Pages, or use Netlify/Vercel

## Replacing Placeholder Images

The site uses CSS gradients as placeholders. To add real images:

- **Hero**: Update `.hero-bg` in CSS or add an `<img>` tag
- **Project images**: Replace `.placeholder-project-*` with real screenshots
- **Testimonial photos**: Replace `.placeholder-person-*` with headshots
- **Client logos**: Replace text in ticker with `<img>` tags

## Customization

- **Colors**: Edit CSS variables in `:root` — primary accent is `#fecc30`
- **Fonts**: Playfair Display (headings) + Inter (body) via Google Fonts
- **Content**: All text is in `index.html`
- **Animations**: Controlled in `main.js`

## Tech Stack

- Pure HTML, CSS, JavaScript (no frameworks)
- Google Fonts (Playfair Display + Inter)
- CSS Grid + Flexbox
- Intersection Observer API for scroll animations
- Fully responsive

## License

© 2025 HyperFocus. All Rights Reserved.
