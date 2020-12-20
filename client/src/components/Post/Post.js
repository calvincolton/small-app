import React from 'react';
import './post.css';

const Post = ({ post }) => {
  return (
    <li className="post ui segment">
      <h3>{post.title}</h3>
      <div className="">{post.content}</div>
      <div className="author">- {post.author}</div>
    </li>
  );
}

export default Post;