import { LOGIN_SUCCESSFUL } from "../actions/types";

const initialState = {
  logged: false,
  nombre: '',
};

export const loginReducer = (state = initialState, action) => {
  // Desestructurando el type y el payload de action
  const { type, payload } = action;
  // console.log(payload.username, payload.password)
  switch (type) {
    case LOGIN_SUCCESSFUL:
      return { ...state, nombre: payload.username, logged: true };
    default:
      return state;
  }
};

// export const logoutReducer = (state = initialState) => {
//     return {
//       ...state, 
//       logged: false,
//       nombre: null
//     };
// };