
import React, {useState, useEffect} from 'react';
import '../stylesheets/App.css';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from "./NavBar";
import { db } from '../firebase/config';


function FullArticleView(props, {match, location}) {

    const articles = GetArticles(props)
    const IntermediateArticles = GetIntermediateArticles(props)
    const AdvancedArticles = GetAdvancedArticles(props)
    const ProfessionalArticles = GetProfessionalArticles(props)

    function GetArticles(props) {
    
        const [articles, setArticles] = useState([])
    
        useEffect(() => {
                db.collection('Articles').where('Track', '==', props.match.params.track).where('Rank', '==', "Beginner")
                .onSnapshot((snapshot) => {
                    const newArticles = snapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data()
                    }))
    
                    setArticles(newArticles)
                })
        }, [props.match.params.track])
    
        return articles
    }

    function GetIntermediateArticles(props) {
    
        const [articles, setArticles] = useState([])
    
        useEffect(() => {
                db.collection('Articles').where('Track', '==', props.match.params.track).where('Rank', '==', "Intermediate")
                .onSnapshot((snapshot) => {
                    const newArticles = snapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data()
                    }))
    
                    setArticles(newArticles)
                })
        }, [props.match.params.track])
    
        return articles
    }

    function GetAdvancedArticles(props) {
    
        const [articles, setArticles] = useState([])
    
        useEffect(() => {
                db.collection('Articles').where('Track', '==', props.match.params.track).where('Rank', '==', "Advanced")
                .onSnapshot((snapshot) => {
                    const newArticles = snapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data()
                    }))
    
                    setArticles(newArticles)
                })
        }, [props.match.params.track])
    
        return articles
    }

    function GetProfessionalArticles(props) {
    
        const [articles, setArticles] = useState([])
    
        useEffect(() => {
                db.collection('Articles').where('Track', '==', props.match.params.track).where('Rank', '==', "Professional")
                .onSnapshot((snapshot) => {
                    const newArticles = snapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data()
                    }))
    
                    setArticles(newArticles)
                })
        }, [props.match.params.track])
    
        return articles
    }

const useStyles = makeStyles((theme) => ({
    
    app:{
        backgroundColor: "#EEEEEE",
        width: "101%",
    },

    footer:{
        textAlign:'center',
        height: 75,
        opacity: .3,
        fontSize: 10,
        marginTop: 150,
        bottom: 0,
        display: 'block',
        width: '100%',
        
    },
    
    photo:{
        position: 'absolute',
        width: 175,
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderRight: '2px solid #0D7377',
        borderBottom: '2px solid #0D7377',
        backgroundColor: "#0D7377",
        
    },
    
    buttonlinks:{
        color:"#32E0C4",
        textDecoration: 'none', 
        
    },
    
    buttons: {
        backgroundColor: "#0D7377",
        borderRadius: 5,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 8,
        paddingRight: 8,
        border: 0,
        marginLeft: '45%',
        marginTop: 5,
        marginBottom: 10,
        
    },

    page: {
        width: '80%',
        marginTop: 75,
        marginLeft: '10%',
        border: '2px solid #0D7377',
        borderRadius: 10,
                
    },
    
    header: {
        backgroundColor: "#0D7377",
        color: "#32E0C4",
        marginTop: 0,
        textAlign: 'Center',
        
    },
   
    websiteinfo: {
        color: "#0D7377",
        paddingLeft: 15,
        paddingRight: 15,
    },
    
    title: {
        marginTop: 75,
        marginRight: '55%',
        textAlign: 'center',
        color: "#32E0C4",
        fontSize: 50,
        backgroundColor: "#0D7377",
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
    },
        
}));

const classes = useStyles();

    console.log(props.match.params.track)

    return (
    <div className={classes.app}>

        <NavBar loggedIn={props.isLoggedIn} />

        <div className={classes.title}>
            <p>{props.match.params.track}</p>
        </div>
        
        <div className={classes.page}>
            <h2 className={classes.header}>Beginner</h2>
            <ul>
                {articles.map((articles) =>
                <li key={articles.id}>
                    <a href={articles.URL} target="_blank" rel="noopener noreferrer">{articles.Title}</a>
                    <p>{articles.Summary}</p>
                </li>
                )}
            </ul>
            
        </div>
        
        <div className={classes.page}>
            <h2 className={classes.header}>Intermediate</h2>
            <ul>
                {IntermediateArticles.map((IntermediateArticles) =>
                <li key={IntermediateArticles.id}>
                    <a href={IntermediateArticles.URL} target="_blank" rel="noopener noreferrer">{IntermediateArticles.Title}</a>
                    <p>{IntermediateArticles.Summary}</p>
                </li>
                )}
            </ul>
            
        </div>
        
        <div className={classes.page}>
            <h2 className={classes.header}>Advanced</h2>
            <ul>
                {AdvancedArticles.map((AdvancedArticles) =>
                <li key={AdvancedArticles.id}>
                    <a href={AdvancedArticles.URL} target="_blank" rel="noopener noreferrer">{AdvancedArticles.Title}</a>
                    <p>{AdvancedArticles.Summary}</p>
                </li>
                )}
            </ul>
            
        </div>
        
        <div className={classes.page}>
            <h2 className={classes.header}>Professional</h2>
            <ul>
                {ProfessionalArticles.map((ProfessionalArticles) =>
                <li key={ProfessionalArticles.id}>
                    <a href={ProfessionalArticles.URL} target="_blank" rel="noopener noreferrer"v>{ProfessionalArticles.Title}</a>
                    <p>{ProfessionalArticles.Summary}</p>
                </li>
                )}
            </ul>
            
        </div>
        
            
        
        <div className={classes.footer}>
            Copyright: Allison Broski, Shelby McKay, Maurice Fuentes, Timothy Carpenter, Tanner Porteous
            <p>Oakland University</p>
        
        </div>
    </div>
    
    );

}

export default FullArticleView;