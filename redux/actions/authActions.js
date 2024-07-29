import { LOGIN_SUCCESSFUL } from './types';


//Aca van las acciones posibles que pueden ocurrir en la store bajo el regimen de LOGIN
export const loginSuccess = (userData) => ({
  type: LOGIN_SUCCESSFUL,
  payload: userData,
});

// export const logout = () => ({
//   type: USER_LOGOUT,
// });