import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";




const firebaseConfig = {
    apiKey: "AIzaSyCkXsdyv2jvWJ4dVjNtMvJZUoFl3Jeuhow",
    authDomain: "shopping-2a9c7.firebaseapp.com",
    projectId: "shopping-2a9c7",
    storageBucket: "shopping-2a9c7.appspot.com",
    messagingSenderId: "566865431969",
    appId: "1:566865431969:web:d8a1edebf90f34fcd4cfe0",
    measurementId: "G-VJQLBKDBCG"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();


function User(){
    const[username,setUsername]=useState()

    useEffect(()=>{
        let x=onAuthStateChanged(auth,u=>setUsername(u))
        return x
    })
    return username

}
export default User;