import React, { Component } from 'react';
import {connect} from 'react-redux';

import {filterItems} from '../utils/utils.js';
import ProjectEvent from './ProjectEvent.jsx';

class ProjectEventsList extends Component {
    render() {
        var {events} = this.props;
        var filteredEvents = filterItems(events, this.props.id);

        var renderProjectEventsList = () => {
            if (filteredEvents.length === 0) {
                return (<p>There are no events for this project yet</p>);
            } else {
                return filteredEvents.map((event) => {
                    return <ProjectEvent key={event.id} {...event} />
                })
            }
        }

        return (
            <div>
                {renderProjectEventsList()}
            </div>
        );
    }
}

export default connect(
    (state) => {
        return state;
    }
)(ProjectEventsList);