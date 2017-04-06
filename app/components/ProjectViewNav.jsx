import React, { Component } from 'react';
import {Link} from 'react-router';

import ProjectViewNavCard from './ProjectViewNavCard.jsx';

class ProjectViewNav extends Component {


    render() {
        var {id} = this.props;        
        var baseLink = "/projects/" + id;

        return (
            <div className="row row-project-nav">
                <div className="col-sm-2">
                    <ProjectViewNavCard baseLink={baseLink} itemLink={"/"} cardText={"Dashboard"}/>
                </div>
                <div className="col-sm-2">
                    <ProjectViewNavCard baseLink={baseLink} itemLink={"/todos"} cardText={"To-Dos"}/>
                </div>
                <div className="col-sm-2">
                    <ProjectViewNavCard baseLink={baseLink} itemLink={"/messageboard"} cardText={"Message Board"}/>
                </div>
                <div className="col-sm-2">
                    <ProjectViewNavCard baseLink={baseLink} itemLink={"/events"} cardText={"Events"}/>
                </div>                    
                <div className="col-sm-2">
                    <ProjectViewNavCard baseLink={baseLink} itemLink={"/members"} cardText={"Members"}/>                    
                </div>
            </div>
        );
    }
}

export default ProjectViewNav;