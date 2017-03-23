import React, { Component } from 'react';
import {connect} from 'react-redux';

import {filterItems} from '../utils/utils.js';
import ProjectMessage from './ProjectMessage.jsx';

class ProjectMessagesList extends Component {
    render() {
        var {messages} = this.props;
        var filteredMessages = filterItems(messages, this.props.id);
        
        var renderProjectMessagesList = () => {
            if (filteredMessages.length === 0) {
                return (<p>There are still no messages for this project</p>)
            } else {
                return filteredMessages.map((message) => {
                    return <ProjectMessage key={message.id} {...message}/>
                })
            }
        }

        return (
            <div className="div-project-messages-list">
                {renderProjectMessagesList()}
            </div>
        );
    }
}

export default connect(
    (state) => {
        return state;
    }
)(ProjectMessagesList)