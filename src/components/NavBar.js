import React from 'react';
import {makeStyles} from '@material-ui/core';
import {AppBar, Toolbar, IconButton, Typography} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";
import LogInButton from '../components/LogInButton';
import LogoutButton from './LogoutButton.js';
import delve from './Delve.png';

function NavBar(props) {

    const useStyles = makeStyles((theme) => ({
      root: {
        flexGrow: 1,
      },
        
      menuButton: {
        marginRight: theme.spacing(5),
        color: "#32E0C4",
        "&:hover": {
          backgroundColor: "#32E0C4",
          color: "#0D7377",
        },
      },
        
      title: {
        flexGrow: 1,
        textAlign: "center",
      },
        
      toolbar: {
        backgroundColor: "#0D7377",
        height: 25,
        width: "100%",
      },
        
      link: {
        color: "#32E0C4",
        textDecoration: "none",
      },
        
        delvelogo:{
            width: 350,  
            marginTop: 75,
        },
        
        menulist:{
            color: "#32E0C4",
            "&:hover": {
                backgroundColor: "#32E0C4",
                color: "#0D7377",
            },
        },
    }));

    const classes = useStyles();

    const isLoggedIn = props.loggedIn;

      return (
        <AppBar position="static" elevation={3}>
            <Toolbar className={classes.toolbar}>
                <IconButton edge="start" className={classes.menulist} aria-label="menu"><MenuIcon /></IconButton>
                    <Typography variant="h3" className={classes.title}>
                        <Link to="/Home" className={classes.link}>
                          <img className={classes.delvelogo} src={delve} alt={"Delve Logo"}/>
                        </Link>
                    </Typography>
                  <div className={classes.link}>
                    {isLoggedIn ? <LogoutButton /> : <LogInButton />}
                  </div>
            </Toolbar>
        </AppBar>
      )
}

export default NavBar;