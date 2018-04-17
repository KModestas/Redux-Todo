import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo, toggleCompleted } from '../actions';

const List = (props) => (
  <ol>
    {props.todos.map((todo, i) => (
      <li
        key={i}
        onClick={()=> {
          props.dispatch(toggleCompleted(i));
        }}
        className={ todo.completed ? 'completed' : '' }
      >
        {todo.text}
        <button className="remove" onClick={()=> props.dispatch(deleteTodo(todo.id))}>X</button>
      </li>
    ))}
  </ol>
);

const mapStatetoProps = (state) => ({
  todos: state.todos.data
});

export default connect(mapStatetoProps)(List);
