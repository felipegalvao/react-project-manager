import React, { Component } from 'react';

class ProjectEvent extends Component {
    render() {
        var {description, date} = this.props;
        return (
            <div>
                <p>{description} - {date}</p>
            </div>
        );
    }
}

export default ProjectEvent;