
import React from 'react';
import { white, black } from 'color-name';

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
                        <a href="#">Home</a> | <a href="#">About</a>
                    </div>
                </div>
                <br/>
                <div className="row text-center">
                    <div className="col-xs-12">
                    <div className="input-group">
                        <input className="form-control" placeholder="Add todo ..."/>
                        <span className="input-group-btn">
                            <button className="btn btn-info">MyButton</button>
                        </span>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default HomeComponent;