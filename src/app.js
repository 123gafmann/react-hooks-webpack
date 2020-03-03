import React from 'react';
import ReactDOM from 'react-dom';

import SearchGiphy from './components/search-giphy';

const title = 'React Async Hooks example';
ReactDOM.render(
  <div>
      {title}
    <SearchGiphy />
  </div>,
  document.getElementById('container')
);

module.hot.accept();