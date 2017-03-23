import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Button, FormGroup, FormControl, Form, ControlLabel} from 'react-bootstrap';
var uuid = require('node-uuid');
import moment from 'moment';

import * as actions from '../actions/actions.jsx';

class AddProjectEvent extends Component {
    handleAddProjectEvent = (e) => {
        var {dispatch} = this.props;
        e.preventDefault();
        var eventDescription = this.projectEventDescription.value;
        var eventDate = moment(this.projectEventDate.valueAsDate).utc().unix();
        this.projectEventDescription.value = "";
        this.projectEventDate.value = "";

        var event = {
            id: uuid(),
            projectId: this.props.id,
            description: eventDescription,
            date: eventDate
        }

        dispatch(actions.addProjectEvent(event));
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleAddProjectEvent}>
                    <FormGroup>
                        <ControlLabel>Event</ControlLabel>
                        <FormControl
                            type="text"                             
                            placeholder="Enter the event description here" 
                            id="projectEventDescription" 
                            required 
                            inputRef={ref => { this.projectEventDescription = ref; }}
                        />                        
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Date</ControlLabel>
                        <FormControl
                            type="date"                                    
                            id="projectEventDate"
                            inputRef={ref => { this.projectEventDate = ref; }}
                        />                        
                    </FormGroup>
                    <Button type="submit" bsStyle="success">Create Event</Button>
                </Form>            
            </div>
        );
    }
}

export default connect()(AddProjectEvent);