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

function LearnMore() {

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',   
  },
  toolbar:{
      backgroundColor: 'grey',
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
        <AppBar position="static" elevation={10}>
            <Toolbar className={classes.toolbar}>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h3" className={classes.title}>
                    <Link to="/App">MATTS</Link>
                </Typography>
                <Link to="/SignUp"><Button color="inherit">Sign up</Button></Link>
                <Link to="/Login"><Button color="inherit">Login</Button></Link>
                
            </Toolbar>
        </AppBar>
        
       Learn More Page
        
    </div>
    
    );

}

export default LearnMore;
