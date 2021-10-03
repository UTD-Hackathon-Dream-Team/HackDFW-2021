import firebase from 'firebase/app';
import 'firebase/auth';


const firebaseConfig = {

    };

    let Firebase;

    if (firebase.apps.length === 0) {
    Firebase = firebase.initializeApp(firebaseConfig);
    }
    

export default Firebase; 