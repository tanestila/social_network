import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/reducer/profileReducer';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {

  async componentDidMount() {
    let userId = this.props.match.params.userId || 2;
    await axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then(res =>
        this.props.setUserProfile(res.data))
  }

  render() {
    return <div>
      <Profile {...this.props } profile={this.props.profile}/>
    </div>
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
})


export default connect(mapStateToProps, {setUserProfile}) (withRouter(ProfileContainer));