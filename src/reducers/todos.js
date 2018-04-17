const initialState = {
  data: []
};

const todos = (state = initialState, action) => {

  switch(action.type) {
    case 'ADD_TODO': {
      return {
        ...state,
        data: [...state.data, {
          text: action.text,
          id: action.id
        }]
      };
    }

    case 'DELETE_TODO': { // wrap each block in curlies
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

    default:
      return state;
  }
};

export default todos;
