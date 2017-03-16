import React, { Component } from 'react';

class ProjectTodoItem extends Component {
    render() {
        var {id, description} = this.props;
        
        return (
            <div>
                <p>{description}</p>
            </div>
        );
    }
}

export default ProjectTodoItem;