import React from 'react';
import { connect } from 'react-redux';
import { setCurrentPageAC, setUsersAC, toggleFollowAC } from '../../redux/reducer/usersReducer';
import * as axios from 'axios';
import Users from './Users';

class UsersContainer extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(res => this.props.setUsers(res.data.items, res.data.totalCount))
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(res => this.props.setUsers(res.data.items, res.data.totalCount))
  }

  render() {
    return <Users
      onPageChanged={this.onPageChanged}
      totalUsersCount={this.props.totalUsersCount}
      pageSize={this.props.pageSize}
      users={this.props.users}
      currentPage={this.props.currentPage}
      toggleFollow={this.props.toggleFollow}
    />
  }
}

const mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleFollow: (userId) => { dispatch(toggleFollowAC(userId)) },
    setUsers: (users, count) => { dispatch(setUsersAC(users, count)) },
    setCurrentPage: (page) => { dispatch(setCurrentPageAC(page)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)


