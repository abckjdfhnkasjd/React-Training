import React from 'react';

import {BrowserRouter as Router, Route,} from 'react-router-dom';
import HomePageComponent from './HomePageComponent';
import AboutPageComponent from './AboutPageComponent';
import ContactPageComponent from './ContactPageComponent';
import Links from './Links';

const RouterComponent = () => {
    return (

        <div>
            <Router>
                <Links />
                <Route exact path = "/" component= { HomePageComponent }/>
                <Route path = "/about" component= { AboutPageComponent }/>
                <Route path = "/contact" component= { ContactPageComponent }/>
            </Router>
        </div>
    );
}

export default RouterComponent;