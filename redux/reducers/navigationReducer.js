const initialState = {
    activeScreen: 'Mis Productos',
};

export const navigationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ACTIVE_SCREEN':
            return {
                ...state,
                activeScreen: action.payload,
            };
        default:
            return state;
    }
};