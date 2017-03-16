export var projectsReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_PROJECT':
            return [
                ...state,
                action.project
            ];        
        default:
            return state;
    }
}

export var todosReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_PROJECT_TODO':
            return [
                ...state,
                action.todo
            ]             
        // case 'TOGGLE_PROJECT_TODO':
        //     return 
        default:
            return state;
    }
}