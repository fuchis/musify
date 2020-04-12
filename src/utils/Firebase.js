import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyAcaNRVe3uHU8_Ks2L40xgy64RIRSM07F8",
    authDomain: "musicfy-12f6a.firebaseapp.com",
    databaseURL: "https://musicfy-12f6a.firebaseio.com",
    projectId: "musicfy-12f6a",
    storageBucket: "musicfy-12f6a.appspot.com",
    messagingSenderId: "44106959031",
 	appId: "1:44106959031:web:8b47067c636053b149e532"
};

export default firebase.initializeApp(firebaseConfig);