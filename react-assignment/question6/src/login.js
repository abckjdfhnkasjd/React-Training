import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Login extends React.Component {
    render() {
        return (
            <form className="form-container">
                <h1><b>Login Form</b></h1>
                <div class="form-group">
                    <label for="email">Email address</label>
                    <input type="email" class="form-control" id="email"/>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="password"/>
                </div>
                <button type="submit" class="btn btn-success btn-block">Login</button>
                <h5 className="text-center">don't have account? <Link to="/user/register">regester here</Link></h5>
            </form>
        );
    }    
}

export default Login;