import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
  return <header className={s.header}>
    <img alt="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQMSnkj-RZcyHanSi6kGpgq-igu6HChcNtPg&usqp=CAU" />
    <div className={s.loginBlock}>
      {props.isAuth ?
        <p>{props.login}</p>
        : <NavLink to={'/login'}>Login</NavLink>
      }
    </div>
  </header>
}
export default Header;