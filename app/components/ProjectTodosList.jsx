import React, { Component } from 'react';
import {connect} from 'react-redux';

import {filterItems} from '../utils/utils.js';
import ProjectTodoItem from './ProjectTodoItem.jsx';
import * as actions from '../actions/actions.jsx'

class ProjectTodosList extends Component {
    componentWillMount() {
        console.log('entering componentWillMount');
        var {dispatch} = this.props;

        dispatch(actions.startGetProjectTodos(this.props.id));
    }

    componentWillUnmount() {
        var {dispatch} = this.props;

        dispatch(actions.addProjectTodos([]));
    }

    render() {
        var {todos} = this.props;        

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