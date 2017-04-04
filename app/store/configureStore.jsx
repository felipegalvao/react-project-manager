import * as redux from 'redux';
import thunk from 'redux-thunk';

import {projectsReducer, todosReducer, messagesReducer, eventsReducer, authReducer} from '../reducers/reducers.jsx';

export var configure = (initialState = {}) => {
    var reducer = redux.combineReducers({
        projects: projectsReducer,
        todos: todosReducer,
        messages: messagesReducer,
        events: eventsReducer,
        auth: authReducer
    });

    var store = redux.createStore(reducer, initialState, redux.compose(
        redux.applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

    return store;
};


