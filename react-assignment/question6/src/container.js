import React from 'react';
import Login from './login';
import Register from './register';

class Container extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = [
    //         {username: '', email: '', password: ''}
    //     ]
    // }
    content = '';

    render(props) {
        return (
            <div className="row justify-content-center">
                <div className="col-md-4 col-sm-12 col-xs-12"></div>
                <div className="col-md-4 col-sm-12 col-xs-12">
                    {(this.props.match.params.action === 'register')? <Register/> : <Login/>}
                </div>
                <div className="col-md-4 col-sm-12 col-xs-12"></div>
            </div>
        );
    }    
}

export default Container;