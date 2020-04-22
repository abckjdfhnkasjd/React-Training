


import React from 'react';
import { white, black } from 'color-name';

class TaskList extends React.Component{
    render() {
        const style= {
            backgroundColor: 'lightgray',
        }
        const btnStyle={
            marginLeft: '1000px'
        }
        return (
            <div className="row">
                <div className="col-xs-12">
                    <ul className="list-group">
                        <li className="list-group-item" style={style}>First item<button className="btn" style={btnStyle}>(X)</button></li>
                        <li className="list-group-item" style={style}>Second item<button className="btn" style={btnStyle}>(X)</button></li>
                        <li className="list-group-item" style={style}>Third item<button className="btn" style={btnStyle}>(X)</button></li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default TaskList;
