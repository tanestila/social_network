import { usersAPI } from "../../api/api";

const TOGGLE_FOLLOW = "users/TOGGLE_FOLLOW";
const SET_USERS = "users/SET_USERS";
const SET_CURRENT_PAGE = "users/SET_CURRENT_PAGE";
const TOGGLE_IS_FETCHING = "users/TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "users/TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: !u.followed };
          }
          return u;
        }),
        // users: updateObjectInArray( state.users, action.userId, "id", {} )
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users,
        totalUsersCount: action.totalCount,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };

    default:
      return state;
  }
};

export const toggleFollow = (userId) => ({
  type: TOGGLE_FOLLOW,
  userId,
});

export const setUsers = (users, count) => ({
  type: SET_USERS,
  users,
  totalCount: count,
});

export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

export const toggleIsFollowingProgress = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId,
});

export const getUsersThunkCreator = (currentPage, pageSize) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let response = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(setUsers(response.items, response.totalCount));
    dispatch(toggleIsFetching(false));
  };
};

const followUnfollowFlow = async (dispatch, apiMethod, userId) => {
  dispatch(toggleIsFollowingProgress(true, userId));
  let response = await apiMethod(userId);
  if (response.resultCode === 0) {
    dispatch(toggleFollow(userId));
  }
  dispatch(toggleIsFollowingProgress(false, userId));
};

export const onToggleFollowThunkCreator = (userId, follow) => {
  return async (dispatch) => {
    if (follow) {
      followUnfollowFlow(
        dispatch,
        usersAPI.unfollowUser.bind(usersAPI),
        userId
      );
    } else {
      followUnfollowFlow(dispatch, usersAPI.followUser.bind(usersAPI), userId);
    }
  };
};

export default usersReducer;
