var React = require('react');
var PropTypes = require('prop-types');
import {allTodos, todoTitles} from '../../reducers/selectors';

export const TodoListItem = ({todo, receiveTodo}) => {
  return <li>{todo.title}</li>;
};
