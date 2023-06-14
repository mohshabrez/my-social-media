import { FollowersCard } from "../../Components/FollowersCard/FollowersCard"
import { FriendRequest } from "../../Components/FriendRequest/FriendRequest"
import { MessageCategory } from "../../Components/MessagesCategory/MessageCategory"
import {ProfileCard} from "../../Components/ProfileCard/ProfileCard"
import "./RightNav.css"
export function RightNav(){
    return(
        <>
        <div className="right">
            <ProfileCard/>
            <FollowersCard/>

            {/* <div className="messages">
                <div className="heading">
                    <h4>Messages</h4><span class="material-symbols-outlined">edit</span>
                </div>
                <div className="search-bar">
                    <span class="material-symbols-outlined">search</span>
                    <input type="search" placeholder="Search Messages" id="message-search"/>
                </div>
                <MessageCategory/>
            </div>
            <FriendRequest/> */}
        </div>
        </>
    )
}