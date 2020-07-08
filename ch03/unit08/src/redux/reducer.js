import {
  SET_TRANSACTION_LIST,
  SET_MODAL_MODE,
  SET_SEARCH_RESULT,
} from './types';

const initState = {
  ids: [],
  entites: {},
  searchIds: [],
  searchEntites: {},
  modalMode: '구매',
};

console.log('리듀서');

const reducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_TRANSACTION_LIST: {
      // 그래프DB
      const ids = payload.map((entity) => entity['id']);
      const entites = payload.reduce(
        (finalEntites, entity) => ({
          ...finalEntites,
          [entity['id']]: entity,
        }),
        {}
      );
      console.log('리듀서실행됬다');
      return {
        ...state,
        ids,
        entites,
      };
    }
    case SET_SEARCH_RESULT: {
      // 그래프DB
      const searchIds = payload.map((entity) => entity.id);
      const searchEntites = payload.reduce((finalEntites, entity) => {
        console.log(
          'set_search_result',
          finalEntites,
          entity,
          entity['id'],
          entity.id
        );
        return {
          ...finalEntites,
          [entity.id]: entity,
        };
      });
      return {
        ...state,
        searchIds,
        searchEntites,
      };
    }
    case SET_MODAL_MODE: {
      return {
        modalMode: payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
