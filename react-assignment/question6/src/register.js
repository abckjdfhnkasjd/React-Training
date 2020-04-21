import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Register extends React.Component {

    registrationHandler = (event) => {
        event.preventDefault();
        this.props.registration(this.username.value, this.email.value, this.password.value);
    }
    render() {
        return (
            <form className="form-container" onSubmit={this.registrationHandler}>
                <h1><b>Registration Form</b></h1>
                <div className="form-group">
                    <label>User name</label>
                    <input type="text" className="form-control" id="username" ref={username => this.username = username}/>
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" id="email" ref={email => this.email = email}/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" id="password" ref={password => this.password = password}/>
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