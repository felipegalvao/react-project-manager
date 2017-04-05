import React, { Component } from 'react';
import {Link} from 'react-router';

class ProjectListItem extends Component {
    render() {
        var {id, name} = this.props;
        var link = "/projects/" + id;

        return (
            <div className="col-sm-4">
                <Link to={link}>
                    <div className="card-element">                        
                        <h3>{name}</h3>                        
                        <p>Project 1 description</p>
                        <br/>
                        <p>Project Members</p>
                    </div>
                </Link>
            </div>
        );
    }
}

export default ProjectListItem;