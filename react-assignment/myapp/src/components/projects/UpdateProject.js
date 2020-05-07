import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import { createProject, getProject } from '../../actions/ProjectAction';
// import { getProject } from '../../actions/ProjectAction';


class UpdateProject extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projectName: '',
            projectIdentifier: '',
            description: '',
            start_date: '',
            end_date: '',
            errors: {}
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps: ',nextProps.project);
        if(nextProps.project){
            const  {
                projectName,
                projectIdentifier,
                description,
                start_date,
                end_date
            } = nextProps.project;
            //this.setState({project: nextProps.project});
            this.setState({
                projectName,
                projectIdentifier,
                description,
                start_date,
                end_date
            });
        }
    }

    componentDidMount() {
        const {id} = this.props.match.params;
        console.log(id);
        this.props.getProject(id, this.props.history);
    }

    onChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    onSubmit(event) {
        event.preventDefault();
        const modifiedProject = {
            projectName: this.state.projectName,
            projectIdentifier: this.state.projectIdentifier,
            description: this.state.description,
            start_date: this.state.start_date,
            end_date: this.state.end_date
        }
        this.props.createProject(modifiedProject, this.props.history);
    }

    render() {
        const {errors} = this.state;
        return (
            <div className="project">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center">Create / Edit Project form</h5>
                            <hr />
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input type="text" 
                                        className="form-control form-control-lg " 
                                        name="projectName"
                                        value={this.state.projectName}
                                        onChange={this.onChange}
                                        placeholder="Project Name" />
                                    <p>{ errors.projectName }</p>
                                </div>
                                <div className="form-group">
                                    <input type="text" 
                                        className="form-control form-control-lg" 
                                        placeholder="Unique Project ID"
                                        name="projectIdentifier"
                                        value={this.state.projectIdentifier}
                                        onChange={this.onChange}
                                        disabled />
                                </div>
                                {/* <!-- disabled for Edit Only!! remove "disabled" for the Create operation --> */}
                                <div className="form-group">
                                    <textarea className="form-control form-control-lg" 
                                    placeholder="Project Description"
                                    name="description"
                                    value={this.state.description}
                                    onChange={this.onChange}
                                    ></textarea>
                                    <p>{ errors.description }</p>
                                </div>
                                <h6>Start Date</h6>
                                <div className="form-group">
                                    <input type="date" 
                                        className="form-control form-control-lg" 
                                        name="start_date" 
                                        value={this.state.start_date}
                                        onChange={this.onChange}/>
                                    <p>{ errors.start_date }</p>
                                </div>
                                <h6>Estimated End Date</h6>
                                <div className="form-group">
                                    <input type="date" 
                                    className="form-control form-control-lg" 
                                    name="end_date" 
                                    value={this.state.end_date}
                                    onChange={this.onChange}/>
                                    <p>{ errors.end_date }</p>
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

createProject.propTypes = {
    getProject: PropTypes.func.isRequired,
    createProject: PropTypes.func.isRequired,
    project: PropTypes.object.isRequired
}

const mapStateToProps = state => {
    console.log(state);
    return {project: state.projects.project}

}

export default connect(mapStateToProps, {getProject, createProject})(UpdateProject);