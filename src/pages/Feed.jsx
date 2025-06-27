import React from 'react';
import posts from '../mock/mockPosts';

const Feed = () => (
  <div className="container mt-4">
    <h3>Feed</h3>
    {posts.map((post, index) => (
      <div key={index} className="card mb-3 shadow-sm">
        <div className="card-body">
          <h5>{post.author}</h5>
          <p>{post.content}</p>
        </div>
      </div>
    ))}
  </div>
);

export default Feed;
