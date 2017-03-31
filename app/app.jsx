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
var store = require('./store/configureStore.jsx').configure();

import * as firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAsFkuLG_WDqkp9ORGz4ig-foctr4wPpnk",
    authDomain: "react-project-manager.firebaseapp.com",
    databaseURL: "https://react-project-manager.firebaseio.com",
    projectId: "react-project-manager",
    storageBucket: "react-project-manager.appspot.com",
    messagingSenderId: "89966217707"
};
firebase.initializeApp(config);

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // store.dispatch(actions.login(user.uid));
    // store.dispatch(actions.startAddTodos());
    browserHistory.push('/');
  } else {
    // store.dispatch(actions.logout());
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