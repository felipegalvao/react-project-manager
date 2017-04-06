import React, { Component } from 'react';
import {Link} from 'react-router';

class ProjectViewNavCard extends Component {
    render() {
        var {baseLink, itemLink, cardText} = this.props;

        return (
            <div className="sm-card-projectview">
                <div className="sm-card-projectview-inside">
                    <Link to={baseLink + itemLink}>
                        <p>{cardText}</p>
                    </Link>
                </div>
            </div>
        );
    }
}

export default ProjectViewNavCard;