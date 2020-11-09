import React from 'react';
import '../stylesheets/App.css';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

function LearnMore(props) {

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
        
}));

const classes = useStyles();

    return (
    <div className={classes.app}>

        <NavBar loggedIn={props.isLoggedIn} />
        
        <div className={classes.page}>
            <h2 className={classes.header}>How We Teach</h2>
            <p className={classes.websiteinfo}> When you sign up for Delve, you will take a quiz designed by our team of experts, which will gauge your proficiency in the categories we offer. Once we have determined your existing knowledge, we’ll make custom recommendations to help you improve your skills and get you excited to learn.</p>
            
        </div>
        
        <div className={classes.page}>
            <h2 className={classes.header}>What We Teach</h2>
            <p className={classes.websiteinfo}>Our recommendations are based on gathering resources from all over the web and categorizing them based on what they can teach you. [Add detailed description of algorithm here]</p>
            
        </div>
        
        <div className={classes.page}>
            <h2 className={classes.header}>Benefits Of Using Our Website</h2>
            <p className={classes.websiteinfo}>With each article you read, we keep track of how you’re doing by [Insert detailed description of achievement system]</p>
            
        </div>
        
        <div className={classes.page}>
            <p className={classes.websiteinfo}>Want to advance your skills in web development with Delve? Get signed up with your google account today by clicking the link below!</p> 
                
                <button className={classes.buttons}>
                        <Link to="/LearnMore" className={classes.buttonlinks}>Sign Up</Link>
                </button>
                
        </div>
        
        
        <div className={classes.footer}>
            Copyright: Allison Broski, Shelby McKay, Maurice Fuentes, Timothy Carpenter, Tanner Porteous
            <p>Oakland University</p>
        
        </div>
    </div>
    
    );

}

export default LearnMore;
