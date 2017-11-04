import { SET_FILTER } from './actionTypes';

export const setFilter = filterType => ({
  type: SET_FILTER,
  filter: filterType
});
