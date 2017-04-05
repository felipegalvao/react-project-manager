import firebase, {firebaseRef, githubProvider, googleProvider, facebookProvider} from '../firebase/';

// --- Login and Logout Actions
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
            firebase.database().ref('users/' + uid + '/projectsWhereOwner').off();
            firebase.database().ref('projects').off();
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
// --- End of Login and Logout actions

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
       updates['/users/' + uid + '/projectsWhereOwner/' + projectRef.key] = true;       

       return firebaseRef.update(updates);    
    }
}

export var addProject = (project) => {
    return {
        type: 'ADD_PROJECT',
        project
    };
}

export var startAddProjects = () => {    
    return (dispatch, getState) => {
        var uid = getState().auth.uid;
        
        var projectsWhereOwnerRef = firebase.database().ref('users/' + uid + '/projectsWhereOwner').on('value', function(snapshot) {            
            var projectsWhereOwner = snapshot.val() || {};
            var projectIdsList = [];
            var projectsList = [];
            
            Object.keys(projectsWhereOwner).forEach((projectId) => {
                projectIdsList.push(projectId)                
            });

            console.log(projectIdsList);
            var projectsRef = firebase.database().ref('projects').orderByKey().startAt(projectIdsList[0]).endAt(projectIdsList[projectIdsList.length - 1]).on('value', function(snapshot) {
            // var projectsRef = firebase.database().ref('projects').equalTo(projectIdsList[0]).on('value', function(snapshot) {
                var projects = snapshot.val() || {};
                Object.keys(projects).forEach((projectId) => {
                    projectsList.push({
                        id: projectId,
                        ...projects[projectId]
                    });
                });

                dispatch(addProjects(projectsList));
            })            
        });
        
        
    }
}

export var addProjects = (projects) => {
    return {
        type: 'ADD_PROJECTS',
        projects
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