import { createStore, combineReducers } from 'redux';

import { reducer as addTodoReducer } from './AddTodo';

import { reducer as todoListReducer } from './todos';

const reducer = combineReducers({
  todos: addTodoReducer,
  todosmod: todoListReducer,
  filter: () => 20
});

// 用来检验 reducer 是否成功导入
// console.log("Store");
// console.log("=============");
// console.log(reducer);

export default createStore(
  reducer,/* preloadedState, */
  +window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
