import React, { useEffect, useState } from "react";

const ProfileStatusHooks = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };
  const onChangeStatus = (e) => {
    setStatus(e.currentTarget.value);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  return (
    <>
      {editMode ? (
        <div>
          <input
            type="text"
            value={status}
            onBlur={deactivateEditMode}
            onChange={onChangeStatus}
            autoFocus
          />
        </div>
      ) : (
        <div>
          <span onDoubleClick={activateEditMode}>
            {status || "Set new status"}
          </span>
        </div>
      )}
    </>
  );
};
export default ProfileStatusHooks;
