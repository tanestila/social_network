import React from 'react';
import Header from './Header';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setUserData } from '../../redux/reducer/authReducer';

class HeaderContainer extends React.Component {

  async componentDidMount() {
    await axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true })
      .then(res => {
        this.props.setUserData(res.data.data.id, res.data.data.email, res.data.data.login)
      })
  }

  render() {
    return <Header {...this.props} />
  }

}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,

})

export default connect(mapStateToProps, { setUserData })(HeaderContainer);