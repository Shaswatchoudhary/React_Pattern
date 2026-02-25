# Architecture

## Overview

This is a **React learning project** that demonstrates the usage of the `useEffect` hook alongside `useState`. It implements a simple counter application where users can increment and decrement a value, with `useEffect` logging the count to the console on every render.

## Tech Stack

| Technology | Purpose |
|---|---|
| **React 19** | UI library |
| **Vite 8** | Build tool & dev server (with HMR) |
| **Tailwind CSS** | Utility-first CSS framework (via `@tailwindcss/vite` plugin) |
| **ESLint** | Code linting |

## Project Structure

```
├── index.html            # HTML entry point (mounts #root div)
├── src/
│   ├── main.jsx          # React app bootstrap (StrictMode + root render)
│   ├── App.jsx           # Main component — counter with useEffect demo
│   ├── App.css           # Component-level styles
│   └── index.css         # Global styles (Tailwind import)
├── vite.config.js        # Vite config (React + Tailwind plugins)
├── eslint.config.js      # ESLint configuration
└── package.json          # Dependencies and scripts
```

## Application Flow

1. **`index.html`** — Defines the `<div id="root">` mount point and loads `src/main.jsx` as a module.
2. **`src/main.jsx`** — Creates the React root and renders `<App />` inside `<StrictMode>`.
3. **`src/App.jsx`** — The sole component:
   - Uses `useState` to manage a `count` state variable.
   - Uses `useEffect` (with **no dependency array**) to log the current count on every render.
   - Renders increment/decrement buttons styled with Tailwind CSS classes.

## Key Concept: `useEffect` Without a Dependency Array

The `useEffect` in `App.jsx` is intentionally called **without a dependency array**, which means the effect runs after **every render**. This is a learning exercise to understand how dependency arrays control when effects fire:

| Dependency Array | Behavior |
|---|---|
| _omitted_ (current) | Runs after every render |
| `[]` | Runs only once on mount |
| `[count]` | Runs only when `count` changes |

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |
