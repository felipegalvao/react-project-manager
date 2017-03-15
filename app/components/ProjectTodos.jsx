import React, { Component } from 'react';
import {connect} from 'react-redux';

import ProjectTodosList from './ProjectTodosList.jsx';
import AddProjectTodo from './AddProjectTodo.jsx';

class ProjectTodos extends Component {
    render() {
        return (
            <div>
                <h3>Project Todos</h3>
                <AddProjectTodo/>
                <ProjectTodosList/>                
            </div>
        );
    }
}

export default connect()(ProjectTodos);