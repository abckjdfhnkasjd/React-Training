import React from 'react';
import Login from './login';
import Register from './register';
import { Redirect } from "react-router-dom";

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users:[
                {
                    username: 'gsprevolution.it@gmail.com',
                    email: 'gsprevolution.it@gmail.com', 
                    password: '1234'
                }
            ],
            currentUser: '',
            invalidUserFlag : false,
            userRegistrationSuccess: false
        }
    }

    pageContent = () => {
        let error;
        let success;
        if(this.state.currentUser !== ''){
            console.log(this.state.currentUser);
            return <Redirect to='/admin/home' />;
        }else if(this.props.match.params.action === 'register'){
            if(this.state.userRegistrationSuccess){
                success = <div className="alert alert-success">Registration Successfull</div>
            }
            return <div>{success}<Register registration={this.handelRegistration.bind(this)}/></div>;
        }else if(this.props.match.params.action === 'login' || this.props.match.params.action === undefined){
            if(this.state.invalidUserFlag){
                error = <div className="alert alert-danger">Invalid Credentials</div>
            }
            return <div>{error}<Login login= {this.handelLogin.bind(this)}/></div>;
        }
    }

    handelRegistration = (username,email, password) => {
        const newuser = {
            username: username,
            email: email, 
            password: password
        }
        const users = this.state.users;
        users.push(newuser)
        this.setState({
            users: users,
            userRegistrationSuccess: true
        })
    }

    handelLogin = (email, password) => {
        this.state.users
        .map((users) => {
            this.state.users.forEach(user => {
                if(user.email === email && user.password === password){
                    this.setState({
                        currentUser: user
                    })
                }
            });
            if(this.state.currentUser === ''){
                this.setState({
                    invalidUserFlag: true
                })
            }
        }); 
    }

    render() {
        return (
            <div className="row justify-content-center">
                <div className="col-md-4 col-sm-12 col-xs-12"></div>
                <div className="col-md-4 col-sm-12 col-xs-12">
                    {this.pageContent()}
                    {/* {
                        (this.state.currentUser !== '') 
                        ? <Redirect to='/user/admin' /> 
                        : ((this.props.match.params.action === 'register')? <Register/> : <Login login= {this.handelLogin.bind(this)}/>)} */}
                </div>
                <div className="col-md-4 col-sm-12 col-xs-12"></div>
            </div>
        );
    }    
}

export default Container;