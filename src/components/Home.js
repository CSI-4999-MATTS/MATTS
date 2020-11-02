import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import onlineclass from './onlineclass.jpg';
import onlineclass2 from './onlineclass2.jpg';
import { Link } from "react-router-dom";
import NavBar from './NavBar';


function Home() {

      
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
            position: 'relative',
            marginTop: 75,
            width: '70%',
            marginLeft: '15%',
            marginRight: '15%',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            border: '2px solid #0D7377',
        },
        
        sitefont:{
            color: "#0D7377",
            textAlign: 'center',
            padding: 5,
        
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
        
        border: {
            border: '2px solid #0D7377',
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            width: '70%',
            marginLeft: '15%',
            marginRight: '15%',
        },
        
    }));
    const classes = useStyles();
    
        return (
        
        <div className={classes.app}>
    
            <NavBar />
       
            <div>
                <img className={classes.photo} src={onlineclass} />
            </div>
            
            <div className={classes.border}>    
            
            <div className={classes.sitefont}>
                Delve is designed to teach you the web development skills you need by learning what you already know. We have gathered resources all across the web to teach what you really need to know so you don’t have to. You’ll choose what skills you want to know, and we’ll give you the resources to learn them.
            </div>
            
            
            <div>
                <button className="mdc-button mdc-button--touch" className={classes.buttons}>
                    <div className="mdc-button__ripple"></div>
                        <Link to="/LearnMore" className={classes.buttonlinks}><span className="mdc-button__label">Learn More</span></Link>
                    <div className="mdc-button__touch"></div>
                </button>
                
            </div>
            </div>
            <div>
                <img className={classes.photo} src={onlineclass2} />
            </div>
       
            <div className={classes.border}>
                
            <div className={classes.sitefont}>        
                The path to gaining technical skills starts here. Take your first step to learning web development.
            </div>
            
            
            <div class="mdc-touch-target-wrapper">
                <button class="mdc-button mdc-button--touch" className={classes.buttons}>
                    <div class="mdc-button__ripple"></div>
                    <Link to="/Login" className={classes.buttonlinks}><span class="mdc-button__label">Sign Up</span></Link>
                    <div class="mdc-button__touch"></div>
                </button>
            </div>
            
            </div>
            
            
            <div className={classes.footer}>
                Copyright: Allison Broski, Shelby McKay, Maurice Fuentes, Timothy Carpenter, Tanner Porteous
                <p>Oakland University</p>
            
            </div>
           
       
        </div>
        );
    
    }
    
    export default Home;