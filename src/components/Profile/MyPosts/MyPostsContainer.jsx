import { connect } from "react-redux";
import { addPostActionCreator } from "../../../redux/reducer/profileReducer";
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (body) => {
      dispatch(addPostActionCreator(body));
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
