import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import todoList from '../../stores/TodoList';

const AddTodo = observer(
  class AddTodo extends Component {
    input = observable.box('');

    handleChange = e => {
      e.preventDefault();
      this.input.set(e.target.value);
    };

    handleSubmit = e => {
      e.preventDefault();
      todoList.addTodo({
        id: Math.random(),
        name: this.input.value,
        completed: false
      });
    };

    render() {
      return (
        <form onSubmit={this.handleSubmit} className="form-inline">
          <input
            placeholder="Add Todo..."
            type="text"
            className="form-control form-control-lg rounded-0"
            name="newTodo"
            id="newTodo"
            value={this.input}
            onChange={this.handleChange}
          />
          <button className="btn btn-primary btn-lg rounded-0" type="submit">
            Add
          </button>
        </form>
      );
    }
  }
);

export default AddTodo;
