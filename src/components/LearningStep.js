import React, {useEffect, useState, useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { db } from '../firebase/config';
import firebase from 'firebase';
import { SignalCellularConnectedNoInternet0BarSharp } from '@material-ui/icons';

function GetArticles() {
    const[articles, setArtciles] = useState([])

    useEffect(() => {
        firebase
            .firestore()
            .collection('Articles').where('Track', '==', 'Planning')
            .onSnapshot((snapshot) => {
                const newArticles = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))

                setArtciles(newArticles)
            })
    }, [])

    return articles
}

//const ArticlesList = () => {

//} 

function LearningStep(props) {

    var rank = props.rank;
    var title = props.title;
    //const [count, setCount] = useState([]);

    const articles = GetArticles()
    
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
            {/*<ul>
                {articles.map((articles) =>
                    <li key={articles.id}>
                        <div>
                            <a href={articles.URL}>{articles.Title}</a>
                        </div>
                    </li>
                )}
                </ul>*/}
            
        </div>
    )
}

export default LearningStep;