import React from "react";
import s from "./Todo.module.css";

function Todo({
  todo: { id, title, completed },
  isCompletedHandler,
  todoDeleteHandler
}) {
  let stile = `${s.todo__title} ${completed ? s.todo__completed : null}`;

  return (
    <div className={s.todo}>
      <input
        type="checkbox"
        checked={completed}
        className={s.todo__checkbox}
        onChange={() => isCompletedHandler(id)}
      />
      <p className={stile}>{title}</p>
      <input
        type="button"
        className={s.todo__delete}
        value="удалить"
        onClick={() => todoDeleteHandler(id)}
      />
    </div>
  );
}

export default Todo;
