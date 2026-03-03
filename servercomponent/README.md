# React Patterns: Server Components & Error Boundaries

This directory serves as a practical learning project for mastering **Next.js** concepts, specifically focusing on **Server Components**, **Client Components**, and **Error Handling** patterns.

## 🚀 Getting Started

The main application is located in the `my-app` directory.

```bash
cd my-app
npm install
npm run dev
```

Visit `http://localhost:3000` to see the demonstration in action.

---

## 🧠 Core Concepts Explored

### 1. Hydration
In Next.js, **Hydration** is the process where the static HTML generated on the server is "brought to life" in the browser by attaching JavaScript event listeners.
- **Server:** Renders the layout and initial state.
- **Client:** Loads the JS to make elements (like buttons) interactive.

### 2. Error Boundaries (`src/app/component/Errorboundary.js`)
Error Boundaries are special React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.
- **Constraint:** In React, Error Boundaries must currently be **Class Components**.
- **Usage:** In Next.js, since they are class components, they must be marked with `"use client"`.

### 3. "use client" Directive
- Used to mark a component as a **Client Component**.
- Necessary when using React hooks (`useState`, `useEffect`), class components, or browser APIs (like `onClick` handlers).
- Even if a client component is nested within a server component, it will still execute on the client side to maintain interactivity.

---

## 📁 Project Highlights

- **`src/app/page.js`**: The main entry point demonstrating how multiple `Hero` components are wrapped in individual `Errorboundary` wrappers.
- **`src/app/component/home.jsx`**: A `Hero` component that intentionally throws an error if the name is "Joker", triggering the boundary.
- **`src/app/user/button.jsx`**: A simple demonstration of a client-side interaction using a button with an `onClick` event.

---

## 🛠 Lessons Learned

- **Granular Error Handling**: By wrapping each `Hero` in its own `Errorboundary`, a crash in one component (e.g., "Joker") doesn't break the entire page. Other heroes ("Batman", "Superman") remain visible.
- **Interactive Components**: Components requiring interactivity (like `Button`) must use `"use client"` to handle events like `onClick`.

---
*Created as part of the React Patterns learning journey.*
