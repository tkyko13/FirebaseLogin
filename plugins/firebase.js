import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDZVz4zwi51mAnuzInediifMiO6RgFcIFM",
  authDomain: "ono-protoout.firebaseapp.com",
  databaseURL: "https://ono-protoout.firebaseio.com",
  projectId: "ono-protoout",
  storageBucket: "ono-protoout.appspot.com",
  messagingSenderId: "456363628512",
  appId: "1:456363628512:web:ed0ba8f60d434dca0bbd85"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export default firebase;
