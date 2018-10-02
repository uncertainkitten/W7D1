import React from 'react';
import {TodoListItem} from './todo_list_item';
import TodoForm from './todo_form'

export const todoList = ({todos, receiveTodo}) => {

  const listItems = todos.map(todo =>
    (<TodoListItem key={todo.id} todo={todo} receiveTodo={receiveTodo}/>
  ));

  return (
    <div>
      <ul>{listItems}</ul>
      <TodoForm receiveTodo={receiveTodo}/>
    </div>
  )
};
