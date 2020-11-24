import React from 'react'
import NavBar from '../NavBar';
import firebase from 'firebase';
import {db} from '../../firebase/config';

function QuizFinish(props){

    const userTotal = props.location.state[0];
    const totalTotal = props.location.state[1];
    const track = props.location.state[2];
    var user = firebase.auth().currentUser;

    function computeResults(user, total){
        let percentage = user/total;
        let newRank;
        if (percentage <= 0.3){
            newRank = 'Beginner';
        } else if (percentage > 0.3 && percentage <= 0.6) {
            newRank = 'Intermediate';
        } else if (percentage > 0.6 && percentage <= 0.8) {
            newRank = 'Advanced';
        } else {
            newRank = 'Professional';
        }
    }

    return (
    <div style={{backgroundColor: "#EEEEEE"}}>
        <NavBar loggedIn={props.isLoggedIn}/>
        
    
        <div style={{border: '2px solid #0D7377', width: '40%', marginLeft: '30%', marginRight: '30%', borderRadius: 10, backgroundColor: "#0D7377", marginTop: 200, paddingTop: 20, paddingBottom: 25}}>
            <h1 style={{color: "#EEEEEE", textAlign: 'center'}}>Results</h1>
        </div>
    
        <div style={{textAlign:'center', height: 75, opacity: .3, fontSize: 10, marginTop: 400, bottom: 0, display: 'block', width: '100%',}}>
        Copyright: Allison Broski, Shelby McKay, Maurice Fuentes, Timothy Carpenter, Tanner Porteous
        <p>Oakland University</p>
        </div>
    </div>
    )
}

export default QuizFinish;