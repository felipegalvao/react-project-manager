import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Button, FormGroup, FormControl, Form, ControlLabel} from 'react-bootstrap';
var uuid = require('node-uuid');
import moment from 'moment';

import * as actions from '../actions/actions.jsx';

class AddProjectMessage extends Component {
    handleAddProjectMessage = (e) => {
        var {dispatch} = this.props;        
        e.preventDefault();
        var messageAuthor = this.projectMessageAuthor.value;
        this.projectMessageAuthor.value = "";
        var messageText = this.projectMessageText.value;
        this.projectMessageText.value = "";

        var message = {
            id: uuid(),
            projectId: this.props.id,
            author: messageAuthor,
            text: messageText,
            sentAt: moment().unix()
        }

        dispatch(actions.addProjectMessage(message));
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleAddProjectMessage}>
                    <FormGroup>
                        <ControlLabel>Name</ControlLabel>
                        <FormControl
                            type="text"                                
                            placeholder="Enter your name here" 
                            id="projectMessageAuthor" 
                            required 
                            inputRef={ref => { this.projectMessageAuthor = ref; }}
                        />                        
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Message</ControlLabel>
                        <FormControl
                            componentClass="textarea"
                            placeholder="Enter your message here" 
                            id="projectMessageText" 
                            required 
                            inputRef={ref => { this.projectMessageText = ref; }}
                        />                        
                    </FormGroup>
                    <Button type="submit" bsStyle="success">Send Message</Button>
                </Form>            
            </div>
        );
    }
}

export default connect()(AddProjectMessage);