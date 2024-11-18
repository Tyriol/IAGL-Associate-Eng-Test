import React from "react";
import TodoList from "./component/TodoList";
import TodoForm from "./component/TodoForm";
import "./styles.css";

export default function TodoApp() {
  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}
