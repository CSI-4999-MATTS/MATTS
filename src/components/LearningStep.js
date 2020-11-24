import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

function LearningStep(props) {

    var rank = props.rank;
    var title = props.title;
    
    const useStyles = makeStyles((theme) => ({
        progressinfo: {
            color: "#0D7377", 
            paddingTop: 15,
            paddingLeft: 25,
            borderTop: '2px solid #0D7377',
            marginTop: 0,
        },

        progressbar: {
            borderRadius: 5,
            height: 10,
            marginLeft: 25,
            position: 'relative',
            marginRight: '25%',
            marginBottom: 25,
            
        },

        link: {
            color: "#32E0C4",
            textDecoration: "none",
        },

        menuButton: {
            marginRight: theme.spacing(5),
            color: "#32E0C4",
            "&:hover": {
              backgroundColor: "#32E0C4",
              color: "#0D7377",
            },
        },

    }));
    const classes = useStyles();

    function percentageCalculator (rank) {
        switch (rank){
            case 'Beginner':
                return 25;
            case 'Intermediate':
                return 50;
            case 'Advanced':
                return 75;
            case 'Professional':
                return 100;
            default:
                return 0;
        }
    };
    
    return (
        
        <div>
            <p className={classes.progressinfo}>{title} - {rank}</p>
            <LinearProgress variant="determinate" className={classes.progressbar} value={percentageCalculator(rank)} />
            <Link to={{pathname: "/Quiz", state: {track: title}}} className={classes.link}>
                <Button style={{backgroundColor: "#0D7377", marginLeft: '82%',borderRadius: 5, paddingTop: 10, paddingBottom: 10, paddingLeft: 20, paddingRight: 20, border: 0, marginTop: -75, marginBottom: 10, color: "#32E0C4"}} className={classes.menuButton}>Start Quiz</Button>
            </Link> 
        </div>
    )
}

export default LearningStep;