
import { createStore, combineReducers } from 'redux';

import { reducer as addTodoReducer } from './AddTodo';

const reducer = combineReducers({
  todos: addTodoReducer
});


export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
