import { createStore } from 'redux';
import rootReducer from './reducers'; // will look for index.js by default

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
