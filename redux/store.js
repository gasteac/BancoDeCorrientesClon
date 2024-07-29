import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { loginReducer } from './reducers/AuthReducer';

const rootReducer = combineReducers({
  login: loginReducer, 
  // Otros reducers que vas a usar después
});

export const store = createStore(rootReducer);