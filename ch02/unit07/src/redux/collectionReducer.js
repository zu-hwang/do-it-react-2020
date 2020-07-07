import { SET_COLLETION } from './types';
// 초기값
const initState = {
  ids: [],
  entities: {},
};

const collectionReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_COLLETION:
      /**
       * payload = collection
       *
       *      {
       *        id: 1,
       *        name: 'hwang',
       *        age: 20,
       *      },
       *      {
       *        id: 2,
       *        name: 'zuzu',
       *        age: 30,
       *      },
       *  ];
       */
      const ids = payload.map((entity) => {
        return entity['id']; // 최종 [1,2]가 리턴된다.
        // {id:1,name:'hwang',age20}
      });
      const entities = payload.reduce((finalEntities, entity) => {
        return {
          ...finalEntities,
          [entity['id']]: entity, // { 1 : entity }
        };
      }, {}); // reduce(CB,{}) 햐객체에 최종 결과를 담는다.

      return {
        ...state,
        ids,
        entities,
      };
    default:
      return state;
  }
};

export default collectionReducer;
