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
    var [isLoggedIn, updateUserLogIn] = useState(false)
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
                        planningRank: 0,
                        designRank: 0,
                        implementationRank: 0,
                        testingDevRank: 0,
                        maintenanceRank: 0,
                        })
                    }})

                    // Update state
                    updateUserLogIn(isLoggedIn = true)
                    setUserId(userId = uid)
                } else {
                    console.log('No user exists')
                } 
    })
    
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/Login" component={Login} />
                <Route path="/Home" component={Home} />
                <Route path="/LearnMore" component={LearnMore} />
                <Route path="/Dashboard" render={(props) => < Dashboard {...props} loggedIn={isLoggedIn} user={userId}  />} />
            </Switch>
        </BrowserRouter>
        
    )  
}

export default App;
