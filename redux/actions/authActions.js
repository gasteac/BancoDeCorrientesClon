import { LOGIN_SUCCESSFUL } from './types';

export const loginSuccess = (newData) => ({
  type: LOGIN_SUCCESSFUL,
  payload: newData,
});