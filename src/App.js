import React, { useState, useEffect } from 'react';
import ApiRequest from './api';

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await ApiRequest.getAll();
      setPosts(response.data);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
