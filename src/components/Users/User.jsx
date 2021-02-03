import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import { NavLink } from "react-router-dom";

let User = ({ user, followingInProgress, onToggleFollow }) => {
  return (
    <div>
      <span>
        <div>
          <NavLink to={"/profile/" + user.id}>
            <img
              src={user.photos.small !== null ? user.photos.small : userPhoto}
              alt={user.name}
              className={s.userPhoto}
            />
          </NavLink>
        </div>
        <div>
          <button
            disabled={followingInProgress.some((id) => id === user.id)}
            onClick={() => onToggleFollow(user.id, user.followed)}
          >
            {user.followed ? "Unfollow" : "Follow"}
          </button>
        </div>
      </span>
      <span>
        <span>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </span>
        <span>
          <div></div>
          <div></div>
        </span>
      </span>
    </div>
  );
};

export default User;
