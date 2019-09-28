import React from "react";
import "./App.css";
import Todo from "./Todo";

function Todos({ todos, isCompletedHandler, todoDeleteHandler }) {
  return (
    <>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          isCompletedHandler={isCompletedHandler}
          todoDeleteHandler={todoDeleteHandler}
        />
      ))}
    </>
  );
}

export default Todos;
