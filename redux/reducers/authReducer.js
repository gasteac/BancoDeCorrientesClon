import { LOGIN_SUCCESSFUL } from "../actions/types";

const initialState = {
  nombre: 'Sin Nombre',
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESSFUL:
      return { ...state, nombre: action.payload}; // Asegúrate de que `payload` es el nuevo nombre
    default:
      return state;
  }
};