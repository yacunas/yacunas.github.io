# yacunas.github.io

Personal portfolio of **Ronnel James Yacunas** — a full-stack engineer building
reliable, large-scale systems and AI-powered products.

🌐 **Live:** https://yacunas.github.io

An interactive, space-themed single-page portfolio: an interactive 3D starfield,
a mouse-driven "star-devouring" black hole, and a cursor-reactive name built with
a variable-font text-pressure effect.

## Highlights

- 🌌 **3D starfield** with mouse + scroll parallax (`@react-three/fiber` + `drei`)
- 🕳️ **Sticky black hole** (CSS) that follows the cursor, with an animated accretion disk
- 🔤 **Text-pressure name** — letter width & weight respond to cursor distance (variable font)
- ✨ Scroll-reveal sections, smooth scrolling, and `prefers-reduced-motion` support
- ⚡ Tuned for performance (static export, `content-visibility`, no heavy backdrop blur)

## Tech stack

| Area | Tools |
| --- | --- |
| Framework | Next.js (App Router, static export) · TypeScript |
| Styling | Tailwind CSS · Roboto Flex variable font |
| 3D / motion | three.js · @react-three/fiber · drei · Motion (Framer Motion) · Lenis |
| Icons | lucide-react · react-icons |

## Development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export to ./out
```

## Deployment

Every push to `main` is built and published to GitHub Pages by
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

## License

[MIT](LICENSE)
