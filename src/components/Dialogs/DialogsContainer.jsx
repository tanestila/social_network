import { connect } from "react-redux";
import {
  sendMessageActionCreator,
  updateMessageBodyActionCreator,
} from "../../redux/reducer/dialogsReducer";
import Dialogs from "./Dialogs";

const mapStateToProps = (state) => {
  return {
    messages: state.dialogsPage.messages,
    dialogs: state.dialogsPage.dialogs,
    newMessageBody: state.dialogsPage.newMessageBody,
    isAuth: state.auth.isAuth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(sendMessageActionCreator());
    },
    updateNewPostText: (body) => {
      dispatch(updateMessageBodyActionCreator(body));
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
