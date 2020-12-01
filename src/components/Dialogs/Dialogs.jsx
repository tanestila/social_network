import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let newMessageElement = React.createRef();

  let onTextChange = () => {
    let text = newMessageElement.current.value;
    props.updateNewPostText(text);
  };

  let sendMessage = () => {
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
          <div>
            <textarea
              onChange={onTextChange}
              value={props.newMessageBody}
              ref={newMessageElement}
            ></textarea>
          </div>
          <div>
            <button onClick={sendMessage}>Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dialogs;
