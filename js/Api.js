import firebase from 'firebase/app';
import 'firebase/firebase-auth';
import 'firebase/firebase-firestore';

import firebaseConfig from '../../../projetomercado/projetomercado/firebaseConfig';

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default {

    googleLogar: async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        let result = await firebase.auth().signInWithPopup(provider);
        return result;
    }
}