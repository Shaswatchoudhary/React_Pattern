# Next.js React Pattern Demo: Server Components & Error Boundaries

This is a **Next.js** project bootstrapped with `create-next-app`, customized to demonstrate key React patterns like **Error Boundaries**, **Server Components**, and **Hydration**.

## 🚀 Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure & Key Files

### `src/app/page.js`
The main landing page which demonstrates **Granular Error Handling**. It wraps multiple `Hero` components in individual `Errorboundary` wrappers.

### `src/app/component/Errorboundary.js`
A custom **React Class Component** that catches errors in its child component tree. It uses `"use client"` since Next.js server components cannot be class components.

### `src/app/component/home.jsx`
A `Hero` component that demonstrates how to trigger an error for testing. If `heroName` is **"Joker"**, it throws an error:
```javascript
if(heroName === 'Joker')
  throw new Error('Joker is not a hero')
```

### `src/app/user/button.jsx`
A client component demonstration with interactivity (`onClick` and `console.log`).

## 🧠 Key Concepts Demonstrated

- **Hydration**: The process of adding interactivity to server-rendered HTML.
- **Error Boundaries**: How to catch UI crashes gracefully without breaking the entire application.
- **Server vs Client Components**: When to use the `"use client"` directive.

---
*Part of the `React_Pattern` learning repository.*
