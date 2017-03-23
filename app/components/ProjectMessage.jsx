import React, { Component } from 'react';
import moment from 'moment';

class ProjectMessage extends Component {
    render() {
        var {text, author, sentAt} = this.props;

        return (
            <div className="div-project-message">
                <p>Sent by {author} at {moment.unix(sentAt).format('MMMM Do YYYY, hh:mm:ss')}</p>
                <pre>                    
                    {text}
                </pre>
            </div>
        );
    }
}

export default ProjectMessage;