import React from 'react';
import Login from './login';
import Register from './register';
import { Redirect } from "react-router-dom";

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users:[],
            currentUser: '',
            invalidUser : false,
            registrationSuccess: false
        }
    }

    pageContent = () => {
        let error;
        let success;
        if(this.state.currentUser !== ''){
            return <Redirect to='/admin/home' />;
        }else if(this.props.match.params.action === 'register'){
            if(this.state.registrationSuccess){
                success = <div className="alert alert-success">Registration Successfull</div>
            }
            return <div>{success}<Register registration={this.handelRegistration.bind(this)}/></div>;
        }else if(this.props.match.params.action === 'login' || this.props.match.params.action === undefined){
            if(this.state.invalidUser){
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
            users,
            registrationSuccess: true
        })
    }

    handelLogin = (email, password) => {
        let loggedinUser = this.state.users.filter((user) => {
            return (user.email === email && user.password === password);
        });
        (loggedinUser.length === 0)? this.setState({invalidUser: true}): this.setState({currentUser: loggedinUser}); 
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4 col-md-offset-4 col-sm-12 col-xs-12">
                    {this.pageContent()}
                </div>
            </div>
        );
    }    
}

export default Container;