import * as firebase from "firebase";
import * as admin from "firebase-admin";

const firebaseApp = {
    apiKey: process.env.REACT_APP_FRBS_API_KEY,
    authDomain: process.env.REACT_APP_FRBS_AUTH_DOM,
    databaseURL: process.env.REACT_APP_FRBS_DB_URL,
    projectId: process.env.REACT_APP_FRBS_PROJ_ID,
    storageBucket: process.env.REACT_APP_FRBS_STOR_BUCK,
    messagingSenderId: process.env.REACT_APP_FRBS_MESS_ID,
    appId: process.env.REACT_APP_FRBS_APP_ID,
    measurementId: process.env.REACT_APP_FRBS_MEAS_ID
};

var app = admin.initializeApp();

export default firebase.initializeApp(firebaseApp);

export const db = firebase.firestore()