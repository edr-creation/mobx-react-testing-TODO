import React from 'react';
import { observer } from 'mobx-react';
import todoList from '../../stores/TodoList';

const TodoView = observer(({ todo, completed, onComplete }) => {
  const handleClick = () => {
    todoList.finishTodo(todo);
  };
  return (
    <li className="list-group-item" key={todo.id}>
      {completed ? <del>{todo.name}</del> : todo.name}
      {!completed ? (
        <button
          onClick={handleClick}
          type="button"
          className="close"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      ) : null}
    </li>
  );
});

export default TodoView;
