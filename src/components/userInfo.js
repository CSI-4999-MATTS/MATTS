import React from 'react'
import '../stylesheets/App.css';
import { makeStyles } from '@material-ui/core/styles';
import defaultprofile from '../../public/defaultprofile.png';
import { Link } from "react-router-dom";
import LearningStep from '../components/LearningStep';

function UserInfo(props) {

    // Gets all user info from props
    var userName = props.user.name;
    var userEmail = props.user.email;
    var planRank = props.user.planningRank;
    var designRank = props.user.designRank;
    var implementRank = props.user.implementationRank;
    var testRank = props.user.testingDevRank; 
    var maintRank = props.user.maintenanceRank;


    const useStyles = makeStyles((theme) => ({
        
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
            marginTop: 0,
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
            marginBottom: 25,
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
            marginBottom: 0,
        },
            
    }));

    const classes = useStyles();


    return (
        <div>
            <div className={classes.page}>
                <img className={classes.photo} src={defaultprofile} alt={"UserPhoto"}/>
                <h1 className={classes.profilename} >{userName}</h1>
                <h4 className={classes.profileinfo}>Email: {userEmail}</h4>
                <h4 className={classes.profileinfo}>Rank: "Rank"</h4>
            </div>
        
            <div className={classes.page}>
                <h1 className={classes.progressname} >Learning Progress</h1>
                <LearningStep rank={planRank} title={'Planning'} />
                <LearningStep rank={designRank} title={'Design'} />
                <LearningStep rank={implementRank} title={'Implementation'} />
                <LearningStep rank={testRank} title={'Testing & Deployment'} />
                <LearningStep rank={maintRank} title={'Maintenance'} />
            </div>
            
            <div className={classes.page}>
                <p className={classes.continuetext}>Want to continue where you left off, click below to continue!</p> 
                    
                    <button className={classes.buttons}>
                        <Link to="/LearnMore" className={classes.buttonlinks}>Continue</Link>
                    </button>   
            </div>
        </div>
    )
}

export default UserInfo;