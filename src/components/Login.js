import React from 'react';
import '../stylesheets/App.css';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from './NavBar';

function Login() {

    // Don't need this atm
// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//     textAlign: 'left',   
//   },
//   toolbar:{
//       backgroundColor: 'grey',
//   },
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

//const classes = useStyles();

    return (
    <div className="Login">
        <NavBar />
        
        Login Page
       
    </div>
    
    );

}

export default Login;
