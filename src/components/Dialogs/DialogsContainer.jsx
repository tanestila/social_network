import { connect } from "react-redux";
import { compose } from "redux";
import {
  sendMessageActionCreator,
  updateMessageBodyActionCreator,
} from "../../redux/reducer/dialogsReducer";
import { withAuthRedirect } from "../hoc/AuthRedirect";
import Dialogs from "./Dialogs";

const mapStateToProps = (state) => {
  return {
    messages: state.dialogsPage.messages,
    dialogs: state.dialogsPage.dialogs,
    newMessageBody: state.dialogsPage.newMessageBody,
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

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
