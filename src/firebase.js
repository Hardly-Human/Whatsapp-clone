import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/database";

const firebaseConfig = {
	apiKey: "AIzaSyC09rBy9aYiJsBt67zG_JCcEpMAMEgOGEw",
	authDomain: "whatsapp-clone-e7410.firebaseapp.com",
	projectId: "whatsapp-clone-e7410",
	storageBucket: "whatsapp-clone-e7410.appspot.com",
	messagingSenderId: "491015387626",
	appId: "1:491015387626:web:56b9f443506e11c98d1a93",
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
