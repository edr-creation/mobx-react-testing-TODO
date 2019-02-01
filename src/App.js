import React, { Component } from 'react';
import { observer } from 'mobx-react';

import TodoListView from './components/TodoListView';

import todoList from './stores/TodoList';
import AddTodo from './components/AddTodo';

const App = observer(
  class App extends Component {
    render() {
      todoList.addTodo({
        id: Math.random(),
        name: 'Train MobX',
        completed: false
      });
      todoList.addTodo({
        id: Math.random(),
        name: 'Read some books',
        completed: false
      });
      todoList.addTodo({
        id: Math.random(),
        name: 'Learn React',
        completed: true
      });
      return (
        <div className="container">
          <h1 className="display-3 text-center">Yes, an another TodoList...</h1>
          <AddTodo />
          <TodoListView todos={todoList} />
        </div>
      );
    }
  }
);

export default App;
