import React, { Component } from 'react';
import ProjectListItem from './ProjectListItem.jsx';

class ProjectList extends Component {
    render() {
        var {projects} = this.props;

        var renderProjects = () => {
            return projects.map((project) => {
                return (
                    <ProjectListItem key={project.id} {...project}/>
                )
            })
        }

        return (
            <div className="row">
                {renderProjects()}
            </div>
        );
    }
}

export default ProjectList;