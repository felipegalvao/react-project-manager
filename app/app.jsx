import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, Link, IndexRoute, hashHistory, browserHistory} from 'react-router';

import Login from './components/Login.jsx';
import ProjectManagerApp from './components/ProjectManagerApp.jsx';
import NotFound from './components/NotFound.jsx';
import MainDashboard from './components/MainDashboard.jsx';
import ProjectView from './components/ProjectView.jsx';
import ProjectTodos from './components/ProjectTodos.jsx';
import ProjectPanel from './components/ProjectPanel.jsx';
import ProjectMessageBoard from './components/ProjectMessageBoard.jsx';
import ProjectEvents from './components/ProjectEvents.jsx';
import ProjectMembers from './components/ProjectMembers.jsx';
var store = require('./store/configureStore.jsx').configure();

import * as actions from './actions/actions.jsx';
import firebase from './firebase/index.js';

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(actions.login(user));
    store.dispatch(actions.startGetProjects());
    browserHistory.push('/');
  } else {
    store.dispatch(actions.logout());
    browserHistory.push('/login');
  }
});

// Load app CSS
require('style-loader!css-loader!sass-loader!./styles/app.scss');

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={ProjectManagerApp}>
                <IndexRoute component={MainDashboard} />
                <Route path='/projects/:id' component={ProjectView}>
                    <Route path='/projects/:id/todos' component={ProjectTodos} />
                    <Route path='/projects/:id/messageboard' component={ProjectMessageBoard} />
                    <Route path='/projects/:id/events' component={ProjectEvents} />
                    <Route path='/projects/:id/members' component={ProjectMembers} />
                    <IndexRoute component={ProjectPanel} />                    
                </Route>
                <Route path="/login" component={Login} />
                <Route path='*' component={NotFound} />            
            </Route>
        </Router>
    </Provider>
    ,
    document.getElementById('app')
);