import React from "react";
import Preloader from "../../common/preloader/Preloader";
import s from "./ProfileInfo.module.css";
// import ProfileStatus from "./ProfileStatus";
import ProfileStatusHooks from "./ProfileStatusHooks";
const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  } else
    return (
      <div>
        {/* <div className={s.box}>
          <img src="https://wallpaperaccess.com/full/429863.jpg" alt="" />
        </div> */}
        <div className={s.descriptionBlock}>
          <div className={s.item}>
            <img src={props.profile.photos.large} alt="" />
          </div>

          <div className={s.item}>
            <div className={s.nameBox}>
              <h3>{props.profile.fullName}</h3>
              <ProfileStatusHooks
                status={props.status}
                updateStatus={props.updateStatus}
              />
            </div>

            <div>
              <div className={s.infoBox}>
                <p>Bio</p>
                <p>{props.profile.aboutMe}</p>
              </div>
              {props.profile.lookingForAJob ? (
                <div className={s.infoBox}>
                  <p>Looking for a job</p>
                  <p>{props.profile.lookingForAJobDescription}</p>
                </div>
              ) : null}
              {Object.keys(props.profile.contacts).length ? (
                <div className={s.infoBox}>
                  <p>Contacts</p>
                  {Object.keys(props.profile.contacts).map((contact) =>
                    props.profile.contacts[contact] ? (
                      <p>
                        {contact} :{" "}
                        <a href={props.profile.contacts[contact]}>
                          {props.profile.contacts[contact]}
                        </a>
                      </p>
                    ) : null
                  )}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
};
export default ProfileInfo;
