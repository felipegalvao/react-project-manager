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