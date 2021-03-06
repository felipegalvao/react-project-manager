import React, { Component } from 'react';
import {Button, FormGroup, FormControl, Form} from 'react-bootstrap';
import {connect} from 'react-redux';

import * as actions from '../actions/actions.jsx';

class AddProjectTodo extends Component {
    handleAddProjectTodo = (e) => {
        var {dispatch} = this.props;        
        e.preventDefault();
        var todoDescription = this.projectTodoDescription.value;
        this.projectTodoDescription.value = "";

        var todo = {            
            project: this.props.id,
            description: todoDescription,
            completed: false,
            dueDate: null,
            responsible: null
        }

        dispatch(actions.startAddProjectTodo(todo));
    }

    render() {
        return (
            <div>                                
                <Form inline onSubmit={this.handleAddProjectTodo} className="form-inline-1-item">
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