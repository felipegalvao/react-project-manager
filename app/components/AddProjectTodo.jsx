import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Button, FormGroup, FormControl} from 'react-bootstrap';
var uuid = require('node-uuid');

import * as actions from '../actions/actions.jsx';

class AddProjectTodo extends Component {
    handleAddProjectTodo = (e) => {
        var {dispatch} = this.props;        
        e.preventDefault();
        var todoDescription = this.projectTodoDescription.value;
        this.projectTodoDescription.value = "";

        var todo = {
            id: uuid(),
            description: todoDescription
        }

        dispatch(actions.addProjectTodo(this.props.id, todo));
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleAddProjectTodo}>
                    <FormGroup>
                        <FormControl
                            type="text"                                
                            placeholder="Enter your To-Do" 
                            id="projectTodoDescription"
                            inputRef={ref => { this.projectTodoDescription = ref; }}
                        />
                        <Button type="submit" bsStyle="success">Add To-Do</Button>
                    </FormGroup>                            
                </form>
            </div>
        );
    }
}

export default connect()(AddProjectTodo);