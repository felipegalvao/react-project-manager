import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
var uuid = require('node-uuid');

import ProjectList from './ProjectList.jsx';
import AddProject from './AddProject.jsx';

class MainDashboard extends Component {
    constructor(props) {
        super(props)        
    }    

    render() {
        return (
            <div className="container">
                <h1>React Project Manager</h1>
                <div className="h2-title-container">
                    <h2 className="h2-project-list"><span className="span-project-list">Projects</span></h2>
                    <hr className="hr-title" />
                </div>
                <AddProject/>
                <ProjectList/>
            </div>
        );
    }
}

export default MainDashboard;