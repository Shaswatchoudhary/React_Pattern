# State Reducer Pattern (Advanced)

This project demonstrates the **State Reducer Pattern** in React using the `useReducer` hook.

## 📌 Overview

The State Reducer Pattern is a powerful design pattern that allows you to decouple your component's state logic from its UI. By using a reducer, you can centralize complex state transitions, making them more predictable and easier to test.

## 🛠 Key Concepts

- **Reducer Function**: A pure function that takes the current state and an action, and returns a new state.
- **Action**: An object describing what happened (e.g., `{ type: 'TOGGLE' }`).
- **Dispatch**: A function used to send actions to the reducer.

## 🚀 Example: Toggle Component

In this example, we manage a simple `isOn` state using `useReducer`.

```javascript
const toggleReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE':
      return { isOn: !state.isOn };
    default:
      return state;
  }
};

const [state, dispatch] = useReducer(toggleReducer, { isOn: false });
```

## 🎯 When to use it?

- When you have complex state logic involving multiple sub-values.
- When the next state depends on the previous one.
- When you want to stabilize the state logic for unit testing.

## 🏗 Features

- **Centralized Logic**: All state updates happen in one place.
- **Predictability**: Given the same state and action, the reducer always returns the same result.
- **Easy Extension**: Adding new actions (like `RESET` or `SET_ON`) is simple.
