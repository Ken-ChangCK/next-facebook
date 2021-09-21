// https://facebook-2-6eb19.firebaseapp.com/__/auth/handler

import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyDjBBiTmu4Gm3_uCD8dBlsj2ooT8yIh6yY",
	authDomain: "next-facebook-d2ec5.firebaseapp.com",
	projectId: "next-facebook-d2ec5",
	storageBucket: "next-facebook-d2ec5.appspot.com",
	messagingSenderId: "55928945409",
	appId: "1:55928945409:web:73eee2c1b432c2471c7900"
};

const app = !firebase.apps.length
	? firebase.initializeApp(firebaseConfig)
	: firebase.app();

const db = app.firestore();
const auth = app.auth();
const storage = firebase.storage();

export { auth, db, storage };
