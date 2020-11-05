import React from 'react';
import { Link } from 'react-router-dom';
import {makeStyles} from '@material-ui/core';
import { Button } from '@material-ui/core';


function LogInButton() {

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
        <Link to="/Login" className={classes.link}>
            <Button className={classes.menuButton}>Login</Button>
        </Link> 
    )
}

export default LogInButton;