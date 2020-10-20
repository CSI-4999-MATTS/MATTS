import React from 'react';
import '../stylesheets/App.css';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from './NavBar';
import * as firebaseui from 'firebaseui';
import firebaseApp from '../firebase/config.js';

var uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    signInSuccessUrl: '/Dashboard',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    //signInSuccessUrl: '/signedIn',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ]
  };

var ui = new firebaseui.auth.AuthUI(firebaseApp.auth());

// Check to see if pending redirect from Auth0 provider - i.e. Google
if (ui.isPendingRedirect()){
  ui.start('#firebaseui-auth-container', uiConfig);
}


function Login() {

    return (
    <div className="Login">
        <NavBar />
        
        Login Page
       
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebaseApp.auth()}/>

    </div>
    
    );

}

export default Login;
