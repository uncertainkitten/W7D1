import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import Store from './store/store';
import {receiveTodos, receiveTodo, fetchTodos} from './actions/todo_actions';
import {allTodos} from './reducers/selectors.js';

document.addEventListener('DOMContentLoaded', () => {
  const store = Store();
  window.store = store;
  window.receiveTodos = receiveTodos;
  window.receiveTodo = receiveTodo;
  window.allTodos = allTodos;
  window.fetchTodos = fetchTodos;
  ReactDOM.render(<Root store={store} />, document.getElementById('content'));
});
