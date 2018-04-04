import { combineReducers } from 'redux';
import AppReducer from './reducer-app';

const Reducers = combineReducers({
  app: AppReducer,
});

export default Reducers;
