import React, {useEffect, useState, useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { db } from '../firebase/config';
import { SignalCellularConnectedNoInternet0BarSharp } from '@material-ui/icons';


function LearningStep(props) {

    var rank = props.rank;
    var title = props.title;
    const [count, setCount] = useState(0);

    
    const useStyles = makeStyles((theme) => ({
        progressinfo: {
            color: "#0D7377", 
            paddingTop: 10,
            paddingLeft: 10,
            borderTop: '2px solid #0D7377',
            marginTop: 0,
        },

        progressbar: {
            borderRadius: 5,
            height: 10,
            marginLeft: 25,
            position: 'relative',
            marginRight: 25,
            marginBottom: 25,
        },
    }));
    const classes = useStyles();


    // Fetch articles here, using title as the attribute to sort by
    db.collection('Articles')
    .get()
    .then( snapshot => {
        const articles = []
        snapshot.forEach( doc => {
            const data = doc.data()
            console.log(doc.data())
            articles.push(data)
            console.log(articles)
        })
        this.setCount({ articles: articles})
        console.log(snapshot)
    })
    .catch( error => console.log(error))
    

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
            Hello write here
            {count}
        </div>
    )
}

export default LearningStep;