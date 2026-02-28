# React Lazy, Suspense & ErrorBoundary

This project demonstrates **Code Splitting** in React using `React.lazy` and handling loading/error states.

## 📌 Overview

**Code Splitting** is the process of breaking your JavaScript bundle into smaller "chunks" that can be loaded on demand. This significantly improves the initial load time of your application.

## 🛠 Key Concepts

### 1. React.lazy

It's a function that lets you dynamic import a component. It returns a "lazy" component that is loaded asynchronously.

```javascript
const HeavyComponent = React.lazy(() => import("./HeavyComponent"));
```

### 2. Suspense

Is a built-in React component that provides a "fallback" UI (like a loading spinner) while the lazy component is still loading.

```javascript
<Suspense fallback={<p>Loading...</p>}>
  <HeavyComponent />
</Suspense>
```

### 3. ErrorBoundary

A component that catches JavaScript errors in its child component tree, logs those errors, and displays a fallback UI instead of crashing the entire app.

```javascript
<ErrorBoundary>
  <Suspense fallback={<p>Loading...</p>}>
    <HeavyComponent />
  </Suspense>
</ErrorBoundary>
```

## 🚀 Usage in this project

Check out `App.jsx` and `Errorboundary.jsx`. We've even simulated a 2-second network delay to showcase the `fallback` and the `ErrorBoundary` in action!

## 🎯 When to use?

- **Route-based splitting**: Only load the code for the page the user is currently on.
- **Heavy UI**: Modals, large charts, or graphs that are not needed immediately.
- **Third-party libraries**: Chunks that wrap large libraries like `lodash` or `chart.js`.
