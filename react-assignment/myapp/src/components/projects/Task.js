

import React from 'react';
import {Link} from 'react-router-dom';

const Task = (props) => {
    let classes=['center'];
    switch(props.task.status){
        case 'To Do': classes.push('header'); break;
        case 'In Progress': classes.push('in-progress'); break;
        case 'Completed': classes.push('completed'); break;
    }
    let prority='';
    const style = {
        backgroundColor: 'red',
        height: '40px',
        display: 'table-cell',
        width: '250px',
        textAlign: 'center',
        verticalAlign: 'middle',
    };
    switch(props.task.priority){
        case 1: prority = 'LOW'; style.backgroundColor='green'; break;
        case 2:  prority = 'MEDIUM';style.backgroundColor='yellow'; break;
        case 3:  prority = 'HIGH'; style.backgroundColor='red';break;
    }
    return (
        <div className="col-md-3">
            <div className="square">
                <div className={classes.join(' ')}>{props.task.status}</div>
                <div className="body center">
                    <div style={style}>Id: {props.task.taskId} -- Priority: {prority}</div>
                    <div className="content">
                        {props.task.summary}
                    </div>
                    <div>
                        <Link to={`/projectTaskForm/project/${props.projectId}/task/${props.task.taskId}`}
                                className="btn btn-sm btn-info">
                            View/update
                        </Link>
                        <Link onClick={() => props.delete(props.task.taskId)} className="btn btn-sm btn-danger">
                            Delete
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Task;