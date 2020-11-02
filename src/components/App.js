import React from 'react';
// import '../src/stylesheets/index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { firebaseApp } from '../firebase/config';
import Login from "../components/Login";
import LearnMore from "../components/LearnMore";
import Dashboard from "../components/Dashboard";
import Home from "../components/Home"


//test comment
function App() {

    // See if we have logged in user; control state from here
    // Current system has - if you've logged in once before - the user remembered. 
    // Should create a way to auto-logout user on system launch
    firebaseApp.auth().onAuthStateChanged(function(user) {
        if (user) {
            console.log(user.email)
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
