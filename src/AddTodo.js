import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import s from "./AddTodo.module.css";
import { TextField } from "@material-ui/core";

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
      className={s.addtodo}
      onSubmit={e => {
        onSubmitHandler(e);
      }}
    >
      <TextField
        id="outlined-dense-multiline"
        label="Введите новое дело"
        className={s.addtodo__title}
        margin="dense"
        variant="outlined"
        multiline
        rowsMax="10"
        onChange={e => setTitle(e.target.value)}
        value={title}
      />

      <Button
        type="submit"
        className={s.addtodo__submit}
        variant="contained"
        color="primary"
      >
        Добавить
      </Button>
    </form>
  );
}

export default AddTodo;
