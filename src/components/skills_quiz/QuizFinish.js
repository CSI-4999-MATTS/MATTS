import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import NavBar from '../NavBar';
import firebase from 'firebase';
import {db} from '../../firebase/config';

function QuizFinish(props){

    const userTotal = props.location.state[0].current;
    const totalTotal = props.location.state[1].current;
    const track = props.location.state[2];
    const [newRank, setRank] = useState('');
    const [sent, setSent] = useState(false);
    var user = firebase.auth().currentUser;

    useEffect(() => {
        let newRank = computeResults(userTotal, totalTotal)
        let rankTrack = computeRankTrack(track)

        setRank(newRank)

        if (user){
            sendToStore(user.uid, newRank, rankTrack)
        }
        
    }, [userTotal, totalTotal, track, user])

    function computeResults(user, total){
        let percentage = user/ total;
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
        return newRank;
    }

    function computeRankTrack(track){
        let rankTrack;
        console.log('rank track: ', track);
        switch (track) {
            case 'Planning':
                rankTrack = 'planningRank';
                break;
            case 'Design':
                rankTrack = 'designRank';
                break;
            case 'Implementation':
                rankTrack = 'implementationRank';
                break;
            case 'Testing & Deployment':
                rankTrack = 'testingDevRank';
                break;
            case 'Maintenance':
                rankTrack = 'maintenanceRank';
                break; 
            default:
                rankTrack = 'testingDevRank'
        }
        console.log('Rank track: ', rankTrack)
        return rankTrack;
    }

    function sendToStore(user, newRank, rankTrack){
        var userDoc = db.collection('Users').doc(user);
        return userDoc.update({
            [rankTrack]: newRank
        }).then(function() {
            setSent(true);
        }).catch(function(e) {
            console.log('error', e)
        })
    }

    return (
    <div style={{backgroundColor: "#EEEEEE"}}>
        <NavBar loggedIn={props.isLoggedIn}/>
        
    
        <div style={{border: '2px solid #0D7377', width: '40%', marginLeft: '32%', borderRadius: 10, backgroundColor: "#0D7377", marginTop: 200, paddingTop: 20, paddingBottom: 25}}>
            <h1 style={{color: "#EEEEEE", textAlign: 'center'}}>Results</h1>
            <h2 style={{textAlign: 'center', color: "#32E0C4"}}>Your new skill rank: {newRank}!</h2>
            {sent ? <button style={{backgroundColor: "#32E0C4", borderRadius: 10, padding: 10, paddingTop: 8, paddingBottom: 8, marginLeft: '35%', borderColor: "#32E0C4"}}>
                    <Link to="/Dashboard" style={{textDecoration: 'none', color: "#0D7377"}}>Go to Dashboard</Link>
                </button> : <br/>}   
                
        </div>
    
        <div style={{textAlign:'center', height: 75, opacity: .3, fontSize: 10, marginTop: 400, bottom: 0, display: 'block', width: '100%',}}>
        Copyright: Allison Broski, Shelby McKay, Maurice Fuentes, Timothy Carpenter, Tanner Porteous
        <p>Oakland University</p>
        </div>
    </div>
    )
}

export default QuizFinish;