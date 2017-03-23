import React, { Component } from 'react';

import AddProjectEvent from './AddProjectEvent.jsx';
import ProjectEventsList from './ProjectEventsList.jsx';

class ProjectEvents extends Component {
    render() {
        return (
            <div>
                <p>Project Events</p>
                <AddProjectEvent id={this.props.params.id} />
                <ProjectEventsList id={this.props.params.id} />
            </div>
        );
    }
}

export default ProjectEvents;