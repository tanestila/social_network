import React from 'react';
import s from './Users.module.css'

let Users = (props) => {
  return <div>
    {
      props.users.map(u => <div key={u.id}>
        <span>
          <div>
            <img
            src={u.photoURL}
            alt={u.fullname}
            className={s.userPhoto}
            />
            </div>
          <div>
            <button onClick={() => props.toggleFollow(u.id)}>{u.followed ? "Unfollow": "Follow" }</button>
          </div>
        </span>
        <span>
          <span>
            <div>{u.fullname}</div>
            <div>{u.status}</div>
          </span>
          <span>
            <div>{u.location.country}</div>
            <div>{u.location.city}</div>
          </span>
        </span>
      </div>)
    }
  </div>
}

export default Users;