import React from 'react';
import '../stylesheets/App.css';
import NavBar from './NavBar';
import { makeStyles } from '@material-ui/core/styles';
import defaultprofile from './defaultprofile.png';
import { Link } from "react-router-dom";
import LinearProgress from '@material-ui/core/LinearProgress';
import { db } from '../firebase/config';


function Dashboard(props) {

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
        width: 125,
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
    
    profilename: {
        marginLeft: 127,
        backgroundColor: "#0D7377",
        color: "#32E0C4",
        marginTop: 0,
        paddingLeft: 10,
        
    },

    profileinfo: {
        marginLeft: 132,
        color: "#0D7377",
    },
    
    continuetext: {
        textAlign: 'center',  
        color: "#0D7377",
    },
    
    progressinfo: {
        color: "#0D7377", 
        paddingTop: 10,
        paddingLeft: 10,
        borderTop: '2px solid #0D7377',
    },
    
    progressinfotop: {
        color: "#0D7377", 
        paddingLeft: 10,
        
    },
    
    progressbar: {
        borderRadius: 5,
        height: 10,
        marginLeft: 25,
        position: 'relative',
        marginRight: 25,
        
    },
    
    progressbarbottom: {
        borderRadius: 5,
        height: 10,
        marginLeft: 25,
        position: 'relative',
        marginRight: 25,
        marginBottom: 25,
    },
    
    progressname: {
        backgroundColor: "#0D7377",
        color: "#32E0C4",
        marginTop: 0,
        paddingLeft: 25,
        paddingBottom: 5,
    },
        
}));

const classes = useStyles();

var userName, userEmail, planRank, designRank, implementRank, testRank, maintRank;

    if (props.isLoggedIn){
        // Fetch information from DB
        // db.collection('Users').doc(props.user).onSnapshot(
        //     // Includes listening for metadata information; this means updates to the storage system itself.
        //     {includeMetadataChanges: true},
        // function(userInfo) {
        //     console.log(userInfo)
        // } ).addOnCompleteListener((complete) => {
        //     if (complete.isSuccessful()) {
        //         console.log('success!')
        //     }
        // })
    } else {
        console.log('Hmmmm')
    }

    return (
    <div className={classes.app}>

        <NavBar loggedIn={props.isLoggedIn}/>
        
        <div className={classes.page}>
            <img className={classes.photo} src={defaultprofile} alt={"UserPhoto"}/>
            <h1 className={classes.profilename} >{userName}</h1>
            <h4 className={classes.profileinfo}>Email: {userEmail}</h4>
            <h4 className={classes.profileinfo}>Rank: "Rank"</h4>
                    
        </div>
        
        <div className={classes.page}>
            <h1 className={classes.progressname} >Learning Progress</h1>
            <p className={classes.progressinfotop}>Planning - 75%</p>
            <LinearProgress variant="determinate" className={classes.progressbar} value={75} />
            <p className={classes.progressinfo}>Design - 50%</p>
            <LinearProgress variant="determinate" className={classes.progressbar} value={50} />
            <p className={classes.progressinfo}>Implementation - 100%</p>
            <LinearProgress variant="determinate" className={classes.progressbar} value={100} />
            <p className={classes.progressinfo}>Testing & Deployment - 75%</p>
            <LinearProgress variant="determinate" className={classes.progressbar} value={75} />
            <p className={classes.progressinfo}>Maintenance - 25%</p>
            <LinearProgress variant="determinate" className={classes.progressbarbottom} value={25} />
        
        </div>
        
        <div className={classes.page}>
            <p className={classes.continuetext}>Want to continue where you left off, click below to continue!</p> 
                
                <button className={classes.buttons}>
                    <Link to="/LearnMore" className={classes.buttonlinks}>Continue</Link>
                </button>
                
        </div>
        
        <div className={classes.footer}>
            Copyright: Allison Broski, Shelby McKay, Maurice Fuentes, Timothy Carpenter, Tanner Porteous
            <p>Oakland University</p>
        
        </div>
    </div>
    
    );

}

export default Dashboard;