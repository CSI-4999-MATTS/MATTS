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
        marginRight: theme.spacing(1),
        color: "#32E0C4",
        "&:hover": {
          backgroundColor: "#32E0C4",
          color: "#0D7377",
        },
      },
      title: {
        flexGrow: 1,
        textAlign: "left",
      },
      toolbar: {
        backgroundColor: "#0D7377",
      },
      link: {
        color: "#32E0C4",
        textDecoration: "none",
      },
    }));

      const classes = useStyles();

      return (
        <AppBar position="static" elevation={3}>
            <Toolbar className={classes.toolbar}>
                <IconButton edge="start" className={classes.menuButton} aria-label="menu"></IconButton>
                    <Typography variant="h3" className={classes.title}>
                        <Link to="/App" className={classes.link}>Delve</Link>
                    </Typography>
                <Link to="/Login" className={classes.link}><Button className={classes.menuButton}>Login</Button></Link>
            </Toolbar>
        </AppBar>
      )
}

export default NavBar;