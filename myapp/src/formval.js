import { useState } from "react";
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";


function Register() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pswd, setPswd] = useState("");
    const [cpswd, setCpswd] = useState("");

    const changeName = (e) => setName(e.target.value);
    const changeEmail = (e) => setEmail(e.target.value);
    const changepassword = (e) => setPswd(e.target.value);
    const changeCpassword = (e) => setCpswd(e.target.value);

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

    const RegisterData = (f) => {
        f.preventDefault();

        if (pswd !== cpswd) {
            alert("Passwords do not match!");
            return;
        }

        createUserWithEmailAndPassword(auth, email, pswd)
            .then(() => {
                alert("Registered successfully");
                navigate("/login");
            })
            .catch((error) => {
                alert("Error: " + error.message);
            });
    };

    return (
        <div>
            <div className="container" style={{ width: "400px", marginTop: "20px" }}>
                <div className="card">
                    <div className="card-title text-center">
                        <h1>Register Here!</h1>
                    </div>
                    <div className="card-body">
                        <form onSubmit={RegisterData}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" value={name} onChange={changeName} required className="form-control" id="name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" value={email} onChange={changeEmail} required className="form-control" id="email" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="psw" className="form-label">Password</label>
                                <input type="password" value={pswd} onChange={changepassword} required className="form-control" id="psw" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="cpsw" className="form-label">Confirm Password</label>
                                <input type="password" value={cpswd} onChange={changeCpassword} required className="form-control" id="cpsw" />
                            </div>
                            
                            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
                                <button type="submit" className="btn btn-primary">Register</button>
                                <button type="button" className="btn btn-danger" onClick={() => navigate("/login")}>Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
