# Props Drilling & Context API

This project demonstrates the **Prop Drilling** anti-pattern and how to solve it using the **Context API**.

## 📌 Overview

**Prop Drilling** is the process of passing props down through multiple layers of components that don't actually need them, just to get the data to a deeply nested child.

## 🛠 Key Concepts

- **Prop Drilling**: Passing `data` from `App -> Sidebar -> Dashboard -> Profile` etc.
- **Context API**: A built-in React feature to share data across the component tree without passing props.
- **Provider Pattern**: Creating a `Context.Provider` to wrap your app and provide values to any consumer.

## 🚀 Usage in this project

Check out `App.jsx` and `context/context.js`:

```javascript
import UseContext from './context/context';

const [state, dispatch] = useReducer(...);

return (
  <UseContext.Provider value={state.count}>
    <Dashboard name={state.count} />
  </UseContext.Provider>
);
```

## 🎯 When to use Context?

- **Global State**: Theme, User Auth, Language.
- **Settings**: Configuration shared across many components.
- **Complex UI**: Tabs or Accordions where children need parent state.

## ⚠️ Cautions

Don't over-use context! If you only have to pass a prop down 2 levels, it might be better than setting up a full context. Context should be for truly shared "global" data.
