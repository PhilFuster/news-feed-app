import { React, useState, useEffect } from 'react';
import Post from './Post';
import { useJazzyNews } from '../hooks/useJazzyNews';

export default function NewsFeed({ url }) {
  const posts = useJazzyNews();
  return (
    <>
      <h1>{posts.length} articles</h1>
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </>
  );
}
