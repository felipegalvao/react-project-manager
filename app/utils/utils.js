export var filterProject = (projects, id) => {
    var project = projects.filter((project) => {
        return project.id === id;
    })[0];

    return project
}

export var filterItems = (items, projectId) => {
    var filteredItems = items.filter((item) => {
        return item.projectId === projectId;
    })

    return filteredItems;
}