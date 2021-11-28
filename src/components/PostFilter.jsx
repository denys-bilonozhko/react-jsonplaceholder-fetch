import React from 'react';
import Select from './select/Select';
import Input from './input/Input';

const PostFilter = ({ filter, setFilter }) => {
  return (
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
  );
};

export default PostFilter;
