import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import {connect} from 'react-redux';
var uuid = require('node-uuid');

import ProjectList from './ProjectList.jsx';
import AddProject from './AddProject.jsx';

class MainDashboard extends Component {
    constructor(props) {
        super(props)        
    }    

    render() {
        var {auth} = this.props;

        return (
            <div className="container">
                <h2 className="text-center">Hi, {auth.displayName}, welcome to the React Project Manager</h2>
                <div className="title-with-divider-container">
                    <h2 className="h2-project-list title-with-divider"><span className="span-title-with-divider">Projects</span></h2>
                    <hr className="hr-title" />
                </div>
                <AddProject/>
                <ProjectList/>
            </div>
        );
    }
}

export default connect(
    (state) => {
        return state;
    }
)(MainDashboard);