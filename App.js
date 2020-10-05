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
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

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
                    MATTS
                </Typography>
                <Button color="inherit">Sign up</Button>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    
    
   
        <Paper className={classes.paper} elevation={10}>
        info about our website
        </Paper>
        
        
        <Paper className={classes.paper} elevation={10}>
        If you feel that our website will help you learn more about web development, create your account today.
        
        </Paper>
        
        
        <Paper className={classes.footer} elevation={0}>
            Copyright: Allison Broski, Shelby McKay, Maurice Fuentes, Timothy Carpenter, Tanner Porteous
            <p>Oakland University</p>
        </Paper>
        
       
    </div>
    
    );

}

export default App;
