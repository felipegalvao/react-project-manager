import React, { Component } from 'react';
import {Link} from 'react-router';

class ProjectTodosCard extends Component {   
    render() {
        var {id} = this.props;
        var link = id + "/todos";

        return (
            <div>
                <div className="col-sm-4 col-project-todos">
                    <div className="card-element">
                        <Link to={link}>
                            <h4>Todos</h4>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectTodosCard;