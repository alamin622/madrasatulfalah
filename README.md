# মাদরাসাতুল ফালাহ ঢাকা — Website (React + Vite + Tailwind + Framer Motion)

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build -> dist/
npm run preview
```
Requires Node.js 18+.

## Structure
```
public/images/hero.jpg, hero-mobile.jpg   Hero banner (slow zoom in/out animation)
public/images/logo.png                    Logo (navbar, about, footer, favicon)
public/images/gallery/01..06.jpg          Photo gallery
public/videos/video-01..04.mp4            Video gallery (+ public/images/posters/*.jpg thumbnails)
src/config/site.js                        ALL contact info, WhatsApp number, map links
src/data/content.js                       Departments, classes, "why us" points, photos, videos
src/components/*                          Sections (Navbar, Hero, Portfolio, AdmissionForm, ...)
```

## Change the hero image
Replace `public/images/hero.jpg` (1920×1080) and `hero-mobile.jpg` (~900px wide). Zoom speed: `HeroSection.jsx` → `duration: 24`, zoom amount: `scale: [1, 1.14, 1]`.

## Add / replace photos
1. Put the image in `public/images/gallery/` (about 1400px wide, JPG).
2. Add or edit a line in `PHOTOS` in `src/data/content.js` (`src`, `alt`, `caption`).

## Add / replace videos
1. Put the MP4 (H.264, 720p or lower recommended) in `public/videos/` and a thumbnail JPG in `public/images/posters/`.
2. Add or edit a line in `VIDEOS` in `src/data/content.js`. Use `orientation: 'portrait'` for vertical videos.
Videos never autoplay on the page; they play only inside the modal after a click and stop when it closes or the tab changes.

## Change phone / WhatsApp / address / map
Edit `src/config/site.js`:
- `whatsappNumber` — digits only, with country code (e.g. `8801731537919`). This drives the form, floating button and contact links.
- `phones`, `callNumber`, `facebook`, `branches`.
- `map.embedUrl` — for the exact pin: Google Maps → Share → **Embed a map** → copy the `src="..."` URL.
- `map.shortLink` — used by the "Get Directions" button.

## Deploy
**Vercel:** push to GitHub → vercel.com → Import → Framework "Vite" → Deploy.
**Netlify:** push to GitHub → Add new site → Import (build `npm run build`, publish `dist`; `netlify.toml` is included). Or drag the `dist/` folder after `npm run build`.
"# madrasatulfalah" 
