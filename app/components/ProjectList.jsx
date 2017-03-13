import React, { Component } from 'react';
import ProjectListItem from './ProjectListItem.jsx';
import {connect} from 'react-redux';

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

export default connect(
    (state) => {
        return state;
    }
)(ProjectList);