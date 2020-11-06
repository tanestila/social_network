import React from 'react';
import { connect } from 'react-redux';
import { setUsersAC, toggleFollowAC } from '../../redux/reducer/usersReducer';
import Users from './Users';

const mapStateToProps = state => {
  return {
    users: state.usersPage.users,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleFollow: (userId) => { dispatch(toggleFollowAC(userId)) },
    setUsers: (users) => { dispatch(setUsersAC(users)) },
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)


export default UsersContainer;