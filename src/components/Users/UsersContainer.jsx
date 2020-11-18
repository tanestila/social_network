import React from 'react';
import { connect } from 'react-redux';
import { setCurrentPage, setUsers, toggleFollow, toggleIsFetching } from '../../redux/reducer/usersReducer';
import * as axios from 'axios';
import Users from './Users';
import Preloader from '../UI/preloader/Preloader';

class UsersContainer extends React.Component {

  async componentDidMount() {
    this.props.toggleIsFetching(true)
    await axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(res => {
        this.props.setUsers(res.data.items, res.data.totalCount)
        this.props.toggleIsFetching(false)
      })
  }

  onPageChanged = async (pageNumber) => {
    this.props.toggleIsFetching(true)
    this.props.setCurrentPage(pageNumber)
    await axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(res => {
        this.props.setUsers(res.data.items, res.data.totalCount)
        this.props.toggleIsFetching(false)
      })
  }

  render() {
    return <>
      {this.props.isFetching ? <Preloader /> :
        null
      }
      <Users
        onPageChanged={this.onPageChanged}
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        users={this.props.users}
        currentPage={this.props.currentPage}
        toggleFollow={this.props.toggleFollow}
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
})(UsersContainer)


