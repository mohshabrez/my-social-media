import "./HomePage.css"
import { SideNav } from "../SideNav/SideNav";
import { MiddleNav } from "../MiddleNav/MiddleNav";
import { RightNav } from "../RightNav/RightNav";

export function HomePage(){
    return(
        <div className="main">
        <div className="container">
            <div className="left">
                <a className="profile">
                    <div className="profile-photo">
                        <img src="https://th.bing.com/th/id/OIP.fpaUV35ECaGkz-YNCrBSwQHaHa?pid=ImgDet&rs=1" alt="profileImg" />
                    </div>
                    <div className="handle">
                        <h4>Profile Name</h4>
                        <p className="text-muted">
                            @profile
                        </p>
                    </div>
                </a>
                <div className="sidebar">
                    <SideNav/>
                </div>
            </div>
            <div className="middle">
               <MiddleNav/>
            </div>
            <div className="right">
                <RightNav/>
            </div>

        </div>
        </div>
    )
}