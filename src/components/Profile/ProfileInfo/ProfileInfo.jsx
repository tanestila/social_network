import React, { useState } from "react";
import Preloader from "../../common/preloader/Preloader";
import s from "./ProfileInfo.module.css";
// import ProfileStatus from "./ProfileStatus";
import userPhoto from "../../../assets/images/user.png";
import ProfileStatusHooks from "./ProfileStatusHooks";
import ProfileForm from "./ProfileDataForm";

const ProfileInfo = (props) => {
  let [editMode, setEditMode] = useState(false);

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = (formData) => {
    props.saveProfile(formData).then(() => {
      setEditMode(false);
    });
  };

  if (!props.profile) {
    return <Preloader />;
  } else
    return (
      <div>
        <div className={s.descriptionBlock}>
          <div className={s.item}>
            <img
              src={
                props.profile.photos.large !== null
                  ? props.profile.photos.large
                  : userPhoto
              }
              alt="user"
              className={s.userPhoto}
            />
            {props.isOwner && (
              <div>
                <input type="file" onChange={onMainPhotoSelected}></input>
              </div>
            )}
          </div>
          <div className={s.item}>
            <div className={s.nameBox}>
              <h3>{props.profile.fullName}</h3>
              <ProfileStatusHooks
                status={props.status}
                updateStatus={props.updateStatus}
                isOwner={props.isOwner}
              />
            </div>
            {editMode ? (
              <ProfileForm
                initialValues={props.profile}
                onSubmit={onSubmit}
                profile={props.profile}
              />
            ) : (
              <ProfileData
                profile={props.profile}
                isOwner={props.isOwner}
                toEditMode={() => {
                  setEditMode(true);
                }}
              />
            )}
          </div>
        </div>
      </div>
    );
};
export default ProfileInfo;

const ProfileData = ({ profile, isOwner, toEditMode }) => {
  return (
    <div>
      <div className={s.infoBox}>
        <p>About me</p>
        <p>{profile.aboutMe}</p>
      </div>

      <div className={s.infoBox}>
        <p>
          Looking for a job
          {profile.lookingForAJob ? " yes" : " no"}
        </p>
        {profile.lookingForAJob ? (
          <p> {profile.lookingForAJobDescription}</p>
        ) : null}
      </div>
      <div className={s.infoBox}>
        <p>My professional skills</p>
        <p> {profile.lookingForAJobDescription}</p>
      </div>

      <div className={s.infoBox}>
        <p>Contacts</p>
        {Object.keys(profile.contacts).map((contact) =>
          profile.contacts[contact] ? (
            <p key={contact}>
              {contact} :
              <a href={profile.contacts[contact]}>
                {profile.contacts[contact]}
              </a>
            </p>
          ) : null
        )}
      </div>
      {isOwner && <button onClick={toEditMode}>Edit</button>}
    </div>
  );
};
