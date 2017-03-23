import React, { Component } from 'react';

import Nav from './Nav.jsx';

class ProjectManagerApp extends Component {
    constructor(props) {
        super(props);        
    }    

    render() {
        return (
            <div>
                <Nav/>
                <div className="main-container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default ProjectManagerApp;