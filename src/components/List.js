import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../actions';

const List = (props) => (
  <ol>
    {props.todos.map((todo, i) => (
      <li key={i}>
        {todo.text}
        <button onClick={()=> props.dispatch(deleteTodo(todo.id))}>X</button>
      </li>
    ))}
  </ol>
);

const mapStatetoProps = (state) => ({
  todos: state.todos.data
});

export default connect(mapStatetoProps)(List);