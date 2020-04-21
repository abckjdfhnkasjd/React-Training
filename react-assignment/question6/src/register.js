import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Register extends React.Component {
    render() {
        return (
            <form className="form-container">
                <h1><b>Registration Form</b></h1>
                <div className="form-group">
                    <label for="username">User name</label>
                    <input type="text" className="form-control" id="username"/>
                </div>
                <div className="form-group">
                    <label for="email">Email address</label>
                    <input type="email" className="form-control" id="email"/>
                </div>
                <div className="form-group">
                    <label for="password">Password</label>
                    <input type="password" className="form-control" id="password"/>
                </div>
                {/* <div className="text-center">

                <button type="submit" className="btn btn-success text-center">Register</button>
                </div> */}
                <button type="submit" className="btn btn-success btn-block">Register</button>
                <h5 className="text-center">already have account ? <Link to="/user/login">login here</Link></h5>
            </form>
        );
    }    
}

export default Register;