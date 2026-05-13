# Bharath Kesineni — Portfolio

Personal portfolio website showcasing projects, skills, experience, certifications, and resume.

Built with **TanStack Start**, **React 19**, **Vite 7**, **Tailwind CSS v4**, and **shadcn/ui**.

## Tech Stack

- TanStack Start (SSR + file-based routing)
- React 19 + TypeScript
- Vite 7
- Tailwind CSS v4
- shadcn/ui + Radix primitives
- Lucide icons

## Getting Started

### Prerequisites

- Node.js 18+ (or Bun)
- npm / pnpm / bun

### Install

```bash
npm install
```

### Run the dev server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── portfolio/      # Hero, About, Skills, Experience, Projects, etc.
│   └── ui/             # shadcn/ui components
├── data/
│   └── portfolio.ts    # Portfolio content (edit here to update site)
├── routes/             # File-based routes (TanStack Router)
├── styles.css          # Tailwind + design tokens
└── router.tsx
public/
└── resume.pdf          # Downloadable resume
```

## Editing Content

Most site content (about, skills, experience, education, projects, certifications) lives in `src/data/portfolio.ts`. Update that file and the site reflects it.

To replace the resume, swap the PDF files in `public/`:
- `public/resume.pdf`
- `public/Bharath_Kesineni_Resume.pdf`

## Deployment

The project is configured for Cloudflare (see `wrangler.jsonc`) but can be deployed to any platform that supports TanStack Start / Node SSR (Vercel, Netlify, etc.).

## License

© Bharath Kesineni. All rights reserved.