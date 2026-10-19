<div align="center">

# Hamna Asif — Developer Portfolio

**Full-Stack & AI Solutions Developer** · React.js · Node.js · Python · AI Agents & Workflow Automation (n8n)

[![Live Site](https://img.shields.io/badge/Live-hamnaasif5.netlify.app-9b3bff?style=for-the-badge&logo=netlify&logoColor=white)](https://hamnaasif5.netlify.app)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Netlify](https://img.shields.io/badge/Hosted%20on-Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white)

[View Live Site](https://hamnaasif5.netlify.app) · [GitHub](https://github.com/Hamna-Asif05) · [LinkedIn](https://www.linkedin.com/in/hamna-asif5) · [Fiverr](https://www.fiverr.com/hamnaasif738)

</div>

---

## Overview

A fast, responsive, single-page portfolio that showcases my skills, projects and services. It is built with plain **HTML, CSS and JavaScript** (no framework, no build step), so it loads quickly and can be deployed anywhere that serves static files.

The design uses a purple-to-pink gradient theme with a dark / light mode switch, glassmorphism cards and subtle animations.

**Live:** https://hamnaasif5.netlify.app

## Features

| Area | What it does |
| --- | --- |
| **Navigation** | Sticky pill-style navbar with smooth scrolling and a Dark / Light mode toggle |
| **Hero** | Typing animation, profile photo with orbit ring, floating skill badges |
| **Code in Progress** | Animated "typing code" laptop section |
| **About** | Short bio and quick facts (status, education, location) |
| **Skills** | Flip cards grouped into Frontend, Programming, Tools and Technologies |
| **Projects** | 15 project cards with equal-size cover images and tech tags |
| **Contact form** | Name, email, topic dropdown and message, delivered to my inbox through [Formspree](https://formspree.io) |
| **CV on request** | The CV is not publicly downloadable. Visitors submit a short request form instead |
| **Quick contact** | Floating glowing WhatsApp and Email buttons on the side |
| **Social links** | GitHub, LinkedIn, Fiverr and Upwork |
| **Scroll reveal** | Sections fade in as you scroll |
| **Accessibility** | Semantic landmarks, labelled form fields, keyboard-closable modal, alt text |

## Featured Projects

| Project | Focus |
| --- | --- |
| E-commerce | Responsive e-commerce storefront |
| Personal Finance Tracker Pro | Income, expense and savings management |
| Clothing Store | Animated landing page |
| Coffee Corner | Multiple responsive websites |
| AI Virtual Assistant | Python voice-controlled assistant |
| Hand Gesture Recognition System | Python, OpenCV, MediaPipe |
| LinkedIn Agent | AI agent / automation |
| Automating Customer Support Agent | AI-powered support automation |
| Academic Power Assistant | AI study assistant |
| TaskFlow | Collaborative project management tool |
| Interview Prep AI | AI interview practice |
| NoteMind AI | Smart AI notes |
| WanderWay Travel Agency | Travel agency website |
| HireLens AI | AI resume analysis and mock interviews |
| TikTok Clone | Short-video social app |

## Tech Stack

- **Markup:** HTML5 (semantic)
- **Styling:** CSS3 (custom properties, Grid, Flexbox, `backdrop-filter`, keyframe animations)
- **Scripting:** Vanilla JavaScript (ES6), `IntersectionObserver`, `fetch`
- **Forms:** Formspree
- **Hosting:** Netlify
- **Dev tooling:** VS Code with the Live Server extension

## Project Structure

```
hamna-portfolio/
├── index.html                 # Main page
├── sitemap.xml                # Sitemap for search engines
├── robots.txt                 # Crawler rules
├── README.md
│
├── headers/
│   └── header.html            # Navbar markup
│
├── assets/
│   ├── images/
│   │   ├── hamna-profile.jpg  # Profile photo
│   │   └── projects/          # Project cover images (800x440)
│   ├── avatar/
│   │   └── avatar.svg         # Fallback avatar
│   └── icons/
│       └── favicon.svg
│
├── css/
│   └── style.css              # All styles
│
├── js/
│   ├── main.js                # Typing effects, forms, modal, scroll reveal
│   ├── theme.js               # Dark / Light toggle
│   └── analytics.js           # Optional analytics (off until an ID is added)
│
└── reports/
    └── README.md              # Place for SEO / performance reports
```

## Run Locally

No installation is needed.

1. Clone or download this repository.
   ```bash
   git clone https://github.com/Hamna-Asif05/<repository-name>.git
   cd <repository-name>
   ```
2. Open the folder in **VS Code**.
3. Make sure your photo is at `assets/images/hamna-profile.jpg`.
4. Right-click `index.html` and choose **Open with Live Server**.

> Opening `index.html` by double-click also works, but use Live Server to test the shared navbar loading and the contact form.

## Configuration

### 1. Contact and CV forms (Formspree)

1. Create a free form at [formspree.io](https://formspree.io).
2. Copy your form ID (the part after `/f/`).
3. In `index.html`, replace `YOUR_FORM_ID` in **both** forms (`#contactForm` and `#cvForm`):
   ```html
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```

Until a real ID is set, the forms fall back to opening the visitor's email app with the message pre-filled.

### 2. Analytics (optional)

In `js/analytics.js`, replace `G-XXXXXXXXXX` with your Google Analytics Measurement ID. While the placeholder is unchanged, no tracking code runs.

### 3. Content

- **Projects:** edit the project cards in the `#projects` section of `index.html`. Keep cover images at **800 x 440** so all cards stay the same size.
- **Cover images:** replace any file in `assets/images/projects/` with a real screenshot of the same name, or update the `src` in the card.
- **Colours:** change the CSS variables at the top of `css/style.css` (`--accent1`, `--accent2`, `--accent3`).

## Deploy to Netlify

**Drag and drop (replace an existing site)**

1. Log in to [Netlify](https://app.netlify.com) and open your site.
2. Go to **Deploys**.
3. Drag the whole project folder (the one containing `index.html`) into the deploy drop area.
4. Wait for the deploy to finish, then hard-refresh the live site (`Ctrl + F5`).

**Change the site name**

Site configuration → Site details → **Change site name**. The URL becomes `https://<name>.netlify.app`. If you change it, update the domain in `index.html`, `sitemap.xml` and `robots.txt`.

**Continuous deployment (optional)**

Push the project to GitHub, then in Netlify choose **Add new site → Import an existing project**. Leave the build command empty and set the publish directory to the project root.

## SEO

Already included:

- Descriptive `<title>` and meta description
- Canonical URL, Open Graph and Twitter Card tags
- JSON-LD structured data (`Person` and `WebSite`) with links to GitHub, LinkedIn, Fiverr and Upwork
- A single `<h1>`, semantic landmarks and image `alt` text
- `sitemap.xml` and `robots.txt`
- Lightweight, build-free pages for fast loading

To get indexed:

1. Add `https://hamnaasif5.netlify.app` to [Google Search Console](https://search.google.com/search-console).
2. Submit `https://hamnaasif5.netlify.app/sitemap.xml`.
3. Add the portfolio link to your GitHub, LinkedIn and other profiles.

> SEO helps search engines understand the site, but it does not guarantee any ranking.

## Privacy

The CV is shared only on request. Form submissions go to my email through Formspree and are not stored on this site.

## Contact

| | |
| --- | --- |
| **Name** | Hamna Asif |
| **Location** | Gujranwala, Punjab, Pakistan |
| **Email** | hamnaasif623@gmail.com |
| **WhatsApp** | +92 303 6801457 |
| **Portfolio** | https://hamnaasif5.netlify.app |
| **GitHub** | https://github.com/Hamna-Asif05 |
| **LinkedIn** | https://www.linkedin.com/in/hamna-asif5 |
| **Fiverr** | https://www.fiverr.com/hamnaasif738 |

## License

© 2026 Hamna Asif. All rights reserved. The code is shared for viewing and learning. Please contact me before reusing the design or content.

---

<div align="center">

*"Every line of code is a step closer to turning imagination into reality."*

</div>
