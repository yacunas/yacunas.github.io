# yacunas.github.io

Personal portfolio of **Ronnel James Yacunas** — a full-stack engineer building
reliable, large-scale systems and AI-powered products.

🌐 **Live:** https://yacunas.github.io

## Tech stack

- **Next.js** (App Router, static export) + **TypeScript**
- **Tailwind CSS** for styling
- **Three.js** via **@react-three/fiber** + **drei** — interactive 3D starfield
- **Motion** (Framer Motion) — scroll reveals & micro-interactions
- **Lenis** — smooth scrolling
- **lucide-react** + **react-icons** — iconography

## Development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export to ./out
```

## Deployment

Pushes to `main` are automatically built and published to GitHub Pages via
the workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

## License

[MIT](LICENSE)
