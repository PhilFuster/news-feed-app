import React, { useEffect, useCallback } from 'react';
import WordCount from './components/WordCount';
import './App.css';
import { useAnyKeyToRender } from './hooks/useAnyKeyToRender';

function App() {
  useAnyKeyToRender();
  const fn = useCallback(() => {
    console.log('hello');
    console.log('world');
  }, []);

  useEffect(() => {
    console.log('fresh render');
    fn();
  }, [fn]);
  return <WordCount>You are not going to believe this but..</WordCount>;
}
export default App;
