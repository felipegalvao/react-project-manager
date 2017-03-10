var React = require('react');
var ReactDOM = require('react-dom');


import ProjectManagerApp from './components/ProjectManagerApp.jsx';

// Load app CSS
require('style-loader!css-loader!sass-loader!./styles/app.scss');

ReactDOM.render(
    <ProjectManagerApp/>,
    document.getElementById('app')
);