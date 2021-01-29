import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { connect } from "react-redux";
import { getAuthDataThunkCreator } from "./redux/reducer/authReducer";
import { initializeThunkCreator } from "./redux/reducer/appReducer";
import Preloader from "./components/UI/preloader/Preloader";

class App extends Component {
  componentDidMount() {
    this.props.initialize();
  }

  render() {
    if (!this.props.initialized) return <Preloader />;
    else
      return (
        <div className="app-wrapper">
          <HeaderContainer />
          <Navbar />
          <div className="app-wrapper-content">
            <Route exact path="/dialogs" component={DialogsContainer} />
            <Route path="/profile/:userId?" component={ProfileContainer} />
            <Route path="/users" component={UsersContainer} />
            <Route path="/login" component={Login} />
          </div>
        </div>
      );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default connect(mapStateToProps, {
  getAuthData: getAuthDataThunkCreator,
  initialize: initializeThunkCreator,
})(App);
