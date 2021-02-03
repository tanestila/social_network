import { getAuthDataThunkCreator } from "./authReducer";

const SET_INITIALIZED = "app/SET_INITIALIZED";

let initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZED:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

export const setInitialized = () => ({
  type: SET_INITIALIZED,
});

export const initializeThunkCreator = () => {
  return async (dispatch) => {
    await dispatch(getAuthDataThunkCreator());
    dispatch(setInitialized());
  };
};

export default appReducer;
