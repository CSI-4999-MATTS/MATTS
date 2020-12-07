import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import NavBar from '../NavBar';
import firebase from 'firebase';
import {db} from '../../firebase/config';
import DashboardButton from '../DashboardButton';

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
            <a class="resp-sharing-button__link" href="https://twitter.com/intent/tweet/?text=My%20rank%20changed%20on%20Delve!%20Learn%20Web%20Development%20here%3A&amp;url=https%3A%2F%2Fcsi4999-5d3dd.firebaseapp.com%2F" target="_blank" rel="noopener" aria-label="Share on Twitter">
                <div class="resp-sharing-button resp-sharing-button--twitter resp-sharing-button--large"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"/></svg>
                </div>Share on Twitter</div>
            </a>
        </div>

        <div style={{textAlign:'center', height: 75, opacity: .3, fontSize: 10, marginTop: 400, bottom: 0, display: 'block', width: '100%',}}>
        Copyright: Allison Broski, Shelby McKay, Maurice Fuentes, Timothy Carpenter, Tanner Porteous
        <p>Oakland University</p>
        </div>
    </div>
    )
}

export default QuizFinish;
