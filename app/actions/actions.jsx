// Login and Logout Actions
export var startGithubLogin = () => {
    console.log('starting Github Login');
}

export var startGoogleLogin = () => {
    console.log('starting Google Login');
}

export var startFacebookLogin = () => {
    console.log('starting Facebook Login');
}

// Projects Actions
export var addProject = (project) => {
    return {
        type: 'ADD_PROJECT',
        project
    }
}

// Project Todos Actions
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

// Project Messages Actions
export var addProjectMessage = (message) => {    
    return {
        type: 'ADD_PROJECT_MESSAGE',
        message
    }
}

//Project Events Actions
export var addProjectEvent = (event) => {
    return {
        type: 'ADD_PROJECT_EVENT',
        event
    }
}