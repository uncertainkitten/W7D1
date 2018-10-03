import React from 'react';
import {TodoListItem} from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    this.props.fetchTodos();
  }

  render () {
    const listItems = this.props.todos.map(todo =>
      (<TodoListItem key={todo.id} todo={todo} receiveTodo={receiveTodo}/>
    ));

    return (
      <div>
        <ul>{listItems}</ul>
        <TodoForm receiveTodo={receiveTodo}/>
      </div>
    );
  }
}

export default TodoList;
