import React from 'react';
import Preloader from '../../UI/preloader/Preloader';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  else
    return <div>
      <div className={s.box}>
        <img src="https://wallpaperaccess.com/full/429863.jpg" alt="" />
      </div>

      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} alt="" />
        <h3>{props.profile.fullName}</h3>
        <p>{props.profile.aboutMe}</p>
        <p>Looking for a job {props.profile.lookingForAJob ? "yes" : "no"}</p>
        <p>{props.profile.lookingForAJobDescription}</p>
        {Object.keys(props.profile.contacts)
          .map(contact => props.profile.contacts[contact] ?
          <p><strong>{contact}</strong> : {props.profile.contacts[contact]}</p>
          : null
          )}
      </div>
    </div>


}
export default ProfileInfo;