import { createStore, combineReducers } from 'redux';

import { reducer as addTodoReducer } from './AddTodo';
import { reducer as filterReducer } from './filter';

const reducer = combineReducers({
  todos: addTodoReducer,
  filter: filterReducer
});

export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
