import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../utils/validators";
import { Textarea } from "../common/FormsControls/FormsControls";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

let maxLengthCreator100 = maxLengthCreator(100);

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name={"newMessageBody"}
          placeholder="Enter your message"
          validate={[required, maxLengthCreator100]}
        />
      </div>
      <div>
        <button>Add</button>
      </div>
    </form>
  );
};

const AddMessageReduxForm = reduxForm({ form: "dialogAddMessageForm" })(
  AddMessageForm
);

const Dialogs = (props) => {
  let addNewMessage = (values) => {
    props.addPost(values.newMessageBody);
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
