import React, { useState, useEffect } from 'react';
import ApiRequest from '../api';
import Spinner from '../components/spinner/Spinner';
import { usePosts } from '../hooks/usePosts';
import { useFetching } from '../hooks/useFetching';
import PostFilter from '../components/PostFilter';
import '../styles/app.css';
import PostList from '../components/PostList';
import Pagination from '../components/pagination/Pagination';
import { getPageCount } from '../utils/pages';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [fetchPosts, isPostsLoading, postError] = useFetching(
    async (limit, page) => {
      const response = await ApiRequest.getAll(limit, page);
      setPosts(response.data);
      const totalCount = response.headers['x-total-count'];
      setTotalPages(getPageCount(totalCount, limit));
    }
  );
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchPosts(limit, page);
  }, []);

  const filteredPosts = usePosts(posts, filter.sort, filter.query);

  const changePage = (page) => {
    setPage(page);
    fetchPosts(limit, page);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="title">React Jsonplaceholder Fetch</h1>
        <PostFilter filter={filter} setFilter={setFilter} />
        <hr style={{ margin: '20px 0', width: '100%' }} />
        {postError && <h3>Error: {postError}</h3>}
        {isPostsLoading ? (
          <div className="spinner">
            <Spinner />
          </div>
        ) : (
          <PostList posts={filteredPosts} removePost={removePost} />
        )}
        <Pagination
          page={page}
          changePage={changePage}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
};

export default Posts;
