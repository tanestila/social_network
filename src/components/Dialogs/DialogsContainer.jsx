import { connect } from "react-redux";
import { compose } from "redux";
import { sendMessageActionCreator } from "../../redux/reducer/dialogsReducer";
import { withAuthRedirect } from "../hoc/AuthRedirect";
import Dialogs from "./Dialogs";
import { getDialogs } from "../../redux/reducer/dialogsReducer";

const mapStateToProps = (state) => {
  return {
    messages: state.dialogsPage.messages,
    dialogs: state.dialogsPage.dialogs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (body) => {
      dispatch(sendMessageActionCreator(body));
    },
    getDialogs: () => {
      dispatch(getDialogs());
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
