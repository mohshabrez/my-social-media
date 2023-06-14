import "./Signup.css"
import React from "react";
import {Link} from "react-router-dom"
import { UseAuth } from "../../Context/AuthContext"
import { auth }  from "../../firebase"
import {  createUserWithEmailAndPassword, getAuth } from "firebase/auth";


export function SignUp(){
    
    const handleRegister= (e) => {
        e.preventDefault()

        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const auth = getAuth()
        console.log(auth)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
    // Signed in 
        const user = userCredential.user;
       
    // ...
  })
  .catch((error) => {
    console.log(error.message)
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });


    }

    return(
        <>
        <div className="signUp">
            <div className="singuplogo">
            </div>
            <div className="signupForm">
                <h1>Sign Up</h1>
                <div className="formLoginData">
                    <form onSubmit={handleRegister}>
                        <div>
                            <label>Enter Your Name*</label>
                            <input type="text" placeholder="UserName"/><span class="material-symbols-outlined" style={{ top:"-27px",left:"220px"}}>account_circle</span>
                        </div>
                        <div>
                            <label>Enter Your Email*</label>
                            <input type="text" placeholder="test@gmail.com" /><span class="material-symbols-outlined" style={{ top:"-27px",left:"220px"}}>drafts</span>
                        </div>
                        <div>
                            <label>Enter Your Password*</label>
                            <input type="password" placeholder="Password"/><span class="material-symbols-outlined" style={{top:"-27px", left:"220px"}}>lock_open</span>
                        </div>
                        <div>
                            <label>Confrim Password Again*</label>
                            <input type="password" placeholder="Confirm Password" /><span class="material-symbols-outlined" style={{top:"-27px", left:"220px"}}>enhanced_encryption</span>
                        </div>
                        <button style={{marginLeft:"40px"}} value="Sign Up" type="submit">Create a New Account</button>
                        <p style={{marginLeft:"30px", color:"white", marginTop:"20px"}}>Already have an Account<Link to="/login" style={{color:"rgb(13, 201, 230)"}}>  Sign In</Link></p>
                    </form>

                </div>
            </div>
        </div>
        </>
    )
}