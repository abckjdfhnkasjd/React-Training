import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import CreateProjectTaskButton from './CreateProjectTaskButton';
import { getProjectTasks, deleteTask } from '../../actions/ProjectTaskAction';
import Task from './Task';

class ProjectBoard extends React.Component {

    constructor(props){
        super(props)
        this.onDelete = this.onDelete.bind(this);
    }

    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.getProjectTasks(id);
    } 

    onDelete(taskId) {
        this.props.deleteTask(taskId);
    }

    render() {
        const {taskList}= this.props.projectDetails;
        return (
            <div className="projects">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        <div>
                            <br />
                            <CreateProjectTaskButton projectId={this.props.match.params.id}/>
                            <hr />
                            <div className="row">
                                {
                                    (taskList === undefined || taskList === '') ? '' :
                                    taskList.map(task => (
                                        <Task key={task.taskId} task={task} delete={this.onDelete} projectId={this.props.match.params.id}/>
                                    ))
                                }
                            </div>
                            </div>
                         </div>
                     </div>
                 </div>
             </div>
        );
    }
}
ProjectBoard.propTypes = {
    // addProject: PropTypes.func.isRequired,
    // deleteProject: PropTypes.func.isRequired,
    // projectDetails: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
   return {projectDetails: state.projectDetails}
}
export default connect(mapStateToProps, {getProjectTasks, deleteTask})(ProjectBoard);