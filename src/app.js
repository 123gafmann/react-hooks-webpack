import React from 'react';
import ReactDOM from 'react-dom';

import SearchGiphy from './components/search-giphy';
import TodoApp from './components/todo';

const title = 'React Async Hooks example';
ReactDOM.render(
  <div>
      {title}
      <TodoApp />
    <SearchGiphy />
    
  </div>,
  document.getElementById('container')
);

module.hot.accept();