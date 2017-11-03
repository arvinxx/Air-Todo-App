import { TOGGLE_TODO } from './actionTypes';

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id: id
});
