const SEND_MESSAGE = "dialogs/SEND_MESSAGE";

let initialState = {
  dialogs: [{ id: 1, name: "dima" }],
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
    default:
      return state;
  }
};

export const sendMessageActionCreator = (newMessageBody) => ({
  type: SEND_MESSAGE,
  newMessageBody,
});

export default dialogsReducer;
