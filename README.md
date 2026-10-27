# Yoga Priowibowo · Portfolio

React + TypeScript + Vite. No other runtime dependencies.

    npm install
    npm run dev       # local preview
    npm run build     # outputs dist/ (static, hostable anywhere)

## Where things live
- `src/data/projects.ts` – all portfolio projects (translated drafts) and their image filenames
- `src/data/resume.ts`, `src/data/site.ts` – CV, About Me, contact details, CV download URL
- `src/pages/`, `src/components/` – UI

## Replacing placeholder images
Save each image into `public/images/` using the exact name shown on its placeholder, with a
`.webp`, `.jpg` or `.png` extension (e.g. `image_kuliner_nusantara_1.webp`). Placeholders disappear automatically.
Use ~1600px-wide, compressed images; they are lazy-loaded below the fold.
