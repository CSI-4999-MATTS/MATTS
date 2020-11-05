import React from 'react';
// import '../src/stylesheets/index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { firebaseApp } from '../firebase/config';
import Login from "../components/Login";
import LearnMore from "../components/LearnMore";
import Dashboard from "../components/Dashboard";
import Home from "../components/Home"
import { db } from '../firebase/config';


//test comment
function App() {

    // See if we have logged in user; control state from here
    // Current system has - if you've logged in once before - the user remembered. 
    // Should create a way to auto-logout user on system launch
    firebaseApp.auth().onAuthStateChanged(function(user) {
        if (user) {
            
            var uid=user.uid
            
            var userinfo = db.collection("Users").doc(uid)
            
            userinfo.get().then(function(doc) {
                if (doc.exists) {
                    doc.data();
                    
                } else {
                    
                    db.collection("Users").doc(uid).set({
                        name: user.displayName,
                        email: user.email,
                        planningRank: 0,
                        designRank: 0,
                        implementationRank: 0,
                        testingDevRank: 0,
                        maintenanceRank: 0,
                    });
                    
                }
              console.log(doc.data());  
                
            }
                               
                               
                               )
        } else {
            console.log('noooooo')
        }
    });
    
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/Login" component={Login} />
                <Route path="/App" component={Home} />
                <Route path="/LearnMore" component={LearnMore} />
                <Route path="/Dashboard" component={Dashboard} />
            </Switch>
        </BrowserRouter>
    )  
}

export default App;
