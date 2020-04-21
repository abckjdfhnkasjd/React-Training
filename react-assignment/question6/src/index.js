import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Container from './container';
import Login from './login';
import Register from './register';
import {BrowserRouter as Router, Route } from 'react-router-dom';


const RoutingComponent = () => {
  return (
    <Router>
      {/* <Links /> */}
      <Route exact path = "/" component= { Container }/>
      <Route path = "/user/:action" component= { Container }/>
      {/* <Route path = "/user/login" component= { Login }/> */}
    </Router>
  );
}
ReactDOM.render(
  <React.StrictMode>
    <RoutingComponent />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
