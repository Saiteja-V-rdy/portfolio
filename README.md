# Sai Teja Reddy Vanga — Portfolio

[![Live](https://img.shields.io/badge/Live-Portfolio-185FA5?style=flat-square&logo=vercel&logoColor=white)](https://portfolio-saiteja-v-rdy.vercel.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/saitejareddy-v-37463311b/)
[![Email](https://img.shields.io/badge/Email-Reach%20Out-185FA5?style=flat-square&logo=gmail&logoColor=white)](mailto:saitejareddyvanga24@gmail.com)

> Personal portfolio website — premium minimal design, fully responsive, dark mode, zero frameworks.

---

## Preview

![Portfolio Preview](./preview.png)

---

## About

Personal portfolio for **Sai Teja Reddy Vanga**, Senior Software Engineer with 5+ years of experience building backend-heavy full-stack systems in fintech and healthcare (Morgan Stanley, Elevance Health). Specializes in Java/Spring Boot, Kafka, Kubernetes, GraphQL, and AI/LLM tooling.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | Semantic HTML5 |
| Styling | Vanilla CSS3 (CSS Variables, Grid, Flexbox) |
| Interactivity | Vanilla JavaScript (ES6+) |
| Fonts | Google Fonts — DM Serif Display + DM Sans |
| Hosting | Vercel |
| Version Control | GitHub |

**No frameworks. No dependencies. No build step.** Just HTML, CSS, and JS.

---

## Features

- **Dark / Light mode** — auto-detects system preference, toggle in nav
- **Scroll reveal animations** — IntersectionObserver with staggered delays
- **Sticky navbar** — blur backdrop, shadow on scroll
- **Fully responsive** — mobile-first, hamburger menu on small screens
- **Sections** — Hero, About, Skills, Experience (timeline), Education, Contact
- **Contact form** — client-side with success feedback
- **Permanent photo hosting** — photo served directly from GitHub raw

---

## Project Structure

```
portfolio/
├── index.html        # Main HTML — all sections and structure
├── styles.css        # All styling — variables, layout, components, animations
├── main.js           # All interactivity — dark mode, scroll reveal, nav, form
├── photo.jpg         # Profile photo (served via GitHub raw URL)
├── preview.png       # Repository preview image (optional)
└── README.md         # You are here
```

---

## Sections

| Section | Description |
|---------|-------------|
| **Hero** | Name, title, CTA buttons, profile card with stats |
| **About** | Professional summary, quick-info sidebar |
| **Skills** | 6 categorized cards — Languages, Frameworks, Frontend, Cloud/DevOps, Messaging/DB, AI/LLM |
| **Experience** | Timeline — Morgan Stanley, Elevance Health, Boston Harbor Consulting |
| **Education** | M.S. Computer Science (USM) + B.Tech ECE (Chalapathi) |
| **Contact** | Email, LinkedIn, location cards + contact form |

---

## Running Locally

No build tools needed. Just open in a browser:

```bash
git clone https://github.com/Saiteja-V-rdy/portfolio.git
cd portfolio
open index.html      # macOS
# or
start index.html     # Windows
```

Or use the VS Code **Live Server** extension for hot-reload during editing.

---

## Deployment

Deployed on **Vercel** with automatic redeploy on every push to `main`.

To deploy your own fork:

1. Fork this repo
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import your fork
3. Leave all settings default → **Deploy**

---

## Customization

All design tokens live at the top of `styles.css` as CSS variables:

```css
:root {
  --accent: #185FA5;       /* Primary brand color */
  --accent-light: #E6F1FB; /* Tinted backgrounds */
  --bg: #ffffff;           /* Page background */
  --text: #0a0f1e;         /* Primary text */
  /* ... */
}
```

Change `--accent` to any hex value and the entire color theme updates instantly.

---

## Contact

**Sai Teja Reddy Vanga**
- Email: [saitejareddyvanga24@gmail.com](mailto:saitejareddyvanga24@gmail.com)
- LinkedIn: [saitejareddy-v-37463311b](https://www.linkedin.com/in/saitejareddy-v-37463311b/)
- Location: California, USA

---

*Built with precision. No frameworks harmed.*
