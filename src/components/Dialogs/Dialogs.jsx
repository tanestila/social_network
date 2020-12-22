import React from "react";
import { Field, reduxForm } from "redux-form";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={"textarea"} name={"newMessageBody"} />
      </div>
      <div>
        <button>Add</button>
      </div>
    </form>
  );
};

const AddMessageReduxForm = reduxForm({ form: "login" })(AddMessageForm);

const Dialogs = (props) => {
  let newMessageElement = React.createRef();

  let onTextChange = () => {
    let text = newMessageElement.current.value;
    props.updateNewPostText(text);
  };

  let sendMessage = () => {
    props.addPost();
  };

  let addNewMessage = (values) => {
    props.addPost();
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {props.dialogs.map((d) => (
          <DialogItem name={d.name} id={d.id} />
        ))}
      </div>

      <div className={s.messages}>
        {props.messages.map((m) => (
          <Message message={m.message} id={m.id} />
        ))}

        <div>
          <AddMessageReduxForm onSubmit={addNewMessage} />
        </div>
      </div>
    </div>
  );
};
export default Dialogs;
