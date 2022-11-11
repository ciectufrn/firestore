import { initializeApp } from './node_modules/firebase/app';
import { getFirestore, collection, getDocs, addDoc  } from './node_modules/firebase/firestore/lite';

const config = {
    apiKey: "AIzaSyAcXl6cyMmDTwgSdw7vYQjLWun5LeDlAQs",
    authDomain: "ect2525-2022-2.firebaseapp.com",
    projectId: "ect2525-2022-2",
    storageBucket: "ect2525-2022-2.appspot.com",
    messagingSenderId: "1014694093736",
    appId: "1:1014694093736:web:6d2d58af2e1f285542b39d",
    measurementId: "G-VM0CYEWJWX"
};

const app = initializeApp(config);
const db = getFirestore(app);

export { db, collection, getDocs, addDoc }