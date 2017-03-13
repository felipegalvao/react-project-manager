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
                {this.props.children}
            </div>
        );
    }
}

export default ProjectManagerApp;