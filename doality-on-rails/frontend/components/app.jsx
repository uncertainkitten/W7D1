import React from 'react';
import PropTypes from 'prop-types';
import TodoListContainer from './todos/todo_list_container';

class App extends React.Component {
  render () {
    return (
      <div>
        <h1>Doality</h1>
        <TodoListContainer/>
      </div>
    );
  }
}

export default App;
