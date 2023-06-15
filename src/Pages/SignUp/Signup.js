import "./Signup.css"
import { v4 as uuidv4 } from 'uuid';
import React, { useState } from "react";
import {Link} from "react-router-dom"
import { auth, db, storage }  from "../../firebase"
import {  createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 

export function SignUp(){
    const[img, setImg] = useState(null)
    const[email , setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[error, setError] = useState(false)
    const[displayName, setDisplayName] = useState('') 
    
    
    const handleRegister= async (e) => {
        e.preventDefault()

        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;

        try{
            const res = await createUserWithEmailAndPassword(auth, email, password)
            
            const storageRef = ref(storage, "usersImages/" +  displayName);

            const uploadTask = uploadBytesResumable(storageRef,img);

            uploadTask.on(
            (error) => {
            setError(true)
             }, 
            () => {
                //  uploadTask.snapshot.ref.then(async(downloadURL) => {
                    // await updateProfile(res.user, {
                    //    displayName, 
                    //    photoURL: downloadURL,
                    // });             
             
                // await setDoc(doc(db, "users", res.user.uuidv4), {
                //     uid: res.user.uuidv4,
                //     displayName,
                //     email,
                //     photoURL: downloadURL,
                //     });

                // await setDoc(doc(db, "usersPosts", res.user.uuidv4), {messages:[]})
                    
            // });
        }
        );
        }
        catch(error){
            console.log(error.message)
            setError(true)
        }
    }

    return(
        <>
        <div className="signUp">
            <div className="singuplogo">
            </div>
            <div className="signupForm">
                <h1>Sign Up</h1>
                <div className="formLoginData">
                    <div className="image-line">
                        <img src={img ? URL.createObjectURL(img) : "/../src/Images/profile.webp"} alt="" className="profileImg"/>
                    <div className="upload-box">
                        <label htmlFor="file">
                            <span class="material-symbols-outlined">drive_folder_upload</span>
                        <input type="file" name="file" id="file" accept=".png,.jpeg,.jpg"  style={{ display: "none" }} onChange={(e) => setImg(e.target.files[0])}/>
                        </label>
                    </div>
                    </div>
                    <form onSubmit={handleRegister}>
                        <div>
                            <label>Enter Your Name*</label>
                            <input type="text" placeholder="UserName" onChange={(e) => setDisplayName(e.target.value)}/><span class="material-symbols-outlined" style={{ top:"-27px",left:"220px"}}>account_circle</span>
                        </div>
                        <div>
                            <label>Enter Your Email*</label>
                            <input type="text" placeholder="test@gmail.com"  onChange={(e) => setEmail(e.target.value)}/><span class="material-symbols-outlined" style={{ top:"-27px",left:"220px"}}>drafts</span>
                        </div>
                        <div>
                            <label>Enter Your Password*</label>
                            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/><span class="material-symbols-outlined" style={{top:"-27px", left:"220px"}}>lock_open</span>
                        </div>
                        <div>
                            <label>Confrim Password Again*</label>
                            <input type="password" placeholder="Confirm Password" /><span class="material-symbols-outlined" style={{top:"-27px", left:"220px"}}>enhanced_encryption</span>
                        </div>
                        <button style={{marginLeft:"40px"}} value="Sign Up" type="submit">Create a New Account</button>
                        <p style={{marginLeft:"30px", color:"white", marginTop:"20px"}}>Already have an Account<Link to="/login" style={{color:"rgb(13, 201, 230)"}}>  Sign In</Link></p>
                    </form>
                        {error && <span>Something went wrong</span>}
                </div>
            </div>
        </div>
        </>
    )
}