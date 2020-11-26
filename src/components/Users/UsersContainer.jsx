import React from "react";
import { connect } from "react-redux";
import {
  setCurrentPage,
  getUsersThunkCreator,
  onToggleFollowThunkCreator,
} from "../../redux/reducer/usersReducer";
import Users from "./Users";
import Preloader from "../UI/preloader/Preloader";

class UsersContainer extends React.Component {
  async componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = async (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  onToggleFollow = async (userId, follow) => {
    this.props.onToggleFollow(userId, follow);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          onPageChanged={this.onPageChanged}
          onToggleFollow={this.onToggleFollow}
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          users={this.props.users}
          currentPage={this.props.currentPage}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.usersPage.users,
  pageSize: state.usersPage.pageSize,
  totalUsersCount: state.usersPage.totalUsersCount,
  currentPage: state.usersPage.currentPage,
  isFetching: state.usersPage.isFetching,
  followingInProgress: state.usersPage.followingInProgress,
});

export default connect(mapStateToProps, {
  setCurrentPage,
  getUsers: getUsersThunkCreator,
  onToggleFollow: onToggleFollowThunkCreator,
})(UsersContainer);
