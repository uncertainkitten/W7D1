import React from 'react';
import { uniqueId } from '../../util/todo_api_util';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: '', body: ''};
    this.updateValue = this.updateValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  updateValue(name) {
    return (e) => this.setState({[name]: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const todo = {title: this.state.title, body: this.state.body, done: "false"};
    this.props.createTodo(todo);
    this.setState({title: '', body: ''});
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Title:</label>
        <input onChange={this.updateValue('title')} value={this.state.title}/>
        <br/>
        <label>Body:</label>
        <input onChange={this.updateValue('body')} value={this.state.body}/>
        <br/>
        <input type="submit" value="Start Do-al!"/>
      </form>
    );
  }
}

export default TodoForm;
