import { authAPI } from "../../api/api";
import { getAuthDataThunkCreator } from "./authReducer";

const SET_INITIALIZED = "SET_INITIALIZED";

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
  return (dispatch) => {
    let promise = dispatch(getAuthDataThunkCreator());
    promise.then(() => {
      dispatch(setInitialized());
    });
  };
};

export default appReducer;
