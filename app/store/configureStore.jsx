var redux = require('redux');
import {projectsReducer, todosReducer} from '../reducers/reducers.jsx';

export var configure = (initialState = {}) => {
    var reducer = redux.combineReducers({
        projects: projectsReducer,
        todos: todosReducer
    });

    var store = redux.createStore(reducer, initialState, redux.compose(
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

    return store;
};


