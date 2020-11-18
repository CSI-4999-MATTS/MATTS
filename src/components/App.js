import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { firebaseApp } from '../firebase/config';
import Login from "../components/Login";
import LearnMore from "../components/LearnMore";
import Dashboard from "../components/Dashboard";
import Home from "../components/Home"
import { db } from '../firebase/config';


function App() {
    // React Hooks to manage state
    var [isLoggedIn, setUserLogIn] = useState(false)
    var [userId, setUserId] = useState('000XXX')

    firebaseApp.auth().onAuthStateChanged(function(user) {
        // If user exists
        if (user) {
            var uid=user.uid
            var userinfo = db.collection("Users").doc(uid)

            // Check to see if user exists in DB; if not, create new file for them
            userinfo.get().then(function(doc) {
                if (!doc.exists) {
                    db.collection("Users").doc(uid).set({
                        name: user.displayName,
                        email: user.email,
                        planningRank: 'Beginner',
                        designRank: 'Beginner',
                        implementationRank: 'Beginner',
                        testingDevRank: 'Beginner',
                        maintenanceRank: 'Beginner',
                        })
                    }})

                    // Update state
                    setUserLogIn(isLoggedIn = true)
                    setUserId(userId = uid)

                } else {
                    setUserLogIn(isLoggedIn = false)
                    setUserId(userId = '000XXX')
                } 
    })
    
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                {/* Don't neeed to change this, since it should only be accessable when not logged in */}
                <Route path="/Login" component={Login} /> 
                <Route path="/Home" render={(props) => < Home {...props} isLoggedIn={isLoggedIn} />} />
                
                <Route path="/LearnMore" render={(props) => < LearnMore {...props} isLoggedIn={isLoggedIn} />} />
                <Route path="/Dashboard" render={(props) => < Dashboard {...props} isLoggedIn={isLoggedIn} user={userId}  />} />
            </Switch>
        </BrowserRouter>
        
    )  
}

export default App;
