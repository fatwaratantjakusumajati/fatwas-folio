# Fatwa's Folio — AI Systems, Computer Vision & Fullstack Portfolio

Interactive bilingual (**EN / ID**) portfolio web application of **Fatwa Ratantja Kusumajati** — Informatics graduate (UPN "Veteran" Jawa Timur, GPA 3.76/4.00) building production AI systems, computer vision pipelines, workflow automations, fullstack dashboards, and network security infrastructure.

---

## ✨ Key Features

- **Interactive Monitor Intro (`/`)**: Full-viewport studio display showreel highlighting real-world AI, dock vision, OCR + ArUco live location tracking, WhatsApp LLM automation, Security Onion SOC, and fullstack web development, followed by an animated portfolio boot transition.
- **Full Portfolio Showcase (`/portfolio`)**:
  - **Hero & Summary**: Bilingual overview, key metrics (`3.76 GPA`, `SINTA 2` publication, `6` certifications), and direct CV download (`Fatwa_Ratantja_Kusumajati_CV.pdf`).
  - **Deployed Systems (`01 / Projects`)**: Interactive category filtering (`All systems`, `Computer vision`, `Web & automation`, `OCR & security`) and inspectable project previews & modals.
  - **Research & Additional Projects (`02 / More projects`)**: YOLOv8n Safety Helmet Detection, SINTA 2 XGBoost + SMOTETomek research, Tomato Leaf Disease CNN/DenseNet201, and PIC IoT control.
  - **Skills, Experience, Education & Certifications**: Complete timeline covering *PT Aristides Logistik Indonesia*, *PT INKA (Persero) — MagangHub*, *Lazada Express*, *PT Terminal Intimoda Utama (Student Intern)*, *BEM FASILKOM*, and Red Hat / IBM / Certiport credentials.
- **Dark / Light Theme & Bilingual Switch**: Instant `EN` / `ID` toggle and Neo-Brutalist light/dark mode persisted in `localStorage`.

---

## 🛠 Tech Stack

| Layer | Technologies |
| --- | --- |
| **Frontend** | React 18, TypeScript, Vite, Tailwind CSS, shadcn/ui, Lucide Icons, React Router |
| **Custom Assets** | Illustrated 2D character & smiling avatar branding, custom multi-size favicons, PDF resume |

---

## 📁 Project Structure

```text
├── public/
│   ├── assets/aistudio/ # Latest downloadable CV PDF
│   ├── projects/        # Deployed system screenshots & visual previews
│   └── favicon*         # Multi-resolution favicons & Apple Touch Icon
├── src/
│   ├── assets/          # Custom illustrated avatar & character artwork
│   ├── components/
│   │   ├── portfolio/   # Hero, StudioMotionFilm, Projects, Experience, Skills, etc.
│   │   └── ui/          # Reusable UI primitives
│   ├── contexts/        # LanguageContext (EN/ID)
│   └── pages/           # IntroPage (/) and Index (/portfolio)
└── vercel.json          # Vite build & SPA routing for Vercel
```

---

## 🚀 Getting Started (Local Development)

### 1. Clone & Install Dependencies

```bash
git clone https://github.com/fatwaratantjakusumajati/fatwas-folio.git
cd fatwas-folio
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

### 3. Build & Lint

```bash
npm run build
npm run lint
```

---

## ☁️ Deploying to Vercel

1. Push your repository to GitHub (`fatwaratantjakusumajati/fatwas-folio`).
2. Import the project in **Vercel** (Framework Preset: **Vite**).
3. Deploy — `vercel.json` handles static build and SPA routing for `/portfolio` and static assets automatically.

---

## 📬 Contact

- **Name**: Fatwa Ratantja Kusumajati
- **Email**: `fatwaratantja@gmail.com`
- **LinkedIn**: [linkedin.com/in/fatwaratantja](https://www.linkedin.com/in/fatwaratantja/)
- **GitHub**: [github.com/fatwaratantjakusumajati](https://github.com/fatwaratantjakusumajati)
- **Kaggle RAG Notebook**: [kaggle.com/code/fatwaratantjak/fatwa-folio](https://www.kaggle.com/code/fatwaratantjak/fatwa-folio)
- **Credly**: [credly.com/users/fatwa-ratantja](https://www.credly.com/users/fatwa-ratantja)
