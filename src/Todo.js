import React from "react";
import s from "./Todo.module.css";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";

function Todo({
  todo: { id, title, completed },
  isCompletedHandler,
  todoDeleteHandler
}) {
  let stile = `${s.todo__title} ${completed ? s.todo__completed : ""}`;

  return (
    <div className={s.todo}>
      {/* <input
        type="checkbox"
        checked={completed}
        className={s.todo__checkbox}
        onChange={() => isCompletedHandler(id)}
      /> */}

      <Checkbox
        checked={completed}
        className={s.todo__checkbox}
        onChange={() => isCompletedHandler(id)}
        inputProps={{
          "aria-label": "checkbox with default color"
        }}
      />
      <p className={stile}>{title}</p>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => todoDeleteHandler(id)}
        className={s.todo__delete}
      >
        удалить
        <DeleteIcon />
      </Button>
    </div>
  );
}

export default Todo;
