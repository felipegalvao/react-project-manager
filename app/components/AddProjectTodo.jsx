import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Button, FormGroup, FormControl, Form} from 'react-bootstrap';
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
            projectId: this.props.id,
            description: todoDescription,
            completed: false,
            dueDate: null
        }

        dispatch(actions.addProjectTodo(todo));
    }

    render() {
        return (
            <div>                                
                <Form inline onSubmit={this.handleAddProjectTodo}>
                    <FormGroup>
                        <FormControl
                            type="text"                                
                            placeholder="Enter your To-Do" 
                            id="projectTodoDescription" 
                            required 
                            inputRef={ref => { this.projectTodoDescription = ref; }}
                        />
                        <Button type="submit" bsStyle="success">Add To-Do</Button>
                    </FormGroup>
                </Form>                
            </div>                                    
        );
    }
}

export default connect()(AddProjectTodo);