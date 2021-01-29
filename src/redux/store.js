import authReducer from "./reducer/authReducer";
import dialogsReducer from "./reducer/dialogsReducer";
import profileReducer from "./reducer/profileReducer";
import usersReducer from "./reducer/usersReducer";
import { reducer as formReducer } from "redux-form";
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import appReducer from "./reducer/appReducer";

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
/* eslint-enable */

let reducers = combineReducers({
  auth: authReducer,
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  form: formReducer,
  app: appReducer,
});

let store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
