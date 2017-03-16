import React, { Component } from 'react';
import {connect} from 'react-redux';

import {filterTodos} from '../utils/utils.js';
import ProjectTodoItem from './ProjectTodoItem.jsx';

class ProjectTodosList extends Component {
    render() {
        var {todos} = this.props;
        var filteredTodos = filterTodos(todos, this.props.id);

        var renderProjectTodoList = () => {            
            if (todos.length === 0) {
                return (<p>This project still doesn't have any To-Do</p>)
            } else {                
                return todos.map((todo) => {
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