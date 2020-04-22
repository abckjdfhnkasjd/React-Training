import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomeComponent from './HomeComponent';
import TaskList from './TaskList';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <HomeComponent /><br/><br/>
    <TaskList/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
