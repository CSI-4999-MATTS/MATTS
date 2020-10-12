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
import onlineclass from './onlineclass.jpg';

function App() {

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
    <div className="App">
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
                <Link to="/SignUp"><span class="mdc-button__label">Sign Up</span></Link>
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
