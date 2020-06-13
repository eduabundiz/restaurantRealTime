import app from 'firebase/app';
import firebaseconfig from './config';

class Firebase{
    constructor(){
        app.initializeApp(firebaseconfig)
    }
}

const firebase = new Firebase();

export default firebase;