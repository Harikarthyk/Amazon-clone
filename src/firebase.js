import firebase from 'firebase';
const firebaseConfig = {
	apiKey: 'AIzaSyCC3jL0kJuUbip3J5i3SR9DCKw6wahoNoI',
	authDomain: 'e-commerce-014.firebaseapp.com',
	databaseURL: 'https://e-commerce-014.firebaseio.com',
	projectId: 'e-commerce-014',
	storageBucket: 'e-commerce-014.appspot.com',
	messagingSenderId: '662256453135',
	appId: '1:662256453135:web:7495d25fb691f9541e457a',
	measurementId: 'G-L46R14KE6Q',
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
