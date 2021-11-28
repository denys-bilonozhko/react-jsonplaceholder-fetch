import React from 'react';
import Button from './button/Button';

const PostItem = ({ post }) => {
  return (
    <div className="post" key={post.id}>
      <h3 className="post__title">{post.title}</h3>
      <p className="post__body">{post.body}</p>
      <div className="post__buttons">
        <Button>View</Button>
        <Button>Delete</Button>
      </div>
    </div>
  );
};

export default PostItem;
