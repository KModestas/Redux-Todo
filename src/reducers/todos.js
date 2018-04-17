const initialState = {
  data: [],
  newTodo: ''
};

const todos = (state = initialState, action) => {

  switch(action.type) {
    case 'ADD_TODO': {
      return {
        ...state,
        data: [...state.data, {
          text: action.text,
          id: action.id,
          completed: action.completed
        }]
      };
    }

    case 'TODO_INPUT': { // wrap each block in curlies
      return {
        ...state,
        newTodo: action.input
      };
    }

    case 'DELETE_TODO': {
      const todos = state.data.filter(todo => todo.id !== action.id);
      return {
        ...state,
        data: todos
      };
    }

    case 'RESET_LIST': {
      return {
        ...state,
        data: []
      };
    }

    case 'TOGGLE_COMPLETED': {
      const todos = state.data.map((todo, i) => {
        if (i === action.index) todo.completed = !todo.completed;
        return todo;
      });
      return {
        ...state,
        data: todos
      };
    }

    default:
      return state;
  }
};

export default todos;
