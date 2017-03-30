import React, { Component } from 'react';

import AddProjectEvent from './AddProjectEvent.jsx';
import ProjectEventsList from './ProjectEventsList.jsx';

class ProjectEvents extends Component {
    render() {
        return (
            <div className="row row-project-events">
                <div className="col-sm-6 col-sm-offset-3 col-events col-project-area">
                    <h3>Project Events</h3>
                    <AddProjectEvent id={this.props.params.id} />
                    <ProjectEventsList id={this.props.params.id} />
                </div>
            </div>
        );
    }
}

export default ProjectEvents;