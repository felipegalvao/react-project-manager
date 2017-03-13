import React, { Component } from 'react';
import {connect} from 'react-redux';

class ProjectView extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        var {projects} = this.props;
        var project = projects.filter((project) => {
            return project.id === this.props.params.id;
        })[0];

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