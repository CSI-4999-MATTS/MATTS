import React from 'react';
import {makeStyles} from '@material-ui/core';
import {AppBar, Toolbar, IconButton, Typography, Button} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";

function NavBar () {

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
        
      }));

      const classes = useStyles();

      return (
        <AppBar position="static" elevation={10}>
            <Toolbar className={classes.toolbar}>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h3" className={classes.title}>
                    <Link to="/App">MATTS</Link>
                </Typography>
                <Link to="/Login"><Button color="inherit">Login</Button></Link>
            </Toolbar>
        </AppBar>
      )
}

export default NavBar;