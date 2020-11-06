import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElement =
    props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return <div className={s.postBlock}>
    <h3>My posts</h3>
    <div>New post</div>
    <div>
      <div>
        <textarea
          onChange={onPostChange}
          value={props.newPostText}
          ref={newPostElement}
        />
      </div>
      <div>
        <button onClick={onAddPost}>Add</button>
      </div>
    </div>
    <div className={s.posts}>
      {postsElement}
    </div>
  </div>

}
export default MyPosts;