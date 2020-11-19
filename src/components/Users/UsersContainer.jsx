import React from 'react';
import { connect } from 'react-redux';
import { setCurrentPage, setUsers, toggleFollow, toggleIsFetching, toggleIsFollowingProgress } from '../../redux/reducer/usersReducer';
import Users from './Users';
import Preloader from '../UI/preloader/Preloader';
import { usersAPI } from '../../api/api';

class UsersContainer extends React.Component {

  async componentDidMount() {
    this.props.toggleIsFetching(true)
    await usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
      .then(data => {
        this.props.setUsers(data.items, data.totalCount)
        this.props.toggleIsFetching(false)
      })
  }

  onPageChanged = async (pageNumber) => {
    this.props.toggleIsFetching(true)
    this.props.setCurrentPage(pageNumber)
    await usersAPI.getUsers(pageNumber, this.props.pageSize)
      .then(data => {
        this.props.setUsers(data.items, data.totalCount)
        this.props.toggleIsFetching(false)
      })
  }

  onToggleFollow = async (userId, follow) => {
    this.props.toggleIsFollowingProgress(true, userId)
    if (follow) {
      await usersAPI.unfollowUser(userId)
        .then(data => {
          if (data.resultCode === 0) {
            this.props.toggleFollow(userId)
          }
          this.props.toggleIsFollowingProgress(false, userId)
        })
    }
    else {
      await usersAPI.followUser(userId)
        .then(data => {
          if (data.resultCode === 0) {
            this.props.toggleFollow(userId)
          }
          this.props.toggleIsFollowingProgress(false, userId)
        })
    }

  }

  render() {
    return <>
      {this.props.isFetching ? <Preloader /> :
        null
      }
      <Users
        onPageChanged={this.onPageChanged}
        onToggleFollow={this.onToggleFollow}
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        users={this.props.users}
        currentPage={this.props.currentPage}
        followingInProgress={this.props.followingInProgress}
      // toggleFollow={this.props.toggleFollow}
      />
    </>
  }
}

const mapStateToProps = state => ({
  users: state.usersPage.users,
  pageSize: state.usersPage.pageSize,
  totalUsersCount: state.usersPage.totalUsersCount,
  currentPage: state.usersPage.currentPage,
  isFetching: state.usersPage.isFetching,
  followingInProgress: state.usersPage.followingInProgress,
}
)

// const mapDispatchToProps = dispatch => ({
//     toggleFollow: (userId) => { dispatch(toggleFollowAC(userId)) },
//     setUsers: (users, count) => { dispatch(setUsersAC(users, count)) },
//     setCurrentPage: (page) => { dispatch(setCurrentPageAC(page)) },
//     toggleIsFetching: (isFetching) => { dispatch(toggleIsFetchingAC(isFetching)) },
//   }
// )

export default connect(mapStateToProps, {
  toggleFollow,
  setUsers,
  setCurrentPage,
  toggleIsFetching,
  toggleIsFollowingProgress
})(UsersContainer)


