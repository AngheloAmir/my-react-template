/*
  The main application entry

    * TYPE
        Scene - A screen is a component that occupies a large part of the screen
        Index - A component that does not display itself
        Fragment of ...

    * DESCRIPTION

    * VISIBLE WHEN
*/

import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
