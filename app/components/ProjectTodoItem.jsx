import React, { Component } from 'react';
import {Checkbox} from 'react-bootstrap';
import {connect} from 'react-redux'

import * as actions from '../actions/actions.jsx';

class ProjectTodoItem extends Component {    
    handleToggleTodo = () => {
        var {dispatch} = this.props;
        // dispatch(actions.)
    }

    render() {
        var {id, description} = this.props;
        
        return (
            <div className="project-todo-item">
                <Checkbox inline>
                    {description}
                </Checkbox>
            </div>
        );
    }
}

export default connect()(ProjectTodoItem);