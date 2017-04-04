import React, { Component } from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';

import * as actions from '../actions/actions.jsx';

class Nav extends Component {
    handleLogout = () => {
        var {dispatch} = this.props;

        dispatch(actions.startLogout());
    }    

    render() {
        var {auth} = this.props;

        var renderLogout = () => {
            console.log(auth);
            if (Object.keys(auth).length > 0) {
                return (
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#" onClick={this.handleLogout}>Logout</a></li>                                                
                    </ul>
                )
            }
        }

        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link to='/' className="navbar-brand">React Project Manager</Link>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            <li className="active"><Link to='/'>Home</Link></li>                        
                        </ul>
                        {renderLogout()}
                    </div>
                </div>
            </nav>            
        );
    }
}

export default connect(
    (state) => {
        return state;
    }
)(Nav);