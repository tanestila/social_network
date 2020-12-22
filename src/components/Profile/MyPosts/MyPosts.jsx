import React from "react";
import { Field, reduxForm } from "redux-form";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const PostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field type="text" name="newPostText" component={"input"} />
      </div>
      <div>
        <button onClick={props.onAddPost}>Add</button>
      </div>
    </form>
  );
};

const PostReduxForm = reduxForm({ form: "post" })(PostForm);

const MyPosts = (props) => {
  let postsElement = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  // let newPostElement = React.createRef();

  // let onAddPost = () => {
  //   props.addPost();
  // };

  // let onPostChange = () => {
  //   let text = newPostElement.current.value;
  //   props.updateNewPostText(text);
  // };

  return (
    <div className={s.postBlock}>
      <h3>My posts</h3>
      <div>New post</div>
      <div>
        <PostReduxForm />
      </div>
      <div className={s.posts}>{postsElement}</div>
    </div>
  );
};
export default MyPosts;
