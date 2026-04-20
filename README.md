# Bhuvan Teja Kotti — Interactive Resume

A dark, futuristic, fully animated React.js resume app.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start local dev server
npm run dev
```

Then open http://localhost:5173 in your browser.

## 🏗️ Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder. Deploy `dist/` to any static host.

## 🌐 Deploy to GitHub Pages

1. Push repo to GitHub
2. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```
3. Add to `package.json` scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
4. Add to `vite.config.js`:
   ```js
   base: '/your-repo-name/',
   ```
5. Run:
   ```bash
   npm run deploy
   ```

## 🌐 Deploy to Vercel / Netlify

Just drag and drop the `dist/` folder, or connect your GitHub repo — both platforms auto-detect Vite projects.

## 📁 Project Structure

```
src/
  components/
    ParticleBackground.jsx  ← Animated canvas particle network
    Navigation.jsx          ← Sticky nav with active section tracking
    Hero.jsx                ← Typewriter roles + spinning tech ring
    About.jsx               ← Terminal-style profile card
    Experience.jsx          ← Expandable timeline (JPMC + Capgemini)
    Skills.jsx              ← Tabbed skill bars + full tech tag cloud
    Certifications.jsx      ← Cert cards + education + extracurriculars
    Contact.jsx             ← Links + footer
  App.jsx
  main.jsx
  index.css                 ← CSS variables & global styles
```

## ✏️ Customisation Tips

- Update contact info in `Hero.jsx` and `Contact.jsx`
- Add new experience entries in `Experience.jsx` → `experiences` array
- Adjust skill percentages in `Skills.jsx` → `skillCategories`
- Change colour theme in `src/index.css` → `:root` CSS variables

## 🛠️ Tech Stack

- React 18 + Vite 5
- Pure CSS animations (no heavy animation libraries)
- Canvas API for particle background
- CSS custom properties for theming
- Intersection Observer API for scroll animations
- Google Fonts: Orbitron, Rajdhani, Space Mono
