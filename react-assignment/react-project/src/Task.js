import React from 'react';
import './App.css'

const Task = (props) => {
    return (
        <li 
            className={props.task.completed ? 'list-group-item completed': 'list-group-item '}>
                <input type="checkbox" checked = {props.task.completed ? 'checked': ''}/>
                {props.task.name}{props.task.status}
                <button className="btn btn-info glyphicon glyphicon-trash pull-right"></button>
        </li>
    );
}

export default Task;