import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDJUBSMgwtEZQfWxk-1by39DbSRpHk5LYI",
    authDomain: "wearly-sign.firebaseapp.com",
    projectId: "wearly-sign",
    storageBucket: "wearly-sign.firebasestorage.app",
    messagingSenderId: "903115347132",
    appId: "1:903115347132:web:09ac959d27851e1433acb9",
    measurementId: "G-490WXWXWZL"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
export default app;
