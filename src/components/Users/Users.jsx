import React from 'react';
import s from './Users.module.css'
import userPhoto from '../../assets/images/user.png'
import { NavLink } from 'react-router-dom';

let Users = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  let currentPage = props.currentPage;

  let startPage;
  let endPage;
  if (pagesCount <= 10) {
    startPage = 1;
    endPage = pagesCount;
  } else if (pagesCount > 10) {
    if (currentPage > 6) {
      startPage = currentPage - 5;
      endPage = currentPage + 4;
    }
    startPage = 1;
    endPage = 10;
  }

  let pages = [];
  for (let i = startPage; i <= endPage; i++) {
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
      {
        pagesCount > 10 ?
          <>
            ...
            <span
              className={props.currentPage === pagesCount ?
                s.selectedPage + ' ' + s.page
                : s.page}
              onClick={() => { props.onPageChanged(pagesCount) }}
              key={pagesCount}
            >
              {' ' + pagesCount + ' '}
            </span>
          </>
          : null
      }

    </div>
    {
      props.users.map(u => <div key={u.id}>
        <span>
          <div>
            <NavLink to={'/profile/' + u.id}>
              <img
                src={u.photos.small !== null ? u.photos.small : userPhoto}
                alt={u.name}
                className={s.userPhoto}
              />
            </NavLink>
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