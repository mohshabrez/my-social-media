import "./RootLayout.css"
import React  from "react"
import {Outlet} from "react-router-dom"
import { UseAuth } from "../../Context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";

export function RootLayout(){
  const {setCredentials, email, setMail, setPassword, password, isAuth, setAuth,data} = UseAuth()
  const navigate = useNavigate();
  const logoutClick = () => {
    localStorage.removeItem("token");
    setAuth(false);
    navigate("/login")
  }
    return(
        <>
         <div className="root-layout">
         <header>
        <nav className="nav">
          <div className="container">
            <h2 className="log">SocialMedia</h2>
            <div className="search-bar">
            <span class="material-symbols-outlined">search</span>
                <input type="search" placeholder="search for"/>
            </div>
            <div className="create">
                <label className="btn btn-primary" for="create-post">Create</label>
                <div className="profile-photo">
                    <img src="https://th.bing.com/th/id/OIP.fpaUV35ECaGkz-YNCrBSwQHaHa?pid=ImgDet&rs=1" alt=""/>
                </div>
                <span class="material-symbols-outlined" onClick={logoutClick}>logout</span>
            </div>

          </div>
        </nav>
      </header>
      <main>
        <Outlet/>
      </main>
    </div>
        </>
    )
}