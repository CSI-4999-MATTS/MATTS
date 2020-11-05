import React from 'react';
import firebase from 'firebase';
import { Link } from 'react-router-dom';
import {makeStyles} from '@material-ui/core';
import { Button } from '@material-ui/core';


function LogoutButton() {

    const useStyles = makeStyles((theme) => ({

        menuButton: {
            marginRight: theme.spacing(5),
            color: "#32E0C4",
            "&:hover": {
              backgroundColor: "#32E0C4",
              color: "#0D7377",
            },
          },

          link: {
            color: "#32E0C4",
            textDecoration: "none",
          },
    }))

    const classes = useStyles();

    return (
        <Link to="/Home" className={classes.link}>
            <Button className={classes.menuButton} onClick={firebase.auth().signOut()}>Logout</Button>
        </Link> 
    )
}

export default LogoutButton;