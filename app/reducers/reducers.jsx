export var projectsReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_PROJECT':
            return [
                ...state,
                action.project
            ];
        case 'ADD_PROJECT_TODO':
            return state.map((project) => {
                if (project.id === action.projectId) {
                    return (
                        {
                            ...project,
                            todos: [
                                ...project.todos,
                                action.todo
                            ]
                        }
                    )
                } else {
                    return project;
                }
            });
        default:
            return state;
    }
}