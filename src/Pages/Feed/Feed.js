import { UseMedia } from "../../Context/MediaContext"
import "./Feed.css"
export function Feed(){
    const {state} = UseMedia()
    return(
        <>
        <div className="feeds">
        {state.PostsData.map((post) => {
            const tagList = post.tags.map((tag) =>{return (<>{tag}</>)})
            return(
                <div className="feed">
                <div className="head">
                    <div className="user">
                        <div className="profile-photo">
                            <img  src={post?.profile} alt="feed-img"/>
                        </div>
                        <div className="ingo">
                            <h3>{post?.username}</h3>
                            <small>Dubai, 15 minutes Ago</small>
                        </div>
                    </div>
                    <a className="edit"><span class="material-symbols-outlined">more_horiz</span></a>
                </div>
                <div className="photo">
                    <img src={post?.feed} alt="feedImg"/>
                </div>
                <div className="action-button">
                    <div className="interaction-buttons">
                        <a><span class="material-symbols-outlined">favorite</span></a>
                        <a><span class="material-symbols-outlined">add_comment</span></a>
                        <a><span class="material-symbols-outlined">share</span></a>
                    </div>
                    <div className="bookmark">
                        <a><span class="material-symbols-outlined">bookmark</span></a>
                    </div>    
                </div>
                <div className="liked-by">
                    <span><img src="https://th.bing.com/th/id/OIP.fpaUV35ECaGkz-YNCrBSwQHaHa?pid=ImgDet&rs=1"/></span>
                    <span><img src="https://th.bing.com/th/id/OIP.fpaUV35ECaGkz-YNCrBSwQHaHa?pid=ImgDet&rs=1"/></span>
                    <span><img src="https://th.bing.com/th/id/OIP.fpaUV35ECaGkz-YNCrBSwQHaHa?pid=ImgDet&rs=1"/></span>
                    <p>Liked by <b>Profile1</b>and <b>121 others</b></p>
                </div>
                <div className="caption">
                    <p><b>{post?.username}<br></br></b>{post?.content}<span className="harsh-tag">{tagList}</span></p>
                </div>
                <div className=" comments text-muted">View all 277 comments</div>
            </div>



            )
        })}
        </div>
        </>
    )
}