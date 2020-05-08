import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { addOrUpdateTask, getTask } from '../../actions/ProjectTaskAction';

class ProjectTaskForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            task: {
                summary: '',
                acceptanceCriteria: '',
                status: '',
                priority: '',
                dueDate: '',
                createdDate: new Date(),
                updatedDate: new Date()
            },
            errors: {}
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps){
        let task = nextProps.task;
        task.dueDate = task.dueDate.split('T')[0];
        if(nextProps.task){
            this.setState({
                task:task
            });
        }
        if(nextProps.errors){
            this.setState({
                errors:nextProps.errors
            });
        }
    }

    componentDidMount() {
        const {action} = this.props.match.params;
        const {actionId} = this.props.match.params;
        if(action === 'task'){
            this.props.getTask(actionId);
        }
    }

    onSubmit(event) {
        event.preventDefault();
        const {task} = this.state;
        console.log(task);
        this.props.addOrUpdateTask(task, this.props.history);
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
                        <Link to ={`/projectBoard/${this.props.match.params.id}`} className="btn btn-primary">Back to Project Board</Link>
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
                                    <p>{ this.state.errors.summary }</p>
                                </div>
                                <div className="form-group">
                                    <input type="text" 
                                        className="form-control form-control-lg" 
                                        placeholder="Acceptance Criteria"
                                        name="acceptanceCriteria"
                                        value={this.state.task.acceptanceCriteria}
                                        onChange={this.onChange} />
                                    <p>{ this.state.errors.acceptanceCriteria }</p>
                                </div>
                                <h6>Due Date</h6>
                                <div className="form-group">
                                    <input type="date" 
                                        className="form-control form-control-lg" 
                                        name="dueDate" 
                                        value={this.state.task.dueDate}
                                        onChange={this.onChange} />
                                    <p>{ this.state.errors.dueDate }</p>
                                </div>
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
                                       <option>Completed</option>
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
    task: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
    console.log(state);
   return {task: state.projectDetails.task, errors: state.errors}
}

export default connect(mapStateToProps, {addOrUpdateTask, getTask})(ProjectTaskForm);