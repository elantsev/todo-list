import React, { useState } from "react";
function AddTodo({ todoAddHandler }) {
  const [title, setTitle] = useState("");

  const onSubmitHandler = e => {
    e.preventDefault();
    if (title.trim().length < 1) return;
    const todo = { id: Date.now(), title, completed: false };
    todoAddHandler(todo);
    setTitle("");
  };

  return (
    <form
      onSubmit={e => {
        onSubmitHandler(e);
      }}
    >
      <input
        type="text"
        placeholder="введите новое дело"
        value={title}
        onChange={e => setTitle(e.target.value)}
      ></input>
      <input type="submit" value="Добавить"></input>
    </form>
  );
}

export default AddTodo;
