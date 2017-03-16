export var filterProject = (projects, id) => {
    var project = projects.filter((project) => {
        return project.id === id;
    })[0];

    return project
}

export var filterTodos = (todos, projectId) => {
    var filteredTodos = todos.filter((todo) => {
        return todo.projectId === projectId;
    })
}