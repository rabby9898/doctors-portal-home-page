import React from 'react';
import LoginImg from '../../../images/login.png';
import './Login.css';
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../../../firebase.config';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAuth } from "firebase/auth";


const app = initializeApp(firebaseConfig);
const LogIn = () => {
    const provider = new GoogleAuthProvider();
    const googleSignInClick = () =>{

        const auth = getAuth();
            signInWithPopup(auth, provider)
            .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log(result);
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
  });
    }

    return (
        <div className="row offset-md-1">
           
            <div className="col-md-6 logIn-form">
            <h3 className="text-center">Log In</h3>
                <label for="inputEmail4">Username</label>
                <input type="username" class="form-control shadow-none Input" placeholder=""/>
                <label for="inputPassword4">Password</label>
                <input type="password" class="form-control shadow-none Input" id="inputPassword4" placeholder=""/>
                <button onClick={googleSignInClick} className="signIn-btn">Sign In</button>
            </div>
            <div className="col-md-6 loginImg">
                <img src={LoginImg} alt="" />
            </div>
            
        </div>
    );
};

export default LogIn;