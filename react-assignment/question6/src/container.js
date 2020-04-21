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
            currentUser: ''
        }
    }

    pageContent = () => {
        if(this.state.currentUser !== ''){
            console.log(this.state.currentUser);
            return <Redirect to='/admin' />;
        }else if(this.props.match.params.action === 'register'){
            return <Register/>;
        }else if(this.props.match.params.action === 'login'){
            return <Login login= {this.handelLogin.bind(this)}/>;
        }else{
            console.log(this.state.currentUser);
            return <Login login= {this.handelLogin.bind(this)}/>;
        }
    }

    handelLogin = (email, password) => {
        console.log('email:'+email);
        console.log('password:'+password);
        // this.setState({
        //     username: email,
        //     password: password
        // })
        this.state.users.filter(user => {
            console.log(user.email === email && user.password === password)
            if(user.email === email && user.password === password){
                return true;
            }
        }).map((user) => {
            if(user !== null){
                // console.log('user exist');
                // return <Redirect to='/user/register' />
                this.setState({
                    currentUser: user
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