import React, { useState } from 'react'
import './Login.css';
import {Link, useHistory} from "react-router-dom";
import { auth } from './firebase';
function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = e=>{
        e.preventDefault();
        //firebase authentication login
        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth)=>{
                if(auth){
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }
    const register = e=>{
        e.preventDefault();
        //firebase authentication register
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth)=>{
                //successfully created a new user with email and pass
                console.log(auth);
                if(auth){
                    history.push('/')
                }
            })
            //error alert if registration did not work 
            .catch(error => alert(error.message))
    }
    return (
        <div className = "login">
            <Link to = "/">
            <img 
            className = "login__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" 
            alt="" />
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value = {email} onChange = {e=>setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type="password" value = {password} onChange = {e=>setPassword(e.target.value)} />
                    <button type = "submit" onClick = {signIn} className="login__sigInButton">Continue</button>
                </form>
                <p>
                    By Signing-in you agree to "Amazon's Conditions"
                    of Use & Sale. Please see our Privacy Notice, our
                    Cookies Notice and our Interest-Based Ads Notice.
                </p>
            </div>
                <div className="a-divider">
                    <span>New to Amazon?</span>
                </div>
                <button  onClick = {register} className="login__registerButton">
                    Create your Amazon Account
                </button>
        </div>
    )
}

export default Login
