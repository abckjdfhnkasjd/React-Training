import React from 'react';
import ProjectItem from './projects/Projectitem';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
// import Header from './layout/Header';
// import {Link} from 'react-router-dom';
import CreateProjectButton from './projects/CreateprojectButton';
import {getProjects, deleteProject} from '../actions/ProjectAction';


class Dashboard extends React.Component {
    constructor(props){
        super(props)
        this.onDelete = this.onDelete.bind(this);
    }

    componentDidMount() {
        this.props.getProjects();
    }    

    onDelete(id) {
        this.props.deleteProject(id);
    }
    
    render() {
        const projects = this.props.projects;
        return (
            <div className="projects">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-4 text-center">Projects</h1>
                            <br />
                        <div>
                            <CreateProjectButton/>
                            <br />
                            <hr />
                            {
                                projects.map(project => (
                                    <ProjectItem key={project.projectIdentifier} project={project} delete={this.onDelete}/>
                                ))
                            }
                            </div>
                         </div>
                     </div>
                 </div>
             </div>
        );
    }
}

Dashboard.propTypes = {
    // addProject: PropTypes.func.isRequired,
    deleteProject: PropTypes.func.isRequired,
    projects: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
   return {projects: state.projects.projects}
}

export default connect(mapStateToProps, {getProjects,deleteProject})(Dashboard);