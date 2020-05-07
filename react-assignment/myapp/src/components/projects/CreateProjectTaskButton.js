import React from 'react';
import {Link} from 'react-router-dom';

const CreateProjectTaskButton = (props) => {
    return (
        <React.Fragment>
            <Link to={`/projectTaskForm/project/${props.projectId}`} className="btn btn-lg btn-info">
                <span className="glyphicon glyphicon-plus"></span> Create Project task
            </Link>
        </React.Fragment>
    );
};

export default CreateProjectTaskButton;