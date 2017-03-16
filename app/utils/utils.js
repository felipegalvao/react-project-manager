export var filterProject = (projects, id) => {
    var project = projects.filter((project) => {
        return project.id === id;
    })[0];

    return project
}