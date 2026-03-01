import { createStore } from 'redux'; // is the library to create the store  
// import counterReducer from './counterSlice'; // we use this library using redux toolkit 

const reducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

export const store = createStore(reducer) // it is showing error because it is deprecated means it tell us that insted of useing redux we should use redux toolkit