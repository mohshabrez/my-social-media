import { UseMedia } from "../../Context/MediaContext"
import "./Stories.css"
export function Stories(){
    const {state} = UseMedia()


    return(
        <div className="stories">
            {state.PostsData.map((post) => {
                const styles = {
                    backgroundImage: `url(${post?.story})`,
                  };
                return(
                    <>
                    <div className="story" style={styles}>
                        <div className="profile-photo">
                            <img src={post?.profile} alt="profilePic"/>
                        </div>
                        <p className="name">
                            {post?.username}
                        </p>
                    </div>
                    </>
                )
            })}
            {/* <div className="story">
                <div className="profile-photo">
                    <img src="https://th.bing.com/th/id/OIP.fpaUV35ECaGkz-YNCrBSwQHaHa?pid=ImgDet&rs=1" alt="stories-profile"/>
                </div>
                <p className="name">
                    Your Story
                </p>
            </div>
            <div className="story">
                <div className="profile-photo">
                    <img src="https://th.bing.com/th/id/OIP.fpaUV35ECaGkz-YNCrBSwQHaHa?pid=ImgDet&rs=1" alt="stories-profile"/>
                </div>
                <p className="name">
                    Your Story
                </p>
            </div>
            <div className="story">
                <div className="profile-photo">
                    <img src="https://th.bing.com/th/id/OIP.fpaUV35ECaGkz-YNCrBSwQHaHa?pid=ImgDet&rs=1" alt="stories-profile"/>
                </div>
                <p className="name">
                    Your Story
                </p>
            </div>
            <div className="story">
                <div className="profile-photo">
                    <img src="https://th.bing.com/th/id/OIP.fpaUV35ECaGkz-YNCrBSwQHaHa?pid=ImgDet&rs=1" alt="stories-profile"/>
                </div>
                <p className="name">
                    Your Story
                </p>
            </div>
            <div className="story">
                <div className="profile-photo">
                    <img src="https://th.bing.com/th/id/OIP.fpaUV35ECaGkz-YNCrBSwQHaHa?pid=ImgDet&rs=1" alt="stories-profile"/>
                </div>
                <p className="name">
                    Your Story
                </p>
            </div>
            <div className="story">
                <div className="profile-photo">
                    <img src="https://th.bing.com/th/id/OIP.fpaUV35ECaGkz-YNCrBSwQHaHa?pid=ImgDet&rs=1" alt="stories-profile"/>
                </div>
                <p className="name">
                     Your Story
                 </p>
            </div> */}
        </div>
    )
}