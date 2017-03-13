var uuid = require('node-uuid');

export var projectsReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_PROJECT':
            return [
                ...state,
                {
                    id: action.project.id,
                    name: action.project.name
                }
            ];
        default:
            return state;
    }
}