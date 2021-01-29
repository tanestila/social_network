import { stopSubmit } from "redux-form";
import { authAPI } from "../../api/api";

const SET_USER_DATA = "SET_USER_DATA";

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
  return (dispatch) => {
    return authAPI.me().then((data) => {
      if (data.resultCode === 0) {
        dispatch(
          setUserData(data.data.id, data.data.email, data.data.login, true)
        );
      }
    });
  };
};

export const loginThunkCreator = (email, password, rememberMe) => {
  return (dispatch) => {
    authAPI.login(email, password, rememberMe).then((data) => {
      if (data.resultCode === 0) {
        dispatch(getAuthDataThunkCreator());
      } else {
        let action = stopSubmit("login", {
          _error: data.messages.length > 0 ? data.messages[0] : "some error",
        });
        dispatch(action);
      }
    });
  };
};

export const logoutThunkCreator = () => {
  return (dispatch) => {
    authAPI.logout().then((data) => {
      if (data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false));
      }
    });
  };
};

export default authReducer;
