import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../../api/api";

const SET_USER_DATA = "auth/SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "auth/GET_CAPTCHA_URL_SUCCESS";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        captchaUrl: action.captchaUrl,
      };
    default:
      return state;
  }
};

export const setUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
});

export const getCaptchaUrlSuccess = (captchaUrl) => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  captchaUrl,
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

export const loginThunkCreator = (email, password, rememberMe, captcha) => {
  return async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha);
    if (response.resultCode === 0) {
      dispatch(getAuthDataThunkCreator());
    } else {
      if (response.resultCode === 10) {
        dispatch(getCaptchaUrlThunkCreator());
      }

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

export const getCaptchaUrlThunkCreator = () => {
  return async (dispatch) => {
    let response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
  };
};

export default authReducer;
