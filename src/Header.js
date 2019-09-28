import React from "react";
import AddTodo from "./AddTodo";
function Header({ todoAddHandler }) {
  return (
    <header className="App-header">
      <h1>Список дел</h1>

      <AddTodo todoAddHandler={todoAddHandler} />
    </header>
  );
}

export default Header;
