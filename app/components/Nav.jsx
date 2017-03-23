import React, { Component } from 'react';
import { Link } from 'react-router';

class Nav extends Component {
    render() {
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
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#">Logout</a></li>                                                
                        </ul>
                    </div>
                </div>
            </nav>            
        );
    }
}

export default Nav;