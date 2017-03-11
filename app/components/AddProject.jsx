import React, { Component } from 'react';
import {Button, FormGroup, FormControl} from 'react-bootstrap';

class AddProject extends Component {
    constructor(props) {
        super(props);

        this.state = {
            addProjectVisible: false
        };
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
    }

    handleCancelAddProject = () => {
        this.setState({addProjectVisible: false});
    }

    handleShowAddProject = () => {
        this.setState({addProjectVisible: true});
    }

    handleAddProject = (e) => {
        e.preventDefault();
        var projectName = this.projectNameInput.value;
        this.setState({addProjectVisible: false});
        this.props.onAddProject(projectName);
    }

    render() {
        var renderAddItem = () => {
            if (this.state.addProjectVisible) {
                return (
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
                    <div className="card-project card-add-project text-center">
                        {renderAddItem()}
                    </div>                    
                </div>
            </div>
        );
    }
}

export default AddProject;