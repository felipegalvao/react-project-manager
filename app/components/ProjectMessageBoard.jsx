import React, { Component } from 'react';
import ProjectMessagesList from './ProjectMessagesList.jsx';;

class ProjectMessageBoard extends Component {
    render() {
        return (
            <div>
                <h3>Message Board</h3>
                <ProjectMessagesList/>
            </div>
        );
    }
}

export default ProjectMessageBoard;