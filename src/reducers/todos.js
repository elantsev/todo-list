import { initialTodos } from "./initialTodos";
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "./../actions/todos";

let initialState = JSON.parse(localStorage.getItem("todos")) || initialTodos;

export function todos(todos = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [...todos, action.todo];
    case DELETE_TODO:
      return [...todos.filter(todo => todo.id !== action.id)];
    case TOGGLE_TODO:
      return [
        ...todos.map(todo => {
          if (todo.id === action.id) {
            todo.completed = !todo.completed;
          }
          return todo;
        })
      ];

    default:
      return todos;
  }
}
