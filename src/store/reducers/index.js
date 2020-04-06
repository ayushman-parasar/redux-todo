import { v4 as uuid } from "uuid";

let initialState = JSON.parse(localStorage.getItem("myTodos")) || {
    allTodos: [],
    currentTab: "all",
  };

  export default function reducer(state = initialState, action) {
      console.log(action)
    switch (action.type) {
      case 'Add-Todo':
        let newTodo = { text: action.payload, isDone: false, id: uuid() };
        console.log('reducer')
        return { ...state, allTodos: [...state.allTodos, newTodo] };
      case 'Delete-Todo':
        return {
          ...state,
          allTodos: state.allTodos.filter((todo) => todo.id !== action.payload),
        };
      case 'Toggle-Todo':
        return {
          ...state,
          allTodos: state.allTodos.map((todo) => {
            if (todo.id === action.payload) {
              return { ...todo, isDone: !todo.isDone };
            }
            return todo;
          }),
        };
      case 'Change-Tab':
        return {
          ...state,
          currentTab: action.payload,
        };
      default:
        return state;
    }
  }
  