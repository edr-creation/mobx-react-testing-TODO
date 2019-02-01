import { observable, action, computed, decorate } from 'mobx';

class TodoList {
  todos = [];

  get allTodos() {
    return this.todos;
  }

  get unfinishedTodos() {
    return this.todos.filter(todo => !todo.completed);
  }

  get finishedTodos() {
    return this.todos.filter(todo => todo.completed);
  }

  finishTodo(todo) {
    const newTodos = [...this.todos];
    const finishedTodo = newTodos.indexOf(todo);
    todo.completed = true;
    newTodos[finishedTodo] = todo;
    this.todos = newTodos;
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  removeTodo(todo) {
    const newTodos = [...this.todos];
    const todoToRemove = newTodos.indexOf(todo);
    newTodos.splice(todoToRemove, 1);
    this.todos = newTodos;
  }
}
decorate(TodoList, {
  todos: observable,
  unfinishedTodos: computed,
  finishedTodos: computed,
  finishTodo: action,
  addTodo: action
});

const todoList = new TodoList();
export default todoList;
