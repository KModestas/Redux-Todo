import React from 'react';
import { connect } from 'react-redux';
import { addTodo, todoInput } from '../actions';

const AddTodo = (props) => (
  <form onSubmit={(e) => {

    e.preventDefault();

    const input = e.target.userInput.value;
    const completed = false;

    props.dispatch(addTodo(input, completed));

    // makes value empty when submitting todo which disbales addtodo button
    const emptyInput = '';
    props.dispatch(todoInput(emptyInput));

    


  }}>
    <input onChange={(e)=> {
      props.dispatch(todoInput(e.target.value));
    }}
    placeholder="I need to.." type="text" name="userInput" value={props.todos} />
    <button disabled={!props.todos}>Add Todo</button>
  </form>
);


const mapStatetoProps = (state) => ({
  todos: state.todos.newTodo
});

export default connect(mapStatetoProps)(AddTodo);
// connected component to redux which gives us access to dispatch function
