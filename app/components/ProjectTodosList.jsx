import React, { Component } from 'react';
import {connect} from 'react-redux';

import {filterProject} from '../utils/utils.js';
import ProjectTodoItem from './ProjectTodoItem.jsx';

class ProjectTodosList extends Component {
    render() {
        var {projects} = this.props;
        var project = filterProject(projects, this.props.id);

        var renderProjectTodoList = () => {
            console.log(project.todos);
            if (project.todos.length === 0) {
                return (<p>This project still doesn't have any To-Do</p>)
            } else {
                console.log('aabfcdf');
                return project.todos.map((todo) => {
                    return (
                        <ProjectTodoItem key={todo.id} {...todo}/>
                    )
                })
            }
        }

        return (
            <div>
                {renderProjectTodoList()}
            </div>
        );
    }
}

export default connect(
    (state) => {
        return state
    }
)(ProjectTodosList);