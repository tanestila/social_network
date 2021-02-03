import { stopSubmit } from "redux-form";
import { authAPI } from "../../api/api";

const SET_USER_DATA = "auth/SET_USER_DATA";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const setUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
});

export const getAuthDataThunkCreator = () => {
  return async (dispatch) => {
    let response = await authAPI.me();
    if (response.resultCode === 0) {
      dispatch(
        setUserData(
          response.data.id,
          response.data.email,
          response.data.login,
          true
        )
      );
    }
  };
};

export const loginThunkCreator = (email, password, rememberMe) => {
  return async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe);
    if (response.resultCode === 0) {
      dispatch(getAuthDataThunkCreator());
    } else {
      let action = stopSubmit("login", {
        _error:
          response.messages.length > 0 ? response.messages[0] : "some error",
      });
      dispatch(action);
    }
  };
};

export const logoutThunkCreator = () => {
  return async (dispatch) => {
    let response = await authAPI.logout();
    if (response.resultCode === 0) {
      dispatch(setUserData(null, null, null, false));
    }
  };
};

export default authReducer;
