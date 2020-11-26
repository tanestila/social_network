import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getProfileThunkCreator } from "../../redux/reducer/profileReducer";
import { withRouter } from "react-router-dom";

class ProfileContainer extends React.Component {
  async componentDidMount() {
    this.props.getProfile(this.props.match.params.userId);
  }

  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

export default connect(mapStateToProps, { getProfile: getProfileThunkCreator })(
  withRouter(ProfileContainer)
);
