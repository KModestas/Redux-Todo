import React from 'react';
import { connect } from 'react-redux';

const Heading = (props) => (
  <div>
    <h1>React / Redux Todo App</h1>
    <h2>You have <span>{ props.todos.filter(todo => !todo.completed).length }</span> todos to do</h2>
    <hr />
    <h3>Todo list</h3>
    <i><small>Click a Todo List Item to Check it off</small></i>
  </div>
);

const mapStatetoProps = (state) => ({
  todos: state.todos.data
});

export default connect(mapStatetoProps)(Heading);
