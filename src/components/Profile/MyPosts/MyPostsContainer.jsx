import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/reducer/profileReducer';
import MyPosts from './MyPosts';

const mapStateToProps = state => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addPost: () => { dispatch(addPostActionCreator()) },
    updateNewPostText: (body) => { dispatch(updateNewPostTextActionCreator(body)) },
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;