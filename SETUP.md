# 🛠 Engineering Portfolio — Setup Guide

## What's In The Box

```
portfolio/
├── index.html                        ← SEO meta tags (edit title/description)
├── package.json                      ← Dependencies
├── vite.config.js                    ← Vite config
└── src/
    ├── main.jsx                      ← Entry point
    ├── App.jsx                       ← Root component (assembles all sections)
    ├── styles/
    │   └── global.css                ← ALL styles: variables, layouts, animations
    ├── data/
    │   └── index.js                  ← ⭐ YOUR CONTENT LIVES HERE (skills, projects, timeline)
    ├── hooks/
    │   └── index.js                  ← Reusable hooks: mouse parallax, scroll reveal, skill panel
    └── components/
        ├── UI/index.jsx              ← Cursor, star background, navigation
        ├── Hero/
        │   ├── index.jsx             ← Hero section + floating skill panel
        │   └── HeroCanvas.jsx        ← Three.js 3D keyboard + screen panel
        ├── About/index.jsx           ← Bio + skill chips + progress bars
        ├── Education/index.jsx       ← Degree card + coursework
        ├── Projects/index.jsx        ← Project grid + modal
        ├── Experience/index.jsx      ← Vertical timeline
        └── Contact/index.jsx         ← Form + socials + footer
```

---

## ⚡ Quick Start (step by step)

### Step 1 — Make sure Node is installed
Open iTerm2 and run:
```bash
node -v
```
If you see `v18.x.x` or higher, you're good. If not → go to **nodejs.org** → download LTS → install it.

### Step 2 — Move this folder to your Desktop and open terminal there
```bash
cd ~/Desktop/portfolio
```

### Step 3 — Install dependencies
```bash
npm install
```
This takes ~30 seconds. You'll see a lot of output — normal.

### Step 4 — Run it
```bash
npm run dev
```
Open `http://localhost:5173` in your browser. Done!

### Step 5 — Build for production (when ready to deploy)
```bash
npm run build
```
This creates a `dist/` folder you can upload to Vercel, Netlify, or GitHub Pages.

---

## ✏️ Customization — What To Change

### 1. Your Info (`src/data/index.js`)
This is where ALL your real content lives. Replace every `[PLACEHOLDER]`:
- Project titles, descriptions, tools, GitHub links, outcomes
- Timeline entries (roles, companies, dates, bullet points)
- Skills (you can adjust the `level` percentages)

### 2. Personal Info (scattered, marked with `// PLACEHOLDER` comments)
Search for `// PLACEHOLDER` in the codebase — every one needs your real content:
- `YOUR NAME` in `index.html` and `App.jsx`
- Email, location, social URLs in `Contact/index.jsx`
- University name, degree year, graduation date in `Education/index.jsx`
- Resume: put your `resume.pdf` file in `/public/` folder

### 3. Logos
- **Program icon**: In `Education/index.jsx`, replace the `⚙️` emoji div with `<img src="/program-logo.png" alt="Program logo" />`
- **School logo**: Same file, replace the `🎓` emoji div
- Put your images in `/public/`

### 4. Style tweaks (`src/styles/global.css`)
All colors are CSS variables at the top of the file:
```css
:root {
  --cyan: #4dc9ff;      /* Main accent — change this to your preferred color */
  --blue: #2563eb;      /* Secondary accent */
  --bg:   #03070f;      /* Page background */
}
```

---

## 🚀 Deploy in 2 Minutes (Vercel — free)

1. Push your code to a GitHub repo
2. Go to **vercel.com** → New Project → Import your repo
3. Click Deploy — that's it. Vercel auto-detects Vite.

---

## 📱 Mobile
- Custom cursor is hidden on touch devices (handled via CSS `@media (hover: none)`)
- 3D canvas has reduced pixel ratio on mobile (`dpr={[1, 1.5]}`)
- Hamburger menu replaces nav on screens < 768px
- All grids collapse to single column on small screens

---

## 🐛 If Something Breaks

**"Cannot find module three"** → Run `npm install` again

**White screen / nothing loads** → Open browser devtools (F12) → Console tab → read the error

**3D keyboard not showing** → Make sure you have a modern browser (Chrome/Firefox/Safari latest)

**Port already in use** → `npm run dev -- --port 3001` to use a different port
