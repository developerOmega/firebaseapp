import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAibxRdf8UWfZ9ZrGWWid5Um7M3kHwxNxg",
  authDomain: "firefaceapp-367fd.firebaseapp.com",
  databaseURL: "https://firefaceapp-367fd-default-rtdb.firebaseio.com",
  projectId: "firefaceapp-367fd",
  storageBucket: "firefaceapp-367fd.appspot.com",
  messagingSenderId: "945323734830",
  appId: "1:945323734830:web:a3e12cf35658577febecbf",
  measurementId: "G-QNZ7VFQ07Y"
};

firebase.initializeApp(config)

const database = firebase.database();
export { database };