# ⬡ PIXELZONE — HTML5 Games

A professional, fully responsive HTML5 games website featuring **10 hand-crafted browser games**. Zero dependencies. Zero installs. Just open and play.

## 🎮 Games Included

| Game | Category | Controls |
|------|----------|----------|
| 🐍 Snake Classic | Arcade | WASD / Arrow Keys |
| 🟦 Tetris | Puzzle | Arrow Keys + Space |
| 🧱 Breakout | Arcade | Mouse / Touch |
| 🐦 Flappy Bird | Action | Click / Tap / Space |
| 🃏 Memory Match | Puzzle | Click / Touch |
| 🏓 Pong | Arcade | W/S + Arrow Keys (1 or 2 players) |
| 💣 Minesweeper | Puzzle | Click + Right-click |
| 🔢 2048 | Puzzle | Arrow Keys / Swipe |
| 🚀 Asteroids | Action | Arrow Keys + Space |
| ⌨️ Typing Speed | Action | Keyboard |

## 🚀 Deploy to Vercel (Recommended)

### Option A — Vercel Dashboard (easiest)

1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click **"Add New Project"**
4. Import your GitHub repository
5. Framework preset: **Other** (it's static HTML)
6. Click **Deploy** — done! ✅

### Option B — Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project root
cd html5games
vercel

# Follow prompts — select "Other" for framework
# Your site will be live at https://your-project.vercel.app
```

### Option C — GitHub + Vercel Auto-Deploy

1. Push to GitHub:
```bash
git init
git add .
git commit -m "Initial commit — PIXELZONE HTML5 Games"
git remote add origin https://github.com/YOUR_USERNAME/pixelzone.git
git push -u origin main
```

2. Connect repo on Vercel → every `git push` auto-deploys 🎉

## 📁 Project Structure

```
html5games/
├── index.html          # Homepage with game grid
├── vercel.json         # Vercel deployment config
├── css/
│   └── style.css       # All styles
├── js/
│   └── main.js         # Filter + mobile nav
└── games/
    ├── snake.html
    ├── tetris.html
    ├── breakout.html
    ├── flappy.html
    ├── memory.html
    ├── pong.html
    ├── minesweeper.html
    ├── 2048.html
    ├── asteroids.html
    └── typing.html
```

## 🛠 Tech Stack

- Pure **HTML5** + **CSS3** + **Vanilla JavaScript**
- No frameworks, no build steps, no node_modules
- Canvas API for games, CSS Grid/Flexbox for layout
- Google Fonts (Bebas Neue, Space Mono, DM Sans)
- Fully responsive — works on desktop, tablet, and mobile

## ✨ Features

- 🎨 Dark cyberpunk aesthetic with yellow accent
- 📱 Mobile-responsive with touch controls
- 🔍 Category filter (Arcade / Puzzle / Action)
- 🏆 High score tracking (session)
- ⚡ Instant load — no build step required
- 🔒 Security headers via vercel.json

## 📝 License

MIT — free to use, modify, and deploy.
