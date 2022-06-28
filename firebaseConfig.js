import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: import.meta.env.VITE_APP_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_SBUCKET,
    messagingSenderId: import.meta.env.VITE_MSENDERId,
    appId: import.meta.env.VITE_APPId,
    measurementId: import.meta.env.VITE_MId
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.fieldValue.serverTimestamp;

export { timestamp }
export default firebaseApp.firestore();