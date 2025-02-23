import { useState } from "react";
import { initializeApp } from "firebase/app";

import {  getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";



function Login() {

    const navToHome = useNavigate();


    const[email,setEmail]=useState()
    const[pswd,setPswd]=useState()

 
  
    const changeEmail=(e)=>{
        setEmail(e.target.value)
    }

    const changepassword=(e)=>{
        setPswd(e.target.value)
    }

   
const firebaseConfig = {
  apiKey: "AIzaSyCkXsdyv2jvWJ4dVjNtMvJZUoFl3Jeuhow",
  authDomain: "shopping-2a9c7.firebaseapp.com",
  projectId: "shopping-2a9c7",
  storageBucket: "shopping-2a9c7.appspot.com",
  messagingSenderId: "566865431969",
  appId: "1:566865431969:web:d8a1edebf90f34fcd4cfe0",
  measurementId: "G-VJQLBKDBCG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth()

const RegisterData=(f)=>{
    f.preventDefault()

    let obj={
        Email:email,
        password:pswd
    }


    signInWithEmailAndPassword(auth,obj.Email,obj.password)
.then(()=>{
    alert("logred in sucessfully")
    navToHome("/home")
}).catch(()=>{
    alert("error")
})

}





 

        



    return (
        <div >
            <div className="container" style={{width:"400px", marginTop:"20px"}}>
                <div className="card">
                    <div className="card-title text-center">
                        <h1>Login Here !</h1>

                    </div>
                    <div className="card-body">
                        <form onSubmit={RegisterData} >
                           
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" value={email } onChange={changeEmail} required class="form-control" id="email" aria-describedby="emailHelp"/>
                                    
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" value={pswd} onChange={changepassword } required class="form-control" id="psw"/>
                            </div>
                          
                            
                            <button type="submit" class="btn btn-primary">Login</button>
                        </form>

                    </div>

                </div>

            </div>


        </div>
    )

}
export default Login