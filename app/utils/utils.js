export var filterProjects = (projects, id) => {
    var project = projects.filter((project) => {
        return project.id === this.props.params.id;
    })[0];

    return project
}