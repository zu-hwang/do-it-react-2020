import { createStore, applyMiddleware } from 'redux';
// 미들웨어 불러오기
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
// 리듀서 불러오기
import reducer from './reducer';

console.log('스토어');
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;
