import React from 'react';
import s from  './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return  <div>
    <div>My posts</div>
    <div>New post</div>
    <div>
      <textarea></textarea>
      <button>Add</button>
    </div>
    <Post message="how are you?"/>
    <Post message="hi its my first post"/>
  </div>

}
export default MyPosts;