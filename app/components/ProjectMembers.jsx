import React, { Component } from 'react';

import AddProjectMember from './AddProjectMember.jsx';
import ProjectMembersList from './ProjectMembersList.jsx';

class ProjectMembers extends Component {
    render() {
        return (
            <div>
                <div className="row row-project-members">
                    <div className="col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-2 col-members col-project-area">
                        <h3>Project Members</h3>
                        <AddProjectMember id={this.props.params.id} />
                        <ProjectMembersList id={this.props.params.id} />
                    </div>
                </div>                
            </div>
        );
    }
}

export default ProjectMembers;