import React, { useState, useEffect } from 'react';
import ApiRequest from './api';
import './styles/app.css';

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
    <div className="app">
     <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <h3 className="post__title">{post.title}</h3>
            <p className="post__body">{post.body}</p>
          </div>
        ))}
     </div>
    </div>
  );
};

export default App;
