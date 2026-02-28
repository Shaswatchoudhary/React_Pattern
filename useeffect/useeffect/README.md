# useEffect Hook & Component Lifecycle

This project demonstrates the **useEffect** hook in React for handling side effects.

## 📌 Overview

**The `useEffect` Hook** is a way to handle things that "don't fit" into the regular rendering cycle. Examples include:
- Fetching data from an API.
- Setting up a subscription or timer.
- Manually changing the DOM.

## 🛠 Key Concepts

### 1. Component Lifecycle

- **Mounting**: When the component is first added to the screen.
- **Updating**: When the state or props change, causing a re-render.
- **Unmounting**: When the component is removed from the screen.

### 2. Dependency Array

- **No array**: Runs on every single render.
- **Empty array `[]`**: Runs only once on mount.
- **Values in array `[count]`**: Runs when `count` changes.

## 🚀 Usage in this project

Check out `App.jsx`. We have a simple counter that updates its own state based on an effect.

```javascript
useEffect(() => {
  console.log("count changed", count);
  if (count === 0) {
    setCount(10); // Simple trick for initial state
  }
}, [count])
```

## 🎯 When to use?

- **API calls**: Fetch data when the component loads.
- **Direct DOM Manipulation**: Focus on an input, change the document title.
- **Event Listeners**: Adding/removing `window` or `document` events.
- **Timers**: `setTimeout` or `setInterval`.

## ⚠️ Cleanup

Always return a cleanup function if you use an effect for event listeners or timers!

```javascript
useEffect(() => {
  const timer = setTimeout(...);
  return () => clearTimeout(timer); // Cleanup is crucial!
}, [])
```
