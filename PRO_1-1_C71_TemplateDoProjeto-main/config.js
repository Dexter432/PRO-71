import firebase from "firebase";
require("@firebase/firestore");


  const firebaseConfig = {
    apiKey: "AIzaSyBa0_sfMiC7Gk0EDlEIRIP1OHcmI7HEUTE",
    authDomain: "ciclista-eletronico-estagio-4.firebaseapp.com",
    projectId: "ciclista-eletronico-estagio-4",
    storageBucket: "ciclista-eletronico-estagio-4.appspot.com",
    messagingSenderId: "350186670185",
    appId: "1:350186670185:web:bca2f6b494a337d12a3af8"
  
  
  
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
