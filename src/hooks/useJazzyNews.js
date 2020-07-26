import { React, useState, useEffect, useMemo } from 'react';
import welcomeChime from '../../public/sounds/helloWindChimes.wav';
import goodbyeChime from '../../public/sounds/goodbyeChimes.wav';
import newPostChime from '../../public/sounds/newPostChime.wav';
import newsFeed from '../../public/data/newsFeed-data';
const useJazzyNews = () => {
  const [_posts, setPosts] = useState([]);
  const addPost = (post) => setPosts((allPosts) => [post, ...allPosts]);

  const posts = useMemo(() => _posts, [_posts]);

  useEffect(() => {
    newPostChime.play();
  }, [posts]);

  // on component creation subscribe
  // on tear down unsubscribe
  useEffect(() => {
    newsFeed.subscribe(addPost);

    return newsFeed.unsubscribe(addPost);
  }, []);
  /**
   * play chime on component creation
   * and play goodbyeChime on tear down
   */
  useEffect(() => {
    welcomeChime.play();
    return () => goodbyeChime.play();
  }, []);
  return posts;
};

export { useJazzyNews };
