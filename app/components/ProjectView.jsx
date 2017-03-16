import React, { Component } from 'react';
import {connect} from 'react-redux';

import {filterProject} from '../utils/utils.js';

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
                        <h3 className="project-title">{project.name}</h3>
                    </div>
                </div>
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