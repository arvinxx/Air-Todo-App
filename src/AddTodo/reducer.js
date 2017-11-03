import { ADD_TODO } from './actionTypes.js';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TODO: {
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    }
    default: {
      return state;
    }
  }
};
