// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXWwqFj9lwhB2P5eH1Ajxoc_rMXAWD4Nc",
  authDomain: "portfolio-app-63e7d.firebaseapp.com",
  projectId: "portfolio-app-63e7d",
  storageBucket: "portfolio-app-63e7d.appspot.com",
  messagingSenderId: "1003749810520",
  appId: "1:1003749810520:web:2fe4360efd81476e96c52d",
  measurementId: "G-YN5X9WZKBR"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

class Firebase {
    constructor() {
        this.app = initializeApp(firebaseConfig);
        this.analytics = getAnalytics(this.app);
    } 

}

export default new Firebase()