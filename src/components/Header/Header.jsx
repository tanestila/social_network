import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={s.header}>
      <span className={s.title}>React Social Network</span>
      <div className={s.loginBlock}>
        {props.isAuth ? (
          <div>
            <p>Hello, {props.login}</p>
            <button onClick={props.logout}>Logout</button>
          </div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};
export default Header;
