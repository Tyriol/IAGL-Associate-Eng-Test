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
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.task}
          onChange={this.handleChange}
          placeholder="Add a new todo"
        />
        <button type="submit">Add Todo</button>
      </form>
    );
  }
}

export default connect(null, { addTodo })(TodoForm);
