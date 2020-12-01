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
    this.props.getProfile(this.props.match.params.userId);
    this.props.getUserStatus(this.props.match.params.userId);
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
});

export default connect(mapStateToProps, {
  getProfile: getProfileThunkCreator,
  getUserStatus: getStatus,
  updateStatus,
})(withRouter(ProfileContainer));
