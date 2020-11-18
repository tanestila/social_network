import authReducer from "./reducer/authReducer";
import dialogsReducer from "./reducer/dialogsReducer";
import profileReducer from "./reducer/profileReducer";
import usersReducer from "./reducer/usersReducer";

const { createStore, combineReducers } = require("redux");

let reducers = combineReducers({
  auth: authReducer,
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer
});

let store = createStore(reducers);

export default store;