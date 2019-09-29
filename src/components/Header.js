import React from "react";
import AddTodo from "./AddTodo";

function Header() {
  return (
    <header className="App-header">
      <h1>Список дел</h1>
      <AddTodo />
    </header>
  );
}

export default Header;
