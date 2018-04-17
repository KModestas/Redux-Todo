// actions will dictate how your state changes by passing in information to the reducer


const ADD_TODO = 'ADD_TODO';
export const addTodo = (text) => ({
  type: ADD_TODO,
  text,
  id: Math.random()
});

const TODO_INPUT = 'TODO_INPUT';
export const todoInput = (inputValue) => ({
  type: TODO_INPUT,
  input: inputValue
});

const DELETE_TODO = 'DELETE_TODO';
export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  id
});

const RESET_LIST = 'RESET_LIST'; //
export const resetList = () => ({
  type: RESET_LIST
});

const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';
export const toggleCompleted = (index, completed) => ({
  type: TOGGLE_COMPLETED,
  index,
  completed
});
