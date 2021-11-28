import React, { useState, useEffect } from 'react';
import ApiRequest from './api';
import Spinner from './components/spinner/Spinner';
import { usePosts } from './hooks/usePosts';
import { useFetching } from './hooks/useFetching';
import PostFilter from './components/PostFilter';
import './styles/app.css';
import PostList from './components/PostList';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await ApiRequest.getAll();
    setPosts(response.data);
  });
  const [filter, setFilter] = useState({ sort: '', query: '' });

  useEffect(() => {
    fetchPosts();
  }, []);

  const filteredPosts = usePosts(posts, filter.sort, filter.query);

  return (
    <div className="app">
      <div className="container">
        <PostFilter filter={filter} setFilter={setFilter} />
        <hr style={{ margin: '20px 0', width: '100%' }} />
        {postError && <h3>Error: {postError}</h3>}
        {isPostsLoading ? (
          <div className="spinner">
            <Spinner />
          </div>
        ) : (
          <PostList posts={filteredPosts} />
        )}
      </div>
    </div>
  );
};

export default App;
