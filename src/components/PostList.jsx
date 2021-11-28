import React from 'react';
import PostItem from './PostItem';

const PostList = ({ posts }) => {
  if (!posts.length) {
    return <h2 style={{ textAlign: 'center', color: '#fff' }}>No posts</h2>;
  }

  return (
    <div className="posts">
      {posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </div>
  );
};

export default PostList;
