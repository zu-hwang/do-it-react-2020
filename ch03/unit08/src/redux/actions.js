import {
  SET_TRANSACTION_LIST,
  SET_MODAL_MODE,
  SET_SEARCH_RESULT,
} from './types';

export const setTransactionList = (transactionList) => {
  return {
    type: SET_TRANSACTION_LIST,
    payload: transactionList,
  };
};

export const setModalMode = (mode) => {
  return {
    type: SET_MODAL_MODE,
    payload: mode,
  };
};

export const setSearchResult = (result) => {
  return {
    type: SET_SEARCH_RESULT,
    payload: result,
  };
};
