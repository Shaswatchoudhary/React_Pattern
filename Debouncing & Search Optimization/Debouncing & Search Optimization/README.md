# Debouncing & Search Optimization

This project demonstrates the implementation and benefits of **Debouncing** and **Throttling** in search functionality to optimize performance and reduce unnecessary API calls.

## 📌 Overview

**Debouncing** and **Throttling** are rate-limiting patterns used to control how many times a function is executed over a period of time.

### 1. Debouncing

Only calls the function after the user has **stopped** typing for a specified duration (e.g., 500ms).
- **Best for**: Search queries, field validation.
- **Goal**: Minimize the total number of calls by waiting for a "pause".

### 2. Throttling

Ensures the function is called **at most once** every specified time interval (e.g., every 1000ms), even if the user is still active.
- **Best for**: Scroll events, window resizing, mouse movements.
- **Goal**: "Sample" the activity at regular intervals.

## 🛠 Key Features

- **Performance Optimization**: Reduces server load and network requests.
- **Improved User Experience**: Prevents UI lag by avoiding heavy processing on every keystroke.
- **Customizable Delay**: Easily adjust the wait time (3s, 1s, etc.) to suit specific use cases.

## 🚀 Usage in this project

Check out `App.jsx`. We've implemented a **Throttled Search** that updates the API-ready state at most once per second while you type.

```javascript
/* App.jsx - Logic Snippet */
const lastRan = useRef(Date.now());
const timerRef = useRef(null);

useEffect(() => {
  const now = Date.now();
  const timeRemaining = 1000 - (now - lastRan.current);

  if (timeRemaining <= 0) {
    setThrottledQuery(textQuery);
    lastRan.current = now;
  } else {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setThrottledQuery(textQuery);
      lastRan.current = Date.now();
    }, timeRemaining);
  }
}, [textQuery]);
```

## 🎯 When to use?

- **Debounce**: Use when you only care about the *final* state of the input.
- **Throttle**: Use when you need *regular* updates while the action is still in progress.

---

### **Red Theme & Styling**
The project uses a custom dark theme (`neutral-600` background) with a vibrant **red/amber** gradient highlight for active search states.
