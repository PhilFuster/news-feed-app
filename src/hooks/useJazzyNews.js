import { React, useState, useEffect } from 'react';
import welcomeChime from '../../public/sounds/helloWindChimes.wav';
import goodbyeChime from '../../public/sounds/goodbyeChimes.wav';
import newsFeed from '../../public/data/newsFeed-data';
const useJazzyNews = () => {
  const [posts, setPosts] = useState([]);
  const addPost = (post) => setPosts((allPosts) => [post, ...allPosts]);

  /**
   * a lot going on here. Let's break this into smaller useEffect functions.
   */
  // useEffect(() => {
  //   NewsFeed.subscribe(addPost);
  //   welcomeChime.play();
  //   return () => {
  //     NewsFeed.unsubscribe(addPost);
  //     goodbyeChime.play();
  //   };
  // }, []);

  useEffect(() => {
    newsFeed.subscribe(addPost);

    return newsFeed.unsubscribe(addPost);
  }, []);
  useEffect(() => {
    welcomeChime.play();

    return () => goodbyeChime.play();
  });

  return posts;
};

export { useJazzyNews };
