import { SET_COLLETION } from './types.js';

export const setCollection = (collection) => {
  return {
    type: SET_COLLETION,
    payload: collection,
  };
};
