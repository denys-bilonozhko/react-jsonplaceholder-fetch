import React, { useState, useEffect } from 'react';
import ApiRequest from './api';
import Button from './components/button/Button';
import Input from './components/input/Input';
import Select from './components/select/Select';
import { usePosts } from './hooks/usePosts';
import './styles/app.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await ApiRequest.getAll();
      setPosts(response.data);
    };
    fetchPosts();
  }, []);

  const filteredPosts = usePosts(posts, filter.sort, filter.query);

  return (
    <div className="app">
      <div className="container">
        <div>
          <Input
            value={filter.query}
            onChange={(e) => setFilter({ ...filter, query: e.target.value })}
            type="text"
            placeholder="Search"
          />
          <Select
            value={filter.sort}
            onChange={(sortBy) => setFilter({ ...filter, sort: sortBy })}
            defaultValue="Sort by"
            options={[
              { value: 'title', name: 'name' },
              { value: 'body', name: 'description' },
            ]}
          />
        </div>
        <hr style={{ margin: '20px 0', width: '100%' }} />
        <div className="posts">
          {filteredPosts.map((post) => (
            <div className="post" key={post.id}>
              <h3 className="post__title">{post.title}</h3>
              <p className="post__body">{post.body}</p>
              <div className="post__buttons">
                <Button>View</Button>
                <Button>Delete</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
