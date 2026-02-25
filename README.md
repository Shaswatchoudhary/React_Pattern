# 🧠 React Design Patterns (2026 Edition)

**By Shaswat Choudhary**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.2+-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)](https://www.typescriptlang.org/)

> A comprehensive guide to React architectural patterns — from the pre-hooks era to modern hook-based architecture used in 2026.

Each pattern includes:
- 📌 **Problem it solves**
- 🎯 **When to use it**
- 🛠 **Example code**
- 🚀 **Modern equivalent** (if applicable)

---

## 📚 Table of Contents

1. [Higher-Order Component (HOC)](#-1️⃣-higher-order-component-hoc)
2. [Render Props Pattern](#-2️⃣-render-props-pattern)
3. [Container / Presentational Pattern](#-3️⃣-container--presentational-pattern)
4. [Custom Hooks](#-4️⃣-custom-hooks)
5. [Compound Components](#-5️⃣-compound-components)
6. [Context + Provider Pattern](#-6️⃣-context--provider-pattern)
7. [Controlled vs Uncontrolled Components](#-7️⃣-controlled-vs-uncontrolled-components)
8. [State Reducer Pattern](#-8️⃣-state-reducer-pattern)
9. [State Co-location Pattern](#-9️⃣-state-co-location-pattern)
10. [Performance Optimization Patterns](#-🔟-performance-optimization-patterns)
11. [Modern React Architecture (2026)](#🏗-modern-react-architecture-2026)

---

## 📜 1️⃣ Higher-Order Component (HOC)

### 📌 What It Is
A Higher-Order Component is a function that takes a component and returns an enhanced component.

### 🎯 Problem It Solves
Reusing logic across multiple components (before hooks existed).

### 🛠 Example

```js
function withAuth(Component) {
  return function Wrapped(props) {
    const isAuthenticated = true;

    if (!isAuthenticated) {
      return <p>Please login</p>;
    }

    return <Component {...props} />;
  };
}
```

### 🚀 Usage
```js
const ProtectedDashboard = withAuth(Dashboard);
```

### 🧠 Modern Replacement
**Custom Hooks** - See pattern #4.

---

## 📜 2️⃣ Render Props Pattern

### 📌 What It Is
A component that uses a function as a prop to share logic.

### 🎯 Problem It Solves
Sharing logic while keeping UI flexible.

### 🛠 Example
```js
function DataProvider({ render }) {
  const data = { name: "John" };
  return render(data);
}
```

### 🚀 Usage
```js
<DataProvider render={(data) => <h1>{data.name}</h1>} />
```

### 🧠 Modern Replacement
**Custom Hooks** - See pattern #4.

---

## 📜 3️⃣ Container / Presentational Pattern

### 📌 What It Is
Separates logic (container) from UI (presentational).

### 🛠 Example
```js
function UserContainer() {
  const user = { name: "John" };
  return <UserView user={user} />;
}

function UserView({ user }) {
  return <h1>{user.name}</h1>;
}
```

### 🧠 Modern Equivalent
**Custom Hooks + Functional Components**.

---

## 📜 4️⃣ Custom Hooks

### 📌 What It Is
Reusable logic extracted into a function that uses hooks.

### 🎯 Problem It Solves
Logic reuse without wrapper nesting.

### 🛠 Example
```js
function useCounter(initial = 0) {
  const [count, setCount] = React.useState(initial);

  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);

  return { count, increment, decrement };
}
```

---

## 📜 5️⃣ Compound Components

### 📌 What It Is
A pattern where related components share internal state via context.

### 🎯 Problem It Solves
Coordinated UI systems (Tabs, Modal, Accordion).

### 🛠 Example
```js
const TabsContext = React.createContext();

function Tabs({ children }) {
  const [active, setActive] = React.useState(0);

  return (
    <TabsContext.Provider value={{ active, setActive }}>
      {children}
    </TabsContext.Provider>
  );
}

function Tab({ index, children }) {
  const { active, setActive } = React.useContext(TabsContext);

  return (
    <button onClick={() => setActive(index)}>
      {children}
    </button>
  );
}

Tabs.Tab = Tab;
```

---

## 📜 6️⃣ Context + Provider Pattern

### 📌 What It Is
A way to share global state without prop drilling.

### 🛠 Example
```js
const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const [user, setUser] = React.useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
```

---

## 📜 7️⃣ Controlled vs Uncontrolled Components

### Controlled Component
React controls the value.

```js
const [value, setValue] = useState("");
<input value={value} onChange={e => setValue(e.target.value)} />
```

### Uncontrolled Component
DOM controls the value.

```js
const inputRef = useRef(null);
<input defaultValue="Hello" ref={inputRef} />
```

> Use ref to access DOM value.

---

## 📜 8️⃣ State Reducer Pattern

### 📌 What It Is
Allows consumers to override internal state transitions.

### 🛠 Default Reducer
```js
function defaultReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}
```

### 🛠 Component with Reducer Support
```js
function Counter({ reducer = defaultReducer }) {
  const [state, dispatch] = React.useReducer(reducer, { count: 0 });

  return (
    <>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <span>{state.count}</span>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </>
  );
}
```

---

## 📜 9️⃣ State Co-location Pattern

### 📌 What It Is
Keep state close to where it's used.

### 🎯 Why
Prevents unnecessary re-renders and improves performance.

---

## 📜 🔟 Performance Optimization Patterns

### React.memo
Prevents unnecessary child re-renders.

```js
const Child = React.memo(function Child({ value }) {
  return <div>{value}</div>;
});
```

### useMemo
Memoizes expensive calculations.

```js
const computed = useMemo(() => heavyCalculation(data), [data]);
```

### useCallback
Stabilizes function references.

```js
const handleClick = useCallback(() => {
  console.log("clicked");
}, []);
```

### Virtualization
Render only visible list items for large datasets.

---

## 🏗 Modern React Architecture (2026)

### ✅ Best Practices
- **Local state first** - Start with useState
- **Custom hooks for logic reuse** - Extract reusable logic
- **Context for global state** - Avoid prop drilling
- **Compound components for UI systems** - Tabs, Modals, etc.
- **useReducer for complex transitions** - State machines
- **Controlled forms** - Predictable form handling
- **Memoization only when necessary** - Profile before optimizing
- **Virtualization for large lists** - Performance critical

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- React 18+
- Basic knowledge of JavaScript ES6+

### Installation
```bash
git clone https://github.com/yourusername/react-design-patterns.git
cd react-design-patterns
npm install
npm start
```

### Project Structure
```
react-design-patterns/
├── patterns/
│   ├── hoc/
│   ├── render-props/
│   ├── custom-hooks/
│   ├── compound-components/
│   ├── context-provider/
│   ├── state-reducer/
│   └── performance/
├── examples/
├── README.md
└── package.json
```

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📚 Conclusion

Understanding React patterns means understanding:

- **What problem you're solving**
- **When to apply the correct abstraction**
- **How architecture evolves over time**

Modern React focuses on hooks, composition, and scalability.

---

## 📞 Connect

- **LinkedIn**: [Shaswat Choudhary](https://www.linkedin.com/in/shaswat-choudhary-6a36b824b/)
- **Portfolio**: [shaswatportfolio.netlify.app](https://shaswatportfolio.netlify.app/)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## ⭐ Show Your Support

If this repository helped you understand React patterns better, please give it a ⭐!

---

*Last updated: February 2026*
