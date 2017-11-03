import { ADD_TODO } from './actionTypes';

let nextTodoId = 0;

export const addTodo = text => ({
  type: ADD_TODO,
  completed: false,
  id: nextTodoId++,
  text: text
});
