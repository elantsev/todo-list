import React from "react";
import { connect } from "react-redux";
import "./App.css";
import Todo from "./Todo";
import { deleteTodo, toggleTodo } from "../actions/todos";

function Todos({ todos, isCompletedHandler, todoDeleteHandler }) {
  localStorage.setItem("todos", JSON.stringify(todos));
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

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  todoDeleteHandler: id => dispatch(deleteTodo(id)),
  isCompletedHandler: id => dispatch(toggleTodo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos);
