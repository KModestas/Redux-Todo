import { combineReducers } from 'redux';
import todos from './todos';

const rootReducer = combineReducers({
  todos
});

export default rootReducer;

// combines all the reducers in your app. In this case there is only one reducer but for larger apps this is crucial.
