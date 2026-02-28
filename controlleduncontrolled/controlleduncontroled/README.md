# Controlled vs Uncontrolled Components

This project demonstrates the differences and use cases for **Controlled** and **Uncontrolled** components in React.

## 📌 Overview

A **Controlled Component** is one where the state is managed entirely by React.
An **Uncontrolled Component** is one where the DOM handles the state (usually accessed via a `ref`).

## 🛠 Key Differences

### 1. Controlled Component

The component's value is linked to React state. Updates happen via an `onChange` handler.

```javascript
const [value, setValue] = useState("");

<input 
  value={value} 
  onChange={(e) => setValue(e.target.value)} 
/>
```

- **Pros**: Predictable, easy to validate, reactive.
- **Cons**: More boilerplate, re-renders on every keystroke.

### 2. Uncontrolled Component

The DOM handles the input value. You use a `useRef` to pull the value whenever you need it (e.g., on form submission).

```javascript
const inputRef = useRef(null);

const handleSubmit = () => {
  console.log(inputRef.current.value);
};

<input ref={inputRef} defaultValue="Default text" />
```

- **Pros**: Less boilerplate, closer to native HTML behavior.
- **Cons**: Less "React-way" for real-time validation or synchronization.

## 🚀 Usage in this project

Check out `controlled.jsx` and `Uncontrolled.jsx` to see the side-by-side implementation.

## 🎯 When to use?

- **Use Controlled** for: complex forms, real-time validation, dynamic inputs, or when multiple components need to stay in sync.
- **Use Uncontrolled** for: simple one-time data collection (like login forms), integration with non-React libraries, or deep performance optimizations.
