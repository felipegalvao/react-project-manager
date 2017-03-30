import React, { Component } from 'react';
import {connect} from 'react-redux';

import ProjectTodosList from './ProjectTodosList.jsx';
import AddProjectTodo from './AddProjectTodo.jsx';

class ProjectTodos extends Component {
    render() {
        return (
            <div>
                <div className="row row-project-todos">
                    <div className="col-sm-6 col-sm-offset-3 col-todos col-project-area">
                        <h3>Project Todos</h3>
                        <AddProjectTodo id={this.props.params.id} />
                        <ProjectTodosList id={this.props.params.id} />
                    </div>
                </div>                
            </div>
        );
    }
}

export default connect()(ProjectTodos);