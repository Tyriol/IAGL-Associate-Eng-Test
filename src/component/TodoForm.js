// TodoForm.js
import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

class TodoForm extends Component {
  state = {
    task: "",
  };

  handleChange = (e) => {
    this.setState({ task: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.task.trim()) return;

    this.props.addTodo({ task: this.state.task });
    this.setState({ task: "" });
  };

  render() {
    return (
      <form className="add-todo" onSubmit={this.handleSubmit}>
        <label htmlFor="todo-input">Add a new todo and press Enter</label>
        <input
          type="text"
          value={this.state.task}
          onChange={this.handleChange}
          placeholder="Add a new todo"
          name="todo-input"
        />
      </form>
    );
  }
}

export default connect(null, { addTodo })(TodoForm);
