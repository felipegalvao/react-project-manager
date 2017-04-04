import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

import {browserHistory} from 'react-router';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAsFkuLG_WDqkp9ORGz4ig-foctr4wPpnk",
    authDomain: "react-project-manager.firebaseapp.com",
    databaseURL: "https://react-project-manager.firebaseio.com",
    projectId: "react-project-manager",
    storageBucket: "react-project-manager.appspot.com",
    messagingSenderId: "89966217707"
};
firebase.initializeApp(config);

export var githubProvider = new firebase.auth.GithubAuthProvider();
export var googleProvider = new firebase.auth.GoogleAuthProvider();
export var facebookProvider = new firebase.auth.FacebookAuthProvider();
export var firebaseRef = firebase.database().ref();

export default firebase;