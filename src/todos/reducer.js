import { TOGGLE_TODO } from './actionTypes.js';

export default (state = [], action) => {
  switch (action.type) {
    case TOGGLE_TODO: {
      return state.map(todoItem => {
        console.log(todoItem);
        if (todoItem.id === action.id) {
          return { ...todoItem, completed: !todoItem.completed };
        } else {
          return todoItem;
        }
      });
    }
    default: {
      return state;
    }
  }
};
