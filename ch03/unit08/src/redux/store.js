import { createStore, applyMiddleware } from 'redux';
// 미들웨어 불러오기
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
// 리듀서 불러오기
import rootReducer from './reducer';

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;
