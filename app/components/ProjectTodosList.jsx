import React, { Component } from 'react';
import {connect} from 'react-redux';

import {filterProject} from '../utils/utils.js'

class ProjectTodosList extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default connect(
    (state) => {
        return state
    }
)(ProjectTodosList);