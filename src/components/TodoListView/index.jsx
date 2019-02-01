import React from 'react';
import { observer } from 'mobx-react';
import TodoView from '../TodoView';

const TodoListView = observer(({ todos, onComplete }) => {
  return (
    <React.Fragment>
      <ul className="list-group">
        {todos.unfinishedTodos.map(todo => {
          return <TodoView key={todo.id} todo={todo} />;
        })}
        {todos.finishedTodos.map(todo => {
          return <TodoView key={todo.id} completed="true" todo={todo} />;
        })}
      </ul>
    </React.Fragment>
  );
});

export default TodoListView;
