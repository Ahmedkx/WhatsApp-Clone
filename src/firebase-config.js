import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB1W88bwIqlwek_Pg9cc74fuw4v_4AddEQ",
    authDomain: "whatsapp-clone-2839f.firebaseapp.com",
    projectId: "whatsapp-clone-2839f",
    storageBucket: "whatsapp-clone-2839f.appspot.com",
    messagingSenderId: "327987987454",
    appId: "1:327987987454:web:c2df12aa24489cd9ecf6af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app)