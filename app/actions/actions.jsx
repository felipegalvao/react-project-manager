export var addProject = (project) => {
    return {
        type: 'ADD_PROJECT',
        project
    }
}

export var addProjectTodo = (todo) => {    
    return {
        type: 'ADD_PROJECT_TODO',        
        todo
    }
}

export var toggleProjectTodo = (todoId) => {    
    return {
        type: 'TOGGLE_PROJECT_TODO',        
        todoId
    }
}

export var setProjectTodoDueDate = (todoId, todoDueDate) => {
    return {
        type: 'SET_PROJECT_TODO_DUE_DATE',
        todoId,
        todoDueDate
    }
}