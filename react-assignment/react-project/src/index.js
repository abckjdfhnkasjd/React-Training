import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import UserContainer from './UserContainer';
// import Login from './login';
// import Register from './register';
import {BrowserRouter as Router, Route } from 'react-router-dom';
// import RouteNotFOund from './RouteNotFound';
import HomeComponent from './HomeComponent';
import AboutComponent from './AboutComponent';


const RoutingComponent = () => {
  return (
    <Router>
      <Route exact path = "/" component= { UserContainer }/>
      <Route exact path = "/user/:action" component= { UserContainer }/>
      <Route exact path = "/admin/:preference" component= { HomeComponent }/>
      {/* <Route exact path = "/admin/about" component= { HomeComponent }/> */}
      {/* <Route path='*' component={RouteNotFOund} /> */}
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
