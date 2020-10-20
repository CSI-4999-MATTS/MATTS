import React from 'react';
import '../stylesheets/App.css';
import { makeStyles } from '@material-ui/core/styles';
import { Paper} from '@material-ui/core';
import {MDCRipple} from '@material/ripple';
import { Link, Route } from "react-router-dom";
import NavBar from './NavBar';
import { RouterSharp } from '@material-ui/icons';
import firebase, { auth, provider } from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import * as firebaseui from 'firebaseui';
import firebaseApp from '../firebase/config.js';
// import onlineclass from './onlineclass.jpg';

function Dashboard() {
    

/* const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        backgroundColor:'grey',
        display: 'flex',
        margin: 50,
        width: 'native',
        height: 300,
        color:'white',
        
    },
    footer:{
        textAlign:'center',
        height: 75,
        opacity: .3,
        fontSize: 10,
        position: 'absolute',
        bottom: 0,
        display: 'block',
        width: '100%',
    },
}));

const classes = useStyles(); */

    return (
    <div className="Dashboard">

        <NavBar />
        
        Dashboard

    </div>
    
    );

}

export default Dashboard;