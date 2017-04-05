export var projectsReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_PROJECT':
            return [
                ...state,
                action.project
            ];
        case 'ADD_PROJECTS':
            return [
                ...action.projects
            ]
        case 'LOGOUT':
            return [];
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
        case 'ADD_PROJECT_TODOS':
            return [
                ...action.todos
            ]
        case 'TOGGLE_PROJECT_TODO':
            return state.map((todo) => {
                if (todo.id === action.todoId) {
                    var newTodoCompletedStatus = !todo.completed;

                    return {
                        ...todo,
                        completed: newTodoCompletedStatus
                    };
                } else {
                    return todo;
                }
            })
        case 'SET_PROJECT_TODO_DUE_DATE':
            return state.map((todo) => {
                if (todo.id === action.todoId) {
                    return {
                        ...todo,
                        dueDate: action.todoDueDate
                    };
                } else {
                    return todo;
                }
            })
        default:
            return state;
    }
}

export var messagesReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_PROJECT_MESSAGE':
            return [
                ...state,
                action.message
            ]
        default:
            return state;
    }
}

export var eventsReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_PROJECT_EVENT':
            return [
                ...state,
                action.event
            ]
        default:
            return state;
    }
}


export var authReducer = (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                uid: action.user.uid,
                email: action.user.email,
                displayName: action.user.displayName
            };
        case 'LOGOUT':
            return {};
        default:
            return state;
    }
}