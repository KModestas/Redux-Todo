// actions will dictate how your state changes by passing in information to the reducer

// addtodo, resetlist, togglecompleted,

const ADD_TODO = 'ADD_TODO';
export const addTodo = (text) => ({
  type: ADD_TODO,
  text,
  id: Math.random()
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
//
// const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';
// export const toggleCompleted = () => ({
//   type: TOGGLE_COMPLETED
// });
