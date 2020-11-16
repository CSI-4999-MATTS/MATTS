import React from 'react';
import { Link } from 'react-router-dom';
import {makeStyles} from '@material-ui/core';


function HomeButton() {

    const useStyles = makeStyles((theme) => ({

        menuButton: {
            marginRight: theme.spacing(5),
            color: "#32E0C4",
            "&:hover": {
              backgroundColor: "#32E0C4",
              color: "#0D7377",
            },
          },

          buttonlinks: {
            color: "#32E0C4",
            textDecoration: "none",
          },
    }))

    const classes = useStyles();

    return (
        <Link to="/Home" className={classes.buttonlinks}>Go to Homepage</Link> 
    )
}

export default HomeButton;