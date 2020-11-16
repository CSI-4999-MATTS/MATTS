import React from 'react';
import { Link } from 'react-router-dom';
import {makeStyles} from '@material-ui/core';


function DashboardButton() {

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
        <Link to="/Dashboard" className={classes.buttonlinks}>Go to Dashboard</Link> 
    )
}

export default DashboardButton;