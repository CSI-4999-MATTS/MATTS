import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/core/Menu';
import Paper from '@material-ui/core/Paper';
import {MDCRipple} from '@material/ripple';
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

function LearnMore() {

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
    <div className="Login">
        <NavBar />
        
       Learn More Page
        
    </div>
    
    );

}

export default LearnMore;
