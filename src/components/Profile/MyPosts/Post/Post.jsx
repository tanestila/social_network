import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return <div className={s.item}>
    <img alt="avatar" src="https://www.w3schools.com/howto/img_avatar2.png"></img>
    {props.message}
    <div>
      <span>like</span>
    </div>
  </div>

}
export default Post;