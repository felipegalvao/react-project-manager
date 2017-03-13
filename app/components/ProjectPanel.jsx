import React, { Component } from 'react';

import ProjectTodosCard from './ProjectTodosCard.jsx';

class ProjectPanel extends Component {
    render() {
        var id = this.props.params.id;

        return (
            <div className="row">
                <ProjectTodosCard id={id} />
            </div>
        );
    }
}

export default ProjectPanel;