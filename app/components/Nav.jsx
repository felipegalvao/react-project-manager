import React, { Component } from 'react';
import { Link } from 'react-router';

class Nav extends Component {
    render() {
        return (
            <div>
                <Link to='/'>Home</Link>&nbsp;
                <p>Logout</p>
            </div>
        );
    }
}

export default Nav;