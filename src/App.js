import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Redirect, Route, Switch } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { connect } from "react-redux";
import { getAuthDataThunkCreator } from "./redux/reducer/authReducer";
import { initializeThunkCreator } from "./redux/reducer/appReducer";
import Preloader from "./components/common/preloader/Preloader";

class App extends Component {
  catchAllUnhandledErrors = (reason, promise) => {
    alert("Some error");
  };

  componentDidMount() {
    this.props.initialize();
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }

  componentWillUnmount() {
    window.removeEventListener(
      "unhandledrejection",
      this.catchAllUnhandledErrors
    );
  }

  render() {
    if (!this.props.initialized) return <Preloader />;
    else
      return (
        <div className="app-wrapper">
          <HeaderContainer />
          <Navbar />
          <div className="app-wrapper-content">
            <Switch>
              <Route exact path="/dialogs" component={DialogsContainer} />
              <Route path="/profile/:userId?" component={ProfileContainer} />
              <Route path="/users" component={UsersContainer} />
              <Route path="/login" component={Login} />
              <Redirect exact from="/" to="/profile" />
              <Route path="*" render={() => <div>404 not found</div>} />
            </Switch>
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
