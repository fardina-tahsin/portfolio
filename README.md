# Fardina Tahsin — CV Website

A clean, print-faithful personal CV website built with **React + Vite + Tailwind CSS**.  
Matches the original PDF layout: serif name, purple section headings, hyphen-list bullets.

---

## Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Run locally
```bash
npm run dev
```
Open http://localhost:5173 in your browser.

---

## Project Structure

```
fardina-cv/
├── src/
│   ├── components/
│   │   ├── Header.jsx        ← Name + contact links
│   │   ├── Section.jsx       ← Purple heading + divider wrapper
│   │   ├── Education.jsx     ← Education block
│   │   ├── Projects.jsx      ← Projects with GitHub links
│   │   ├── Activities.jsx    ← Extra-curricular activities
│   │   ├── Skills.jsx        ← Skills table
│   │   └── PrintButton.jsx   ← Floating print/PDF button
│   ├── data/
│   │   └── resume.js         ← ⭐ ALL your CV data lives here
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

---

## Updating Your CV

**Edit only one file: `src/data/resume.js`**

- Change your name, email, phone, LinkedIn/GitHub URLs
- Add/remove projects, activities, skills
- Everything updates automatically

---

## Deploy to Vercel (Free, Instant Shareable Link)

### Option A — Via GitHub (recommended)

1. Push this project to a GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "first commit"
   git remote add origin https://github.com/YOUR_USERNAME/fardina-cv.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) → Sign in with GitHub

3. Click **"Add New Project"** → Import your `fardina-cv` repo

4. Vercel auto-detects Vite. Just click **Deploy**.

5. You get a free link like: `fardina-cv.vercel.app` ✅

### Option B — Netlify Drop (no account needed)

1. Build the project:
   ```bash
   npm run build
   ```
2. Go to [netlify.com/drop](https://app.netlify.com/drop)
3. Drag the `dist/` folder onto the page
4. Get a shareable link instantly ✅

---

## Save as PDF

Click the **"Print / Save PDF"** button in the bottom-right corner.  
In the print dialog, choose **"Save as PDF"** and set margins to **None** or **Minimum**.

---

## Custom Domain (Optional)

On Vercel, go to **Settings → Domains** and add your own domain  
(e.g., `fardinatahsin.com`) — costs ~$10/year from Namecheap or Google Domains.

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI components |
| Vite | Build tool & dev server |
| Tailwind CSS | Styling |
| Lucide React | Icons |
| Vercel / Netlify | Free hosting |
