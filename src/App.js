import React, { useState } from "react";
import "./App.css";
import Todos from "./Todos";
import { initialTodos } from "./initialTodos";
import Header from "./Header";

function App() {
  let initialState = JSON.parse(localStorage.getItem("todos")) || initialTodos;
  const [todos, setTodos] = useState(initialState);

  const setTodosWithLocalStorage = todos => {
    setTodos(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const isCompletedHandler = id => {
    setTodosWithLocalStorage(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };
  const todoDeleteHandler = id => {
    setTodosWithLocalStorage(todos.filter(todo => todo.id !== id));
  };
  const todoAddHandler = todo => {
    setTodosWithLocalStorage([...todos, todo]);
  };

  return (
    <div className="App">
      <Header todoAddHandler={todoAddHandler} />
      <main>
        <Todos
          todos={todos}
          isCompletedHandler={isCompletedHandler}
          todoDeleteHandler={todoDeleteHandler}
        />
      </main>
    </div>
  );
}

export default App;
