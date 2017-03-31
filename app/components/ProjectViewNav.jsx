import React, { Component } from 'react';
import {Link} from 'react-router';

class ProjectViewNav extends Component {


    render() {
        var {id} = this.props;        
        var baseLink = "/projects/" + id;

        return (
            <div className="row row-project-nav">
                <div className="col-sm-2">
                    <div className="sm-card-projectview">
                        <Link to={baseLink}>
                            <p>Dashboard</p>
                        </Link>
                    </div>
                </div>
                <div className="col-sm-2">
                    <div className="sm-card-projectview">
                        <Link to={baseLink + "/todos"}>
                            <p>Todos</p>
                        </Link>
                    </div>
                </div>
                <div className="col-sm-2">
                    <div className="sm-card-projectview">
                        <Link to={baseLink + "/messageboard"}>
                            <p>Message Board</p>
                        </Link>
                    </div>
                </div>
                <div className="col-sm-2">
                    <div className="sm-card-projectview">
                        <Link to={baseLink + "/events"}>
                            <p>Events</p>
                        </Link>
                    </div>
                </div>                    
                <div className="col-sm-2">
                    <div className="sm-card-projectview">
                        <Link to={baseLink + "/members"}>
                            <p>Project Members</p>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectViewNav;