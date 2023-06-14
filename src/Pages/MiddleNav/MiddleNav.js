import "./MiddleNav.css"
import { Stories } from "../../Components/Stories/Stories";
import { Feed } from "../Feed/Feed";
import { useState } from "react";

export function MiddleNav(){
    const[postData, setPostData] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(e.target)
        // setPostData(e.target.Post.value);
        // e.target.post.value = '';
    }

    return(
        <>
        <div className="middle">
            <Stories/>
            <form className="create-post" onSubmit={handleSubmit}>
                <div className="profile-photo">
                    <img src="https://th.bing.com/th/id/OIP.fpaUV35ECaGkz-YNCrBSwQHaHa?pid=ImgDet&rs=1" alt="create-pic"/>
                </div>
                <input type="text" placeholder="What's happening" id="create-post"/>
                <input type="submit"  className="btn btn-primary"/>
                <div className="postOptions">
                    <div className="option" style={{color:"var(--photo)"}}><span class="material-symbols-outlined">image</span></div>
                    <div className="option" style={{color:"var(--video)"}}><span class="material-symbols-outlined">smart_display</span></div>
                    <div className="option" style={{color:"var(--location)"}}><span class="material-symbols-outlined">location_on</span></div>
                    <div className="option" style={{color:"var(--schedule)"}}><span class="material-symbols-outlined">calendar_month</span></div>
                </div>
            </form>
            <Feed/>
        </div>
        </>
    )
}