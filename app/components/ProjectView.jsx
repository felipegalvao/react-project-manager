import React, { Component } from 'react';
import {connect} from 'react-redux';

import {filterProject} from '../utils/utils.js';
import ProjectViewNav from './ProjectViewNav.jsx';

class ProjectView extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        var {projects} = this.props;
        var project = filterProject(projects, this.props.params.id);

        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <div className="title-with-divider-container">
                            <h2 className="project-title title-with-divider"><span className="span-title-with-divider">{project.name}</span></h2>
                            <hr className="hr-title" />
                        </div>
                    </div>
                </div>
                <ProjectViewNav id={this.props.params.id}/>                
                {this.props.children}
            </div>
        );
    }
}

export default connect(
    (state) => {
        return state;
    }
)(ProjectView);