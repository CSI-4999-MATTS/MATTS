import React from 'react';
import '../stylesheets/App.css';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from "./NavBar";
import db from '../firebase/config'

function LearnMore() {

    // Don't need this atm
// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1,
//     },
//     paper: {
//         backgroundColor:'grey',
//         display: 'flex',
//         margin: 50,
//         width: 'native',
//         height: 300,
//         color:'white',
        
//     },
//     footer:{
//         textAlign:'center',
//         height: 75,
//         opacity: .3,
//         fontSize: 10,
//         position: 'absolute',
//         bottom: 0,
//         display: 'block',
//         width: '100%',
//     },
  
// }));

// const classes = useStyles();

db.collection("users").add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});

    return (
    <div className="Login">
        <NavBar />
        
       Learn More Page
        
    </div>
    
    );

}

export default LearnMore;
