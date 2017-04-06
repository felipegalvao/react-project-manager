import React, { Component } from 'react';
import {Form, FormGroup, FormControl, Button} from 'react-bootstrap';
import {connect} from 'react-redux';

class AddProjectMember extends Component {
    handleAddProjectMember = (e) => {
        console.log('Starting add project member');
        var {dispatch} = this.props;
        e.preventDefault();
    }

    render() {
        return (
            <div className="add-project-member-container">
                <p>Enter the new member email on the form below. He will receive an email notification to confirm his participation on this project.</p>
                <Form inline onSubmit={this.handleAddProjectMember} className="form-inline-1-item">
                    <FormGroup>
                        <FormControl
                            type="email"                                
                            placeholder="Enter the email of the new project member" 
                            id="projectMemberEmail" 
                            required 
                            inputRef={ref => { this.projectMemberEmail = ref; }}
                        />
                        <Button type="submit" bsStyle="success">Add Member</Button>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default AddProjectMember;