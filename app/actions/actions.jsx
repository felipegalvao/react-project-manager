import firebase, {githubProvider, googleProvider, facebookProvider} from '../firebase/';

// Login and Logout Actions
export var startGithubLogin = () => {
    return (dispatch, getState) => {
        return firebase.auth().signInWithPopup(githubProvider).then((result) => {
            console.log('Auth worked!', result);
        }, (error) => {
            console.log('Unable to auth', error);
        });
    }
}

export var startGoogleLogin = () => {
    return (dispatch, getState) => {
        return firebase.auth().signInWithPopup(googleProvider).then((result) => {
            console.log('Auth worked!', result);
        }, (error) => {
            console.log('Unable to auth', error);
        });
    }
}

export var startFacebookLogin = () => {
    return (dispatch, getState) => {
        return firebase.auth().signInWithPopup(facebookProvider).then((result) => {
            console.log('Auth worked!', result);
        }, (error) => {
            console.log('Unable to auth', error);
        });
    }
}

export var startLogout = (uid) => {
    return (dispatch, getState) => {
        return firebase.auth().signOut().then(() => {            
            console.log('logout successful');            
        });
    }
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