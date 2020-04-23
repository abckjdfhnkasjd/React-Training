import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Login extends React.Component {

    loginHandler = (event) => {
        event.preventDefault();
        this.props.login(this.email.value, this.password.value);
    }

    render() {
        return (
            <form className="form-container" onSubmit={this.loginHandler}>
                <h1><b>Login Form</b></h1>
                <div className="form-group">
                    <label>Email address</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        ref = {(email) => { this.email = email}}/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="password"
                        ref = {(password) => { this.password = password}}/>
                </div>
                <button type="submit" className="btn btn-success btn-block">Login</button>
                <h5 className="text-center">don't have account? <Link to="/user/register">regester here</Link></h5>
            </form>
        );
    }    
}

export default Login;