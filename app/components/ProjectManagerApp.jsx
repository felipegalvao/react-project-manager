import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class ProjectManagerApp extends Component {
    render() {
        return (
            <div className="container">
                <h1>React Project Manager</h1>
                <Button bsStyle="success">Button test</Button>
            </div>
        );
    }
}

export default ProjectManagerApp;