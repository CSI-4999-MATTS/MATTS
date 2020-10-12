import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from "./Login";
import LearnMore from "./LearnMore";
import SignUp from "./SignUp";

ReactDOM.render((
  <BrowserRouter>
    <Switch>
        <Route exact path="/" component={App} />
        <Route path="/Login" component={Login} />
        <Route path="/App" component={App} />
        <Route path="/LearnMore" component={LearnMore} />
        <Route path="/SignUp" component={SignUp} />
    </Switch>
  </BrowserRouter>
  ), document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
