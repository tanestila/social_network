import { dialogsAPI } from "../../api/api";

const SEND_MESSAGE = "dialogs/SEND_MESSAGE";
const GET_DIALOGS_SUCCESS = "dialogs/GET_DIALOGS_SUCCESS";

let initialState = {
  dialogs: [],
  messages: [],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          { id: 5, message: action.newMessageBody },
        ],
      };
    case GET_DIALOGS_SUCCESS:
      return {
        ...state,
        dialogs: [...action.dialogs],
      };
    default:
      return state;
  }
};

export const sendMessageActionCreator = (newMessageBody) => ({
  type: SEND_MESSAGE,
  newMessageBody,
});

export const getDialogsSuccess = (dialogs) => ({
  type: GET_DIALOGS_SUCCESS,
  dialogs,
});

export const getDialogs = () => async (dispatch) => {
  let response = await dialogsAPI.getDialogs();
  dispatch(getDialogsSuccess(response));
};

export default dialogsReducer;
