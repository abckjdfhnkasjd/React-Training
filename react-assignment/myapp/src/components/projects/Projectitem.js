import React from 'react';
import {Link} from 'react-router-dom';

class ProjectItem extends React.Component {
    render() {
        return (
                // Project Item Component
                <div className="container">
                    <div className="card card-body bg-light mb-3">
                        <div className="row">
                            <div className="col-2">
                                <span className="mx-auto">{this.props.project.projectIdentifier}</span>
                            </div>
                            <div className="col-lg-6 col-md-4 col-8">
                                <h3>{this.props.project.projectName}</h3>
                                <p>{this.props.project.description}</p>
                            </div>
                            <div className="col-md-4 d-none d-lg-block">
                                <ul className="list-group">
                                    <Link to={`/projectBoard/${this.props.project.projectIdentifier}`}>
                                        <li className="list-group-item board">
                                            <i className="fa fa-flag-checkered pr-1">Project Board </i>
                                        </li>
                                    </Link>
                                    <Link to={`/updateProject/${this.props.project.projectIdentifier}`}>
                                        <li className="list-group-item update">
                                            <i className="fa fa-edit pr-1">Update Project Info</i>
                                        </li>
                                    </Link>
                                    {/* <a to={`/deleteProject/${this.props.project.projectIdentifier}`}> */}
                                    <a onClick={event => {this.props.delete(this.props.project.projectIdentifier)}}>
                                        <li className="list-group-item delete">
                                            <i className="fa fa-minus-circle pr-1">Delete Project</i>
                                        </li>
                                    </a>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                // End of Project Item Component
        );
    }
}
export default ProjectItem;