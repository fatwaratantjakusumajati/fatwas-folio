# Fatwa's Folio — AI Systems, Computer Vision & Fullstack Portfolio

Interactive bilingual (**EN / ID**) portfolio web application of **Fatwa Ratantja Kusumajati** — Informatics graduate (UPN "Veteran" Jawa Timur, GPA 3.76/4.00) building production AI systems, computer vision pipelines, workflow automations, fullstack dashboards, and network security infrastructure.

---

## ✨ Key Features

- **Interactive Monitor Intro (`/`)**: Full-viewport studio display showreel highlighting real-world AI, dock vision, OCR + ArUco live location tracking, WhatsApp LLM automation, Security Onion SOC, and fullstack web development, followed by an animated portfolio boot transition.
- **Full Portfolio Showcase (`/portfolio`)**:
  - **Hero & Summary**: Bilingual overview, key metrics (`3.76 GPA`, `SINTA 2` publication, `6` certifications), and direct CV download (`Fatwa_Ratantja_Kusumajati_CV.pdf`).
  - **Deployed Systems (`01 / Projects`)**: Interactive category filtering (`All systems`, `Computer vision`, `Web & automation`, `OCR & security`) and inspectable project previews & modals.
  - **Research & Additional Projects (`02 / More projects`)**: YOLOv8n Safety Helmet Detection, SINTA 2 XGBoost + SMOTETomek research, Kaggle RAG Notebook, Tomato Leaf Disease CNN/DenseNet201, and PIC IoT control.
  - **Skills, Experience, Education & Certifications**: Complete timeline covering *PT Aristides Logistik Indonesia*, *PT INKA (Persero) — MagangHub*, *Lazada Express*, *PT Terminal Intimoda Utama (Student Intern)*, *BEM FASILKOM*, and Red Hat / IBM / Certiport credentials.
- **Personal Portfolio RAG Chatbot**:
  - Powered by `@google/genai` (`gemini-3.1-flash-lite` with fallback) and custom keyword/context retrieval strictly grounded in Fatwa's portfolio knowledge base.
  - Supports bilingual Q&A (Indonesian & English), conversation history, and source citations.
  - Works seamlessly both in local Express development (`server.ts`) and as zero-config Vercel Serverless Functions (`api/chat.ts`, `api/health.ts`).
- **Dark / Light Theme & Bilingual Switch**: Instant `EN` / `ID` toggle and Neo-Brutalist light/dark mode persisted in `localStorage`.

---

## 🛠 Tech Stack

| Layer | Technologies |
| --- | --- |
| **Frontend** | React 18, TypeScript, Vite, Tailwind CSS, shadcn/ui, Lucide Icons, React Router |
| **AI & Backend** | `@google/genai` (`gemini-3.1-flash-lite`), Express 5 (local dev), Vercel Serverless Functions (`api/*.ts`) |
| **Custom Assets** | Illustrated 2D character & smiling avatar branding, custom multi-size favicons, PDF resume |

---

## 📁 Project Structure

```text
├── api/
│   ├── chat.ts          # Self-contained Vercel Serverless Function + RAG knowledge base
│   └── health.ts        # Self-contained health check endpoint
├── public/
│   ├── assets/aistudio/ # Latest downloadable CV PDF
│   ├── projects/        # Deployed system screenshots & visual previews
│   └── favicon*         # Multi-resolution favicons & Apple Touch Icon
├── src/
│   ├── assets/          # Custom illustrated avatar & character artwork
│   ├── components/
│   │   ├── portfolio/   # Hero, StudioMotionFilm, Projects, Experience, RagChatbot, etc.
│   │   └── ui/          # Reusable UI primitives
│   ├── contexts/        # LanguageContext (EN/ID) & ChatbotContext
│   └── pages/           # IntroPage (/) and Index (/portfolio)
├── server.ts            # Local Express + Vite middleware dev/prod server
├── vercel.json          # Vite build & SPA rewrites without intercepting /api/*
└── .env.example         # Environment variable template
```

---

## 🚀 Getting Started (Local Development)

### 1. Clone & Install Dependencies

```bash
git clone https://github.com/fatwaratantjakusumajati/fatwas-folio.git
cd fatwas-folio
npm install
```

### 2. Configure Environment Variables (Optional for Local AI Mode)

Create a `.env` file in the root directory based on `.env.example`:

```env
GEMINI_API_KEY=your_google_gemini_api_key
```

> **Note:** If `GEMINI_API_KEY` is not set, `/api/chat` automatically serves answers using the built-in local RAG retriever so the chatbot remains functional.

### 3. Run Development Server

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

### 4. Build & Lint

```bash
npm run build
npm run lint
```

---

## ☁️ Deploying to Vercel

1. Push your repository to GitHub (`fatwaratantjakusumajati/fatwas-folio`).
2. Import the project in **Vercel** (Framework Preset: **Vite**).
3. *(Recommended)* Add `GEMINI_API_KEY` under **Project Settings → Environment Variables**.
4. Deploy — `vercel.json` handles SPA routing for `/portfolio`, static assets/favicons, and `/api/chat` + `/api/health` serverless endpoints automatically.

---

## 📬 Contact

- **Name**: Fatwa Ratantja Kusumajati
- **Email**: `fatwaratantja@gmail.com`
- **LinkedIn**: [linkedin.com/in/fatwaratantja](https://www.linkedin.com/in/fatwaratantja/)
- **GitHub**: [github.com/fatwaratantjakusumajati](https://github.com/fatwaratantjakusumajati)
- **Kaggle RAG Notebook**: [kaggle.com/code/fatwaratantjak/fatwa-folio](https://www.kaggle.com/code/fatwaratantjak/fatwa-folio)
- **Credly**: [credly.com/users/fatwa-ratantja](https://www.credly.com/users/fatwa-ratantja)
