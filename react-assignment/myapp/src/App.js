import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Provider } from 'react-redux';

import Dashboard from './components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/layout/Header';
import './App.css'
import AddProject from './components/projects/AddPeoject';
import UpdateProject from './components/projects/UpdateProject';
import ProjectTaskForm from './components/projects/ProjectTaskForm';
import ProjectBoard from './components/projects/ProjectBoard';
import store from './store';

function App() {
  return (
  
      <Provider store={store}> 
        <div> 
          <Router>
            <Header/>
            <Route exact path="/" component={Dashboard}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/projectBoard/:id" component={ProjectBoard}/>
            <Route path="/addproject" component={AddProject}/>
            <Route path="/updateProject/:id" component={UpdateProject}/>
            {/* <Route path="/projectTaskForm/project/:projectId/:action/:taskId" component={ProjectTaskForm}/> */}
            <Route path="/projectTaskForm/:action/:actionId" component={ProjectTaskForm}/>
          </Router>
        </div> 
      </Provider>
  );
}

export default App;
