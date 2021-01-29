import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  getProfileThunkCreator,
  getStatus,
  updateStatus,
} from "../../redux/reducer/profileReducer";
import { withRouter } from "react-router-dom";

class ProfileContainer extends React.Component {
  async componentDidMount() {
    let userId = this.props.match.params.userId
      ? this.props.match.params.userId
      : this.props.authorizedUserId;
    if (!userId) {
      this.props.history.push("/login");
    }
    this.props.getProfile(userId);
    this.props.getUserStatus(userId);
  }

  render() {
    return (
      <div>
        <Profile
          {...this.props}
          profile={this.props.profile}
          status={this.props.status}
          updateStatus={this.props.updateStatus}
        />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  isAuth: state.auth.isAuth,
  authorizedUserId: state.auth.userId,
});

export default connect(mapStateToProps, {
  getProfile: getProfileThunkCreator,
  getUserStatus: getStatus,
  updateStatus,
})(withRouter(ProfileContainer));
