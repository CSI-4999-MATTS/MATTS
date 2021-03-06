import React, { useState, useEffect, useRef } from 'react';
import '../stylesheets/App.css';
import NavBar from './NavBar';
import UserInfo from './userInfo';
import { makeStyles } from '@material-ui/core/styles';
import { db } from '../firebase/config';


function Dashboard(props) {
    const dataDash = useRef([])
    var [loading, setLoading] = useState(true)


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
    }));

    const classes = useStyles();

    useEffect(() => {
        // Listens for metadata changes - i.e. updates to documents and collections themselves, not just attributes
        db.collection('Users').doc(props.user).onSnapshot({includeMetadataChanges: true}, 
            // userInfo is the actual document with ID props.user
            function(userInfo) {
                // Pulls user info out of DB
                dataDash.current = userInfo.data()
                // Only show profile info once data is properly retrieved - solution to asynch behavior
                if (dataDash.current !== undefined){
                    setLoading(false)
                }
            })
    }, [props.user]);

    return (
        <div className={classes.app}>

            <NavBar loggedIn={props.isLoggedIn}/>

            {/* Need to change loading to a spinner */}

            {loading ?  <h1>We're watching, and we're waiting</h1> : <UserInfo user={dataDash['current']}/>}
               
            <div className={classes.footer}>
                Copyright: Allison Broski, Shelby McKay, Maurice Fuentes, Timothy Carpenter, Tanner Porteous
                <p>Oakland University</p>
            </div>
        </div>
        );
}

export default Dashboard;