# Render Props Pattern

This project demonstrates the **Render Props Pattern**, a powerful way to share component logic in React.

## 📌 Overview

The **Render Props Pattern** is a technique where a component receives a function as a prop and calls that function to determine what to render. It's an alternative to HOCs (Higher-Order Components) for sharing common logic.

## 🛠 Key Concepts

- **Dynamic UI**: Let the user of a component decide how to draw its data.
- **Logic Re-use**: Share logic between components without the "nesting" of HOCs.

## 🚀 Usage in this project

Check out `App.jsx` and `Input.jsx`. The `Input` component doesn't know what to draw below it; it just calls the function it gets via `renderTextBelow`.

```javascript
/* Input.jsx */
return (
  <div className="input-wrapper">
    <input value={value} onChange={...} />
    {this.props.renderTextBelow(value)}
  </div>
);

/* App.jsx */
<Input renderTextBelow={(val) => <p>The value is {val}</p>} />
<Input renderTextBelow={(val) => <p>Value * 10 is {val * 10}</p>} />
```

## 🎯 When to use?

- **Cross-Component Logic**: Mouse tracking, data fetching, or scroll tracking.
- **Dynamic Content**: When you want to provide "slots" for users to insert their own UI elements.
- **Highly Configurable UI**: When a single central component needs to look completely different in different parts of your app.

## 🧠 Modern Replacement

While **Custom Hooks** have largely replaced Render Props (and HOCs) for logic sharing, Render Props are still great for building flexible UI libraries and layout systems!
