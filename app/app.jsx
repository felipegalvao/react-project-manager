var React = require('react');
var ReactDOM = require('react-dom');
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

import ProjectManagerApp from './components/ProjectManagerApp.jsx';
import NotFound from './components/NotFound.jsx';
import MainDashboard from './components/MainDashboard.jsx'

// Load app CSS
require('style-loader!css-loader!sass-loader!./styles/app.scss');

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={ProjectManagerApp}>
            <IndexRoute component={MainDashboard} />
            <Route path='*' component={NotFound} />
        </Route>
    </Router>
    ,
    document.getElementById('app')
);