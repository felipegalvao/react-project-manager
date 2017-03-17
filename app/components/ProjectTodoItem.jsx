import React, { Component } from 'react';
import {Checkbox, Button, Form, FormGroup, FormControl} from 'react-bootstrap';
import {connect} from 'react-redux';
import moment from 'moment';

import * as actions from '../actions/actions.jsx';

class ProjectTodoItem extends Component {    
    constructor(props) {
        super(props);

        this.state = {
            todoExpandedVisible: false
        };
    }

    handleToggleTodo = () => {
        var {id, dispatch} = this.props;
        dispatch(actions.toggleProjectTodo(id))
    }

    handleShowHideTodoExpanded = () => {
        this.setState({
            todoExpandedVisible: !this.state.todoExpandedVisible
        });
    }

    handleSetDueDate = (e) => {
        var {id, dispatch} = this.props;
        e.preventDefault();
        var dueDate = moment(this.projectTodoDueDate.valueAsDate).utc().unix();
        dispatch(actions.setProjectTodoDueDate(id, dueDate));
    }

    render() {
        var {id, description, completed, dueDate} = this.props;
        if (completed === true) {
            var divTodoClass = "div-todo-description div-todo-description-completed";
        } else {
            var divTodoClass = "div-todo-description";
        }

        var renderProjectTodoExpanded = () => {
            if (this.state.todoExpandedVisible === true) {
                return (
                    <div className="div-expanded-todo">
                        <div className="div-set-due-date-form">
                            <Form inline onSubmit={this.handleSetDueDate}>
                                <FormGroup>
                                    <FormControl
                                        type="date"                                    
                                        id="todoDueDate"
                                        inputRef={ref => { this.projectTodoDueDate = ref; }}
                                    />
                                    <Button type="submit" bsStyle="success">Set Due Date</Button>
                                </FormGroup>
                            </Form>
                        </div>
                    </div>
                )
            }
        }

        var renderProjectTodoCheckbox = () => {
            if (completed === true) {
                return (                    
                    <Checkbox inline onClick={this.handleToggleTodo} defaultChecked={false}>
                    </Checkbox>                    
                )
            } else {
                return (                    
                    <Checkbox inline onClick={this.handleToggleTodo}>
                    </Checkbox>
                )                
            }
        }
        
        return (
            <div className="project-todo-item">
                <div className="div-todo-checkbox">
                    {renderProjectTodoCheckbox()}
                </div>
                <div className={divTodoClass} onClick={this.handleShowHideTodoExpanded}>
                    <span className="span-todo-description">{description}</span>
                    <span className="span-todo-due-date">{dueDate === null ? ' - No Due Date' : ' - Due at ' + moment.unix(dueDate).utc().format('DD/MM/YYYY')}</span>
                </div>
                {renderProjectTodoExpanded()}
            </div>
        );
    }
}

export default connect()(ProjectTodoItem);