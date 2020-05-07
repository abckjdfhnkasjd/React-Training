import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getProjectTasks, addOrUpdateTask, getTask } from '../../actions/ProjectTaskAction';

class ProjectTaskForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            project:    {
                        projectIdentifier: '',
                        projectName: '',
                        description:'',
                        start_date: '',
                        end_date: '',
                        taskList: [
                            {
                                summary: '',
                                acceptanceCriteria: '',
                                status: '',
                                priority: '',
                                dueDate: '',
                                createdDate: '',
                                updatedDate: ''
                            }
                        ]
                    },
            task: {
                summary: '',
                acceptanceCriteria: '',
                status: '',
                priority: '',
                dueDate: '',
                createdDate: new Date(),
                updatedDate: new Date()
            },
            projectId: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    componentWillReceiveProps(nextProps){
        console.log("nextProps=",nextProps);
        if(nextProps.taskList){
            const  project = nextProps.taskList.taskList;
            this.setState({
                project
            });
        }
        if(nextProps.taskList && nextProps.taskList.task){
            const  {task} = nextProps.taskList;
            this.setState({
                task
            });
        }
    }

    componentDidMount() {
        const {action} = this.props.match.params;
        const {projectId} = this.props.match.params;
        this.setState({projectId: projectId})
        console.log(this.state);
        if(action === 'task'){
            const {taskId} = this.props.match.params;
            this.props.getTask(taskId);
        }else{
            this.props.getProjectTasks(projectId);
        }
    }

    onSubmit(event) {
        event.preventDefault();
        const {task} = this.state;
        this.props.addOrUpdateTask(this.state.project.projectIdentifier, task, this.props.history);
    }

    onChange(event) {
        let {task} = this.state;
        task[event.target.name] = event.target.value;
        this.setState({
            task
        })
    }

    render() {
        return (
            <div className="project">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                        <Link to ={`/projectBoard/${this.props.match.params.id}`} class="btn btn-primary">Back to Project Board</Link>
                        <br />
                            <h5 className="display-4 text-center">Add / Update Project Task</h5>
                            <hr />
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input type="text" 
                                        className="form-control form-control-lg " 
                                        name="summary"
                                        value={this.state.task.summary}
                                        onChange={this.onChange}
                                        placeholder="Project Task Summary" />
                                    {/* <p>{ errors.projectName }</p> */}
                                </div>
                                <div className="form-group">
                                    <input type="text" 
                                        className="form-control form-control-lg" 
                                        placeholder="Acceptance Criteria"
                                        name="acceptanceCriteria"
                                        value={this.state.task.acceptanceCriteria}
                                        onChange={this.onChange} />
                                </div>
                                {/* <!-- disabled for Edit Only!! remove "disabled" for the Create operation --> */}
                                {/* <div className="form-group">
                                    <textarea className="form-control form-control-lg" 
                                    placeholder="Project Description"
                                    name="description"
                                    value={this.state.description}
                                    onChange={this.onChange}
                                    ></textarea>
                                    <p>{ errors.description }</p>
                                </div> */}
                                <h6>Due Date</h6>
                                <div className="form-group">
                                    <input type="date" 
                                        className="form-control form-control-lg" 
                                        name="dueDate" 
                                        value={this.state.task.dueDate}
                                        onChange={this.onChange} />
                                    {/* <p>{ errors.start_date }</p> */}
                                </div>
                                {/* <h6>Estimated End Date</h6>
                                <div className="form-group">
                                    <input type="date" 
                                    className="form-control form-control-lg" 
                                    name="end_date" 
                                    value={this.state.end_date}
                                    onChange={this.onChange}/>
                                    <p>{ errors.end_date }</p>
                                </div> */}
                                <h6>Select Priority</h6>
                                <div className="form-group">
                                   <select 
                                        value={this.state.task.priority} 
                                        name="priority" 
                                        className="form-control form-control-lg" 
                                        onChange={this.onChange}>
                                       <option value="3">High</option>
                                       <option  value="2">Medium</option>
                                       <option  value="1">Low</option>
                                   </select>
                                </div>

                                <h6>Select Status</h6>
                                <div className="form-group">
                                   <select  
                                    value={this.state.task.status} 
                                    name="status" 
                                    className="form-control form-control-lg" 
                                    onChange={this.onChange}
                                    className="form-control form-control-lg" >
                                       <option>To Do</option>
                                       <option>In Progress</option>
                                       <option>Done</option>
                                   </select>
                                </div>

                                <input type="submit" className="btn btn-primary btn-block mt-4" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ProjectTaskForm.propTypes = {
    // addProject: PropTypes.func.isRequired,
    // deleteProject: PropTypes.func.isRequired,
    taskList: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
    console.log(state);
   return {taskList: state.taskList}
}

export default connect(mapStateToProps, {getProjectTasks, addOrUpdateTask, getTask})(ProjectTaskForm);