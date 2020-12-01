import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={s.header}>
      <span className={s.title}>React Social Network</span>
      <div className={s.loginBlock}>
        {props.isAuth ? (
          <p>{props.login}</p>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};
export default Header;
