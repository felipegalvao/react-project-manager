import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Button, FormGroup, FormControl} from 'react-bootstrap';
import {connect} from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
var uuid = require('node-uuid');

import * as actions from '../actions/actions.jsx';

class AddProject extends Component {
    constructor(props) {
        super(props);

        this.state = {
            addProjectVisible: false
        };
    }

    componentDidUpdate(prevProps, prevState) {
        var projectNameInput = ReactDOM.findDOMNode(this.projectNameInput)

        if (projectNameInput !== null) {
            ReactDOM.findDOMNode(this.projectNameInput).focus();
        }        
    }

    handleCancelAddProject = () => {
        this.setState({addProjectVisible: false});        
    }

    handleShowAddProject = () => {
        this.setState({addProjectVisible: true});        
    }    

    handleAddProject = (e) => {
        var {dispatch} = this.props;
        e.preventDefault();
        var projectName = this.projectNameInput.value;
        var project = {            
            name: projectName,            
            completed: false
        };
        this.setState({addProjectVisible: false});
        dispatch(actions.startAddProject(project));
    }

    render() {
        var renderAddItem = () => {
            if (this.state.addProjectVisible) {
                return (
                    <ReactCSSTransitionGroup
                        transitionName="show-add-project-animation"
                        transitionAppear={true}
                        transitionAppearTimeout={500}
                        transitionEnter={false}
                        transitionLeave={false}>
                        <form onSubmit={this.handleAddProject}>
                            <FormGroup>
                                <FormControl
                                    type="text"                                
                                    placeholder="Enter Project name" 
                                    id="projectName"
                                    inputRef={ref => { this.projectNameInput = ref; }}
                                />
                            </FormGroup>
                            <FormGroup className="addproject-buttons-container">
                                <Button type="submit" bsStyle="success">Save</Button>
                                <Button onClick={this.handleCancelAddProject}>Cancel</Button>
                            </FormGroup>                        
                        </form>
                    </ReactCSSTransitionGroup>
                )
            } else {
                return (                    
                    <div className="showaddproject-container">
                        <i className="fa fa-plus" aria-hidden="true" onClick={this.handleShowAddProject}></i>
                        <p onClick={this.handleShowAddProject}>New Project</p>
                    </div>                    
                )
            }
        }

        return (
            <div className="row">
                <div className="col-sm-4 col-add-project">
                    <div className="card-element card-add-project text-center">                        
                        {renderAddItem()}                        
                    </div>                    
                </div>
            </div>
        );
    }
}

export default connect()(AddProject);