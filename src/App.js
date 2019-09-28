import React, { useState } from "react";
import "./App.css";
import Todos from "./Todos";
import { initialTodos } from "./initialTodos";

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const isCompletedHandler = id => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };
  const todoDeleteHandler = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Список дел</h1>
      </header>
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
