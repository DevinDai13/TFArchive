import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Index from './Home';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
);

// want your app to work offline and load faster, change
// unregister() to register() below. Note this comes with some pitfalls.
serviceWorker.unregister();
