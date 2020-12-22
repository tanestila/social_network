import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators";
import { Textarea } from "../../FormsControls/FormsControls";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

let maxLengthCreator10 = maxLengthCreator(10);

const PostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          type="text"
          name="newPostText"
          placeholder="Post message"
          validate={[required, maxLengthCreator10]}
        />
      </div>
      <div>
        <button>Add</button>
      </div>
    </form>
  );
};

const PostReduxForm = reduxForm({ form: "post" })(PostForm);

const MyPosts = (props) => {
  let postsElement = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  let onAddPost = (formData) => {
    props.addPost(formData.newPostText);
  };

  return (
    <div className={s.postBlock}>
      <h3>My posts</h3>
      <div>New post</div>
      <div>
        <PostReduxForm onSubmit={onAddPost} />
      </div>
      <div className={s.posts}>{postsElement}</div>
    </div>
  );
};
export default MyPosts;
