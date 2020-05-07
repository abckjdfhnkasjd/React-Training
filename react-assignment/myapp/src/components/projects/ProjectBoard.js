import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

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
        const {taskList}= this.props.taskList.taskList;
        return (
            <div className="projects">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            {/* <h1 className="display-4 text-center">Projects</h1>
                            <br /> */}
                        <div>
                            <br />
                            <CreateProjectTaskButton projectId={this.props.match.params.id}/>
                            <hr />
                            <div className="row">
                            {
                                taskList === undefined ? '' :
                                taskList.map(task => (
                                    <Task key={task.id} task={task} delete={this.onDelete} projectId={this.props.match.params.id}/>
                                ))
                            }
                                
                                {/* <div className="col-md-3">
                                    <div className="square">
                                        <div className="in-progress-header center">IN PROGRESS</div>
                                        <div className="body center">
                                            <div className="body-header center">Priority</div>
                                            <div className="content">
                                                Content
                                            </div>
                                            <div>
                                                <button className="btn-md btn-primary">View/Update</button>
                                                <button className="btn-md btn-danger">Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                {/* <div className="col-md-3">
                                    <div className="square">
                                        <div className="completed-header center">DONE</div>
                                        <div className="body center">
                                            <div className="body-header center">Priority</div>
                                            <div className="content">
                                                Content
                                            </div>
                                            <div>
                                                <button className="btn-md btn-primary">View/Update</button>
                                                <button className="btn-md btn-danger">Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
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
    taskList: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
   return {taskList: state.taskList}
}
export default connect(mapStateToProps, {getProjectTasks, deleteTask})(ProjectBoard);