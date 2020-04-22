
import React from 'react';
import TaskList from './TaskList';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AboutComponent from './AboutComponent';


class HomeComponent extends React.Component{
    render() {
        const style= {
            color: 'white',
            backgroundColor: 'black'
        }
        return (
            <div>
                <div className="row text-center" style={style}>
                    <div className="col-xs-12">
                        <h1>TodoList</h1>
                        <Link to="/admin/home">Home</Link> | <Link to="/admin/about">About</Link>
                    </div>
                </div><br/>
                {this.props.match.params.preference === 'home'? <TaskList/>: <AboutComponent/>}
            </div>
        );
    }
}
export default HomeComponent;