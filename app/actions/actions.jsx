export var addProject = (project) => {
    return {
        type: 'ADD_PROJECT',
        project
    }
}

export var addProjectTodo = (projectId, todo) => {
    console.log("add todo action dispatched");
    return {
        type: 'ADD_PROJECT_TODO',
        projectId,
        todo
    }
}