import React from 'react';
// import '../src/stylesheets/index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from "../components/Login";
import LearnMore from "../components/LearnMore";
import Dashboard from "../components/Dashboard";
import Home from "../components/Home"


//test comment
function App() {
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
