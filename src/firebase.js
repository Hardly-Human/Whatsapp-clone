// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAiVTVf8SmyZXu-SBPVmgP4l0Wmzkl-leI",
	authDomain: "whatsapp-clone-53245.firebaseapp.com",
	projectId: "whatsapp-clone-53245",
	storageBucket: "whatsapp-clone-53245.appspot.com",
	messagingSenderId: "542042672013",
	appId: "1:542042672013:web:d9e5fc82ce2d375523cbc4",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage().ref("images");
const audioStorage = firebase.storage().ref("audios");
const createTimestamp = firebase.firestore.FieldValue.serverTimestamp;
const serverTimestamp = firebase.database.ServerValue.TIMESTAMP;

export {
	db,
	auth,
	provider,
	storage,
	audioStorage,
	createTimestamp,
	serverTimestamp,
};
