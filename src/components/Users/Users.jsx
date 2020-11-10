import React from 'react';
import s from './Users.module.css'
import userPhoto from '../../assets/images/user.png'

let Users = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return <div>
    <div>
      {pages.map(p => {
        return <span
          className={props.currentPage === p ?
            s.selectedPage + ' ' + s.page
            : s.page}
          onClick={() => { props.onPageChanged(p) }}
          key={p}
        >
          {' ' + p + ' '}
        </span>
      })}
    </div>
    {
      props.users.map(u => <div key={u.id}>
        <span>
          <div>
            <img
              src={u.photos.small !== null ? u.photos.small : userPhoto}
              alt={u.name}
              className={s.userPhoto}
            />
          </div>
          <div>
            <button onClick={() => props.toggleFollow(u.id)}>{u.followed ? "Unfollow" : "Follow"}</button>
          </div>
        </span>
        <span>
          <span>
            <div>{u.name}</div>
            <div>{u.status}</div>
          </span>
          <span>
            <div></div>
            <div></div>
          </span>
        </span>
      </div>)
    }
  </div>
}

export default Users;