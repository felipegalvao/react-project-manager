import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
var uuid = require('node-uuid');

import ProjectList from './ProjectList.jsx';
import AddProject from './AddProject.jsx';

class MainDashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            projects: []
        }
    }

    handleAddProject = (projectName) => {
        this.setState({
            projects: [
                ...this.state.projects,
                {
                    id: uuid(),
                    name: projectName
                }
            ]
        })
    }

    render() {
        var {projects} = this.state;

        return (
            <div className="container">
                <h1>React Project Manager</h1>
                <div className="h2-title-container">
                    <h2 className="h2-project-list"><span className="span-project-list">Projects</span></h2>
                    <hr className="hr-title" />
                </div>
                <AddProject onAddProject={this.handleAddProject} />
                <ProjectList projects={projects}/>
            </div>
        );
    }
}

export default MainDashboard;