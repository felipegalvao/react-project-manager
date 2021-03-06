import React, { Component } from 'react';
import ProjectMessagesList from './ProjectMessagesList.jsx';
import AddProjectMessage from './AddProjectMessage.jsx';

class ProjectMessageBoard extends Component {
    render() {
        return (
            <div className="row row-project-todos">
                    <div className="col-sm-8 col-sm-offset-2 col-todos col-project-area">
                        <h3>Message Board</h3>
                        <AddProjectMessage id={this.props.params.id} />
                        <ProjectMessagesList id={this.props.params.id} />
                    </div>
            </div>
        );
    }
}

export default ProjectMessageBoard;