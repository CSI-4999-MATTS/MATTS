import React from 'react';
import '../stylesheets/App.css';
import NavBar from './NavBar';
import { makeStyles } from '@material-ui/core/styles';
import defaultprofile from './defaultprofile.png';
import { Link } from "react-router-dom";
import { db } from '../firebase/config.js'

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
    
    profilename: {
        marginLeft: 177,
        backgroundColor: "#0D7377",
        color: "#32E0C4",
        marginTop: 0,
        
    },

    profileinfo: {
        marginLeft: 182,
        color: "#0D7377",
    },
    
    continuetext: {
        textAlign: 'center',  
        color: "#0D7377",
    },
    
    progressinfo: {
         color: "#32E0C4", 
         marginLeft: 220,
        
    },
        
}));

const classes = useStyles();
    console.log(props.user);
    return (
    <div className={classes.app}>

        <NavBar />
        
        <div className={classes.page}>
            <div>
                <img className={classes.photo} src={defaultprofile} />
                <h1 className={classes.profilename} > props.user.displayName </h1>
                <h4 className={classes.profileinfo}>Email: "useremail@email.com"</h4>
                <h4 className={classes.profileinfo}>Skill Level: "Rank"</h4>
                <h4 className={classes.profileinfo}>Learning Progress</h4>
                <p className={classes.progressinfo}>Level1: Completed 100%</p>
                <p className={classes.progressinfo}>Level2: Completed 100%</p>      
                <p className={classes.progressinfo}>Level3: Completed 100%</p>
            </div>
            
        </div>

        <div className={classes.page}>
            <p className={classes.continuetext}>Want to continue where you left off, click below to continue!</p> 
                
                <button class="mdc-button mdc-button--touch" className={classes.buttons}>
                    <div class="mdc-button__ripple"></div>
                        <Link to="/LearnMore" className={classes.buttonlinks}><span class="mdc-button__label">Continue</span></Link>
                    <div class="mdc-button__touch"></div>
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