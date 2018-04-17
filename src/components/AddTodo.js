import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const AddTodo = (props) => (
  <form onSubmit={(e) => {

    e.preventDefault();

    const input = e.target.userInput.value;
    props.dispatch(addTodo(input));

    e.target.userInput.value = '';
  }}>
    <input placeholder="I need to.." type="text" name="userInput" />
    <button>Add  Todo</button>
  </form>
);

export default connect()(AddTodo);
// connected component to redux which gives us access to dispatch function
