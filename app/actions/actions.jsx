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

export var toggleProjectTodo = (projectId, todoId) => {
    return {
        type: 'TOGGLE_PROJECT_TODO',
        projectId,
        todoId
    }
}