import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { loginThunkCreator } from "../../redux/reducer/authReducer";

class HeaderContainer extends React.Component {
  async componentDidMount() {
    this.props.authMe();
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { authMe: loginThunkCreator })(
  HeaderContainer
);
