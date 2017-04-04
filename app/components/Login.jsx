import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import {connect} from 'react-redux';

import * as actions from '../actions/actions.jsx'

class Login extends Component {
    constructor(props) {
        super(props);
    }

    handleGithubLogin = () => {
        var {dispatch} = this.props;

        dispatch(actions.startGithubLogin());
    }

    handleGoogleLogin = () => {
        var {dispatch} = this.props;

        dispatch(actions.startGoogleLogin());
    }

    handleFacebookLogin = () => {
        var {dispatch} = this.props;

        dispatch(actions.startFacebookLogin());
    }

    render() {
        return (
            <div className="row row-login">
                <div className="col-sm-6 col-sm-offset-3 col-login col-project-area text-center">
                    <h2 className="text-center">Login component</h2>
                    <h5>This is the React Project Manager. Please login with your Github, Google or Facebook account</h5>
                    <Button className="btn-github" onClick={this.handleGithubLogin}><i className="fa fa-github" aria-hidden="true"></i> Login with Github</Button>
                    <Button className="btn btn-google" onClick={this.handleGoogleLogin}><i className="fa fa-google" aria-hidden="true"></i> Login with Google</Button>
                    <Button className="btn btn-facebook" onClick={this.handleFacebookLogin}><i className="fa fa-facebook" aria-hidden="true"></i> Login with Facebook</Button>
                </div>
            </div>
        );
    }
}

export default connect()(Login);