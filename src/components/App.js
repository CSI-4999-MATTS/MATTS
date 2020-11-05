import React, { useState } from 'react';
// import '../src/stylesheets/index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { firebaseApp } from '../firebase/config';
import Login from "../components/Login";
import LearnMore from "../components/LearnMore";
import Dashboard from "../components/Dashboard";
import Home from "../components/Home"
import { db } from '../firebase/config';


function App() {
    var [isLoggedIn, updateUserLogIn] = useState(false)
    // See if we have logged in user; control state from here
    // Current system has - if you've logged in once before - the user remembered. 
    // Should create a way to auto-logout user on system launch
    firebaseApp.auth().onAuthStateChanged(function(user) {
        // If user exists
        if (user) {
            var uid=user.uid
            var userinfo = db.collection("Users").doc(uid)
            // does not get user information if not previously existing in DB, NEED TO FIX!!!
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
                    });
                }
            })
            updateUserLogIn(isLoggedIn = true)
        } 
    });
    
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/Login" component={Login} />
                <Route path="/App" component={Home} />
                <Route path="/LearnMore" component={LearnMore} />
                <Route path="/Dashboard" render={(props) => < Dashboard {...props} user={isLoggedIn} />} />
            </Switch>
        </BrowserRouter>
        
    )  
}

// function App (){
//         constructor(props) {
//             super(props);
//             this.state = {isLoggedIn: false};

//             firebaseApp.auth().onAuthStateChanged(function(user) {
//                 // If user exists
//                 if (user) {
//                     var uid=user.uid
//                     var userinfo = db.collection("Users").doc(uid)
//                     // does not get user information if not previously existing in DB, NEED TO FIX!!!
//                     userinfo.get().then(function(doc) {
//                         if (!doc.exists) {
//                             console.log('Writing to firestore');
//                             db.collection("Users").doc(uid).set({
//                                 name: user.displayName,
//                                 email: user.email,
//                                 planningRank: 0,
//                                 designRank: 0,
//                                 implementationRank: 0,
//                                 testingDevRank: 0,
//                                 maintenanceRank: 0,
//                             });
//                         }
//                         else {
//                             // What? 
//                             console.log('What?')
//                         }   
//                     })
//                     //Set state that user is available
//                     this.setState({isLoggedIn: true})
//                 } else {
//                     console.log('No user yet!')
//                 }
//             });
//         }


//     render(){
//         return (
//             <BrowserRouter>
//                 <Switch>
//                     <Route exact path="/" component={Home} />
//                     <Route path="/Login" component={Login} />
//                     <Route path="/App" component={Home} />
//                     <Route path="/LearnMore" component={LearnMore} />
//                     <Route path="/Dashboard" render={props => (< Dashboard {...props} isLoggedIn={this.state.isLoggedIn}/>) }/>
//                 </Switch>
//             </BrowserRouter>
//         )
//     }
// }

export default App;
