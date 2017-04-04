import React, { Component } from 'react';
import {connect} from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import ProjectListItem from './ProjectListItem.jsx';
import * as actions from '../actions/actions.jsx';

class ProjectList extends Component {
    // componentWillMount() {
    //     var {dispatch} = this.props;
        
    //     dispatch(actions.startAddProjects());
    // }

    render() {
        var {projects} = this.props;

        var renderProjects = () => {
            return projects.map((project) => {
                return (
                    <ProjectListItem key={project.id} {...project}/>
                )
            })
        }

        return (
            <div className="row">
                <ReactCSSTransitionGroup
                    transitionName="project-animation"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}>
                    {renderProjects()}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}

export default connect(
    (state) => {
        return state;
    }
)(ProjectList);