import "./LoginPage.css"
import { Link } from "react-router-dom"
import { useLocation, useNavigate } from "react-router-dom";
import { UseAuth } from "../../Context/AuthContext";



export function LoginPage(){
  const {setCredentials, email, setMail, setPassword, password, isAuth, setAuth,data, username, setUsername} = UseAuth()
  const navigate = useNavigate();
  const location = useLocation();
  const handleClick = (e) => {
    setCredentials(e);
    if (isAuth) navigate(location?.state?.from?.pathname)
  };
  
    return(
        <>
        <div className="loginPage">
            <div className="logoset">

            </div>
            {isAuth ? navigate("/HomePage") : (
            <div className="loginCard">
                <h1 style={{color:"rgb(13, 201, 230)"}}>User Login</h1>
                <div className="formLoginData">
                <form>
                    <div>
                        <label> Enter Your Email Address *</label>
                       <input style={{width:"250px"}} type="text" placeholder="adarshbalika@gmail.com" name="Email" value={email} onChange={(e) => setMail(e.target.value)}/> <span class="material-symbols-outlined" style={{ top:"-27px",left:"220px"}}>account_circle</span>
                    </div>
                    <div>
                        <label> Enter Your Password *</label>
                        <input type="password" className="pwd" placeholder="********" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/><span class="material-symbols-outlined" style={{top:"-27px", left:"220px"}}>lock_open</span>
                    </div>
                    <button type="submit" value="Sign In" className="btn primary" onClick={handleClick}>Sign In</button>
                    <button type="submit" value="Test User" className="btn primary" onClick={handleClick}>Login With Test Credentials</button>
                    
                    <p style={{marginLeft:"10px", color:"aliceblue", padding:"15px"}}>Don't have an Account?<Link to="/SignUp" style={{color:"rgb(13, 201, 230)"}}>  Sign Up</Link></p>
                </form>
                </div>
            </div>
            )}
        </div>
        </>
    )
}