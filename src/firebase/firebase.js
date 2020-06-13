import app from 'firebase/app';
import 'firebase/firestore';
import firebaseconfig from './config';

class Firebase{
    constructor(){
        if(!app.apps.length){
        app.initializeApp(firebaseconfig)
        }
        this.db = app.firestore()
    }
}

const firebase = new Firebase();

export default firebase;