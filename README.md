# Eco Lens Web

Eco Lens is a web initiative focused on making environmental data, insights, and actions more accessible and engaging. This repository contains the frontend application that powers the Eco Lens website.

The site is built as a modern, responsive, single-page application using React, Tailwind CSS, and the shadcn/ui component system.

---

## Table of contents

- **Overview**
- **Features**
- **Tech stack**
- **Getting started**
- **Available scripts**
- **Project structure**
- **Deployment**
- **Contributing**
- **License**

---

## Overview

Eco Lens aims to:

- **Visualize environmental indicators** in a way that is understandable for non-experts.
- **Highlight initiatives and projects** that contribute to sustainability and climate action.
- **Provide an approachable entry point** for people and organizations who want to explore their environmental impact.

The website is designed to be:

- **Fast and responsive** on modern browsers.
- **Accessible by default**, following semantic HTML and ARIA best practices where possible.
- **Easy to evolve**, with a component-driven architecture and a clear separation of concerns.

---

## Features

Depending on your current implementation, the site typically includes:

- **Landing page** presenting the Eco Lens mission and value proposition.
- **Sections for initiatives / projects** with cards, summaries, and calls to action.
- **Data visualizations** (e.g. charts, dashboards) for environmental metrics.
- **Responsive layout** optimized for desktop, tablet, and mobile.
- **Dark/light theme support** via `next-themes` and Tailwind.

You can adapt and extend this section as new pages and capabilities are added.

---

## Tech stack

This project is built with:

- **Vite** – dev server and build tool.
- **React 18** – UI library.
- **TypeScript** – static typing and safer refactoring.
- **shadcn/ui + Radix UI** – accessible UI primitives and components.
- **Tailwind CSS** – utility-first styling.
- **TanStack Query** – async data fetching and caching (where needed).

The project was initially scaffolded using **Lovable**, and is now maintained in this repository.

---

## Getting started

### Prerequisites

- **Node.js** ≥ 18 (recommended to use `nvm`).
- **npm** (or `pnpm`/`bun` if you prefer and configure accordingly).

### Installation

Clone the repository and install dependencies:

```sh
git clone <REPO_URL>
cd eco-lens-web
npm install
```

### Running the app locally

Start the development server:

```sh
npm run dev
```

By default Vite serves the app at `http://localhost:5173`. Open this URL in your browser to view the site.

---

## Available scripts

All scripts are defined in `package.json`:

- **`npm run dev`** – Start the Vite development server with hot reloading.
- **`npm run build`** – Create an optimized production build.
- **`npm run build:dev`** – Build using the `development` mode (useful for debugging builds).
- **`npm run preview`** – Preview the production build locally.
- **`npm run lint`** – Run ESLint over the codebase.

---

## Project structure

A high-level overview of the main folders:

- **`src/`** – Application source code (components, pages, hooks, utilities).
- **`public/`** – Static assets served as-is.
- **`index.html`** – Vite entry HTML file.
- **`tailwind.config.ts`** – Tailwind configuration.
- **`vite.config.ts`** – Vite configuration.

The exact structure inside `src/` may evolve as the initiative grows (e.g. `components/`, `features/`, `pages/`, `lib/`).

---

## Deployment

This is a static frontend that can be deployed to any modern static hosting provider, such as:

- **Vercel**
- **Netlify**
- **Cloudflare Pages**
- **GitHub Pages**
- Any other platform that can serve static files.

Typical deployment flow:

```sh
npm run build
```

This generates a `dist/` folder with the production assets. Configure your hosting provider to:

- Serve files from the `dist/` directory.
- Use `index.html` as the entry file.
- Optionally redirect all routes to `index.html` (for client-side routing).

If you deploy with Vercel or Netlify, you can usually select this repository, choose Vite/React as the framework preset, and keep the default build command (`npm run build`) and output directory (`dist`).

---

## Contributing

Contributions that improve the user experience, accessibility, documentation, or environmental storytelling are welcome.

General guidelines:

- **Open an issue** to describe significant changes or new features before starting.
- **Keep pull requests focused** on a single change or feature.
- **Follow TypeScript strictness** and linting rules.
- **Prefer small, composable components** over large monolithic ones.

---

## License

Specify the license that applies to this project (for example, MIT, Apache-2.0, or a custom license). If you have not chosen one yet, consider adding a `LICENSE` file and updating this section accordingly.

