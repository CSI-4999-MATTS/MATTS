import React from 'react';
import '../stylesheets/App.css';
import { makeStyles } from '@material-ui/core/styles';
import { Paper} from '@material-ui/core';
import {MDCRipple} from '@material/ripple';
import { Link, Route } from "react-router-dom";
import NavBar from './NavBar';
import { RouterSharp } from '@material-ui/icons';
// import onlineclass from './onlineclass.jpg';

function App() {

const useStyles = makeStyles((theme) => ({
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

const classes = useStyles();

    return (
    <div className="App">

        <NavBar />

        <Paper className={classes.paper} elevation={10}>
        
        <div>MATTS is designed to teach you the web development skills you need by learning what you already know. We have gathered resources all across the web to teach what you really need to know so you don’t have to. You’ll choose what skills you want to know, and we’ll give you the resources to learn them.
        </div>
        <div class="mdc-touch-target-wrapper">
            <button class="mdc-button mdc-button--touch">
                <div class="mdc-button__ripple"></div>
                <Link to="/LearnMore"><span class="mdc-button__label">Learn More</span></Link>
                <div class="mdc-button__touch"></div>
            </button>
        </div>
        </Paper>
        
        
        <Paper className={classes.paper} elevation={10}>
            The path to gaining technical skills starts here. Take your first step to learning web development.
            <div class="mdc-touch-target-wrapper">
                <button class="mdc-button mdc-button--touch">
                    <div class="mdc-button__ripple"></div>
                    <Link to="/Login"><span class="mdc-button__label">Create An Account</span></Link>
                    <div class="mdc-button__touch"></div>
                </button>
            </div>
        </Paper>
        
        
        <Paper className={classes.footer} elevation={0}>
            Copyright: Allison Broski, Shelby McKay, Maurice Fuentes, Timothy Carpenter, Tanner Porteous
            <p>Oakland University</p>
        </Paper>

    </div>
    
    );

}

export default App;
