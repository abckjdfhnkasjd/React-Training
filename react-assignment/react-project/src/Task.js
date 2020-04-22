import React from 'react';
import './App.css'

const Task = (props) => {
    const classes = ['list-group-item'];
    {
        props.task.completed? classes.push('completed'): classes.push('');
    }

    return (
        <li 
            className={classes.join(' ')}>
                <input type="checkbox" checked = {props.task.completed ? 'checked': ''}/>
                {props.task.name}
                <button 
                    className="btn btn-info glyphicon glyphicon-trash pull-right" 
                    onClick={(event) => {event.stopPropagation();props.deleteTask(props.index)}}></button>
        </li>
    );
}

export default Task;