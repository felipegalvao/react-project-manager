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

// --- Projects Actions
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
        
        var projectsRef = firebase.database().ref('projects').orderByChild("owner").equalTo(uid).on('value', function(snapshot) {            
            var projectsList = [];
            var projects = snapshot.val() || {};
            Object.keys(projects).forEach((projectId) => {
                projectsList.push({
                    id: projectId,
                    ...projects[projectId]
                });
            });

            dispatch(addProjects(projectsList));
        })
    }
}

export var addProjects = (projects) => {
    return {
        type: 'ADD_PROJECTS',
        projects
    }
}

// --- End of Projects Actions

// --- Project Todos Actions
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

export var startAddProjectTodo = (todo) => {
    console.log('Start adding project todo');
    return (dispatch, getState) => {
        var uid = getState().auth.uid;

        var todoRef = firebaseRef.child('todos').push(todo);

        var updates = {};
        updates['/projects/' + todo.project + '/todos/' + todoRef.key] = true;       

        return firebaseRef.update(updates);
    }
}

export var startGetProjectTodos = (project) => {
    return (dispatch, getState) => {        
        console.log('starting getProjectTodos for project', project);

        var projectTodosRef = firebase.database().ref('todos').orderByChild('project').equalTo(project).on('value', function(snapshot) {
            var todosList = [];
            var todos = snapshot.val() || {};
            console.log(todos);
            Object.keys(todos).forEach((todoId) => {
                todosList.push({
                    id: todoId,
                    ...todos[todoId]
                });
            });            


            dispatch(addProjectTodos(todosList));
        })
    }    
}

export var addProjectTodos = (todos) => {
    return {
        type: 'ADD_PROJECT_TODOS',
        todos
    }
}


// --- End of Project Todos Actions

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