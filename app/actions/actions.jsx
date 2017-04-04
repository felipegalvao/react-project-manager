import firebase, {firebaseRef, githubProvider, googleProvider, facebookProvider} from '../firebase/';

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
    };
}

export var login = (user) => {
    return {
        type: 'LOGIN',
        user
    };
}

export var logout = () => {
    return {
        type: 'LOGOUT'
    };
}

// Projects Actions
export var startAddProject = (project) => {
    console.log('Starting Add Project');
    return (dispatch, getState) => {
       var uid = getState().auth.uid;
       var projectToAdd = {
           ...project,
           owner: uid
       }
       var projectRef = firebaseRef.child('projects').push(projectToAdd);

       var updates = {};
       updates['/users/' + uid + '/projects_where_owner/' + projectRef.key] = true;       

       return firebaseRef.update(updates);
    //    return projectRef.then(() => {
    //        var userProjectOwnerObj = {};
    //        userProjectOwnerObj['projects_owner'] = {};
    //        userProjectOwnerObj['projects_owner'][projectRef.key] = true;
    //        firebaseRef.child('users/' + uid).update(userProjectOwnerObj);
    //    })
    }
}

export var addProject = (project) => {
    return {
        type: 'ADD_PROJECT',
        project
    };
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