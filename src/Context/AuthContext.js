import { createContext, useContext, useEffect, useState } from "react";



export const AuthContext = createContext();


export function AuthProvider({children}){
    const [username, setUsername] = useState("")
    const [email, setMail] = useState("")
    const [ password, setPassword] = useState("")
    const [isAuth, setAuth] = useState(false)
    const [data, setData] = useState([])

    useEffect(()=> {
        localStorage.getItem("token") ? setAuth(true) : setAuth(false);
    },[isAuth])
    
   

    const setCredentials = async (e) => {
        e.preventDefault()

        let validateData = {
            username: "",
            password: "",
            name:""
        }

        if (e.target.value === "Test User") {
            validateData = {
                ...validateData,
                username: "adarshbalika",
                password: "adarshBalika123",
                name:"Adarsh Balika"
            }
            setData(validateData)
            setUsername("");
            setPassword("");
            
        }
        if (e.target.value === "Sign In") {
            validateData = {
                ...validateData,
                username: username,
                password: password,    
            }
            setData(validateData)
            setUsername("");
            setPassword("");
            
        }

        try {
            const res = await fetch("/api/auth/login", {method: 'POST', body: JSON.stringify(validateData)});
            const data = await res.json()
            localStorage.setItem("token", data.encodedToken);
            setAuth(localStorage.getItem("token") ? true : false);
        }

        catch (err) {
            const errorType = "Auth"
            console.error(errorType, err)
            
        }
    }
    const registerUser = async (e) => {
        try {
            e.preventDefault();
            await fetch("/api/auth/signup", {method: 'POST', body: JSON.stringify({username, password})});
            setPassword("");
            setUsername("");
        }
        catch (err) {
            const errorType = "signUp";
            console.error(errorType, err)
        }
    }


    return(
        <AuthContext.Provider value={{ registerUser, setCredentials, email, setMail, username, password, setUsername, setPassword, isAuth, setAuth,data}}>
            {children}
        </AuthContext.Provider>
    )
}


export const UseAuth = () => useContext(AuthContext)