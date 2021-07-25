import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBGUp5gmcSkKycH0QwgquxibFc8N1Lt10U",
    authDomain: "dsawebapp-f3872.firebaseapp.com",
    projectId: "dsawebapp-f3872",
    storageBucket: "dsawebapp-f3872.appspot.com",
    messagingSenderId: "1038987705609",
    appId: "1:1038987705609:web:03de1a076d1248b200a7d8",
    measurementId: "G-10LM3BX9W3"
  };

  export const firebaseApp = firebase.initializeApp(firebaseConfig)

  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider}
  
  firebase.analytics();

  export const storage = firebase.storage()
