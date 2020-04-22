
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
                        {/* <a href="#">Home</a> | <a href="#">About</a> */}
                        <Link to="/admin/home">Home</Link> | <Link to="/admin/about">About</Link>
                    </div>
                </div><br/>
                {this.props.match.params.preference === 'home'? <TaskList/>: <AboutComponent/>}
                <br/>
                {/* <div className="row text-center">
                    <div className="col-xs-12">
                    <div className="input-group">
                        <input className="form-control" placeholder="Add todo ..."/>
                        <span className="input-group-btn">
                            <button className="btn btn-info">Submit</button>
                        </span>
                    </div>
                    </div>
                </div> */}
            </div>
        );
    }
}
export default HomeComponent;