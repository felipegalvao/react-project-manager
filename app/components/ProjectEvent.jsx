import React, { Component } from 'react';
import moment from 'moment';

class ProjectEvent extends Component {
    render() {
        var {description, date} = this.props;
        return (
            <div className="project-event-container">
                <span>{description}{date === null ? "" : " - " + moment.unix(date).utc().format('DD/MM/YYYY')}</span>
            </div>
        );
    }
}

export default ProjectEvent;