import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { loginReducer } from './reducers/authReducer';
import { navigationReducer } from './reducers/navigationReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  navigation: navigationReducer,
  // Otros reducers que vas a usar después
});

export const store = createStore(rootReducer);