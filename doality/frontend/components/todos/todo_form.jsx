import React from 'react';
import { uniqueId } from '../../util/todo_util';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: '', body: ''};
    this.updateValue = this.updateValue.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }


  updateValue(name) {
    return (e) => this.setState({[name]: e.currentTarget.value});
  }

  handleClick(e) {
    e.preventDefault();
    const todo = {id: uniqueId(), title: this.state.title, body: this.state.body};
    this.props.receiveTodo(todo);
  }

  render () {
    return (
      <form>
        <input onChange={this.updateValue('title')} value={this.state.title}/>
        <input onChange={this.updateValue('body')} value={this.state.body}/>
        <input type="submit" onClick={this.handleClick} value="Start Do-al!"/>
      </form>
    );
  }
}

export default TodoForm;
