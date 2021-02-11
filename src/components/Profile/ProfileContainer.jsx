import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  getProfileThunkCreator,
  getStatus,
  updateStatus,
  savePhoto,
  saveProfile,
} from "../../redux/reducer/profileReducer";
import { withRouter } from "react-router-dom";

class ProfileContainer extends React.Component {
  async refreshProfile() {
    let userId = this.props.match.params.userId
      ? this.props.match.params.userId
      : this.props.authorizedUserId;
    if (!userId) {
      this.props.history.push("/login");
    }
    this.props.getProfile(userId);
    this.props.getUserStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }

  render() {
    return (
      <div>
        <Profile
          {...this.props}
          isOwner={!this.props.match.params.userId}
          profile={this.props.profile}
          status={this.props.status}
          updateStatus={this.props.updateStatus}
          savePhoto={this.props.savePhoto}
          saveProfile={this.props.saveProfile}
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
  savePhoto,
  saveProfile,
})(withRouter(ProfileContainer));
