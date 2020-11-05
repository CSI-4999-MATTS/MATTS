import React from 'react';
import '../stylesheets/App.css';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from './NavBar';
import * as firebaseui from 'firebaseui';
import { firebaseApp } from '../firebase/config.js';


function Login() {

const useStyles = makeStyles((theme) => ({
    
    app:{
        backgroundColor: "#EEEEEE",
        width: "101%",
    },

    footer:{
        textAlign:'center',
        height: 75,
        opacity: .3,
        fontSize: 10,
        marginTop: 350,
        bottom: 0,
        display: 'block',
        width: '100%',
        
    },
    
    
    sitefont:{
        color: "#0D7377",
        textAlign: 'center',
        padding: 5,
        marginTop: 200,
    
    },

    
    signinlink: {
        border: '2px solid #0D7377',  
        width: '40%',
        marginLeft: '30%',
        marginRight: '30%',
        borderRadius: 10,
        backgroundColor: "#0D7377",
        marginTop: 200,
        
    },
    
    googlelink: {
        marginTop: 40,
        marginBottom: 40,
        
    },
    
    header: {
        textAlign: "center",
        color: "white",
        fontSize: 50,
    },
    
    text: {
        fontSize: 15,
        textAlign: "center",
        color: "#32E0C4",
    },
    
}));

var uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    signInSuccessUrl: '/Dashboard',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ]
  };

if (firebaseui.auth.AuthUI.getInstance()){
    var ui = firebaseui.auth.AuthUI.getInstance()
    ui.start('#firebaseui-auth-container', uiConfig)
} else {
    ui = new firebaseui.auth.AuthUI(firebase.auth())
    ui.start('#firebaseui-auth-container', uiConfig)
};

if (ui.isPendingRedirect()){
  ui.start('#firebaseui-auth-container', uiConfig);
}

const classes = useStyles();


    return (
    
        <div className={classes.app}>
            <NavBar />
            
            <div className={classes.signinlink}> 
                    <h1 className={classes.header}>Login</h1>
            
                    <p className={classes.text}> Sign-up and login are simple! Just login using a valid Gmail account and get started right away!</p>  
            
                    <div id='firebaseui-auth-container'>
                        <StyledFirebaseAuth className={classes.googlelink} uiConfig={uiConfig} firebaseAuth={firebaseApp.auth()}/>
                    </div>

            </div>

            <div className={classes.footer}>
                Copyright: Allison Broski, Shelby McKay, Maurice Fuentes, Timothy Carpenter, Tanner Porteous
                <p>Oakland University</p>
            
            </div>

        </div>
    
    );

}

export default Login;
