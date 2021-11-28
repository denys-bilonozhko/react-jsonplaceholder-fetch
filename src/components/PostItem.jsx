import React from 'react';
import Button from './button/Button';

const PostItem = ({ post, removePost }) => {
  return (
    <div className="post" key={post.id}>
      <h3 className="post__title">
        {post.id}. {post.title}
      </h3>
      <p className="post__body">{post.body}</p>
      <div className="post__buttons">
        <Button>View</Button>
        <Button onClick={() => removePost(post)}>Delete</Button>
      </div>
    </div>
  );
};

export default PostItem;
