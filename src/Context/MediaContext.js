import React, { useReducer, useState } from "react";
import { createContext, useContext, useEffect} from "react";
import { MediaReducer } from "../Reducer/MediaReducer";
import { ACTIONS } from "../Reducer/MediaReducer";


const MediaContext = createContext(null)
const dispatchContext = createContext(null)


export const getPosts = async () => {
    const res = await fetch("/api/posts")
    const data = await res.json()
    return data.posts
}

export function MediaProvider({children}){
    const[posts, setPosts] = useState([])

    useEffect(() => {
        (async () => {
            try{
                let details = await getPosts()
                if(details){
                    dispatch({
                        type:ACTIONS.INITIALPOSTS,
                        payload: details
                    })
                }
                setPosts(details)
            }
            catch(e){
                console.log(e)
            }
        })()},[])
    
    const initialState={
        PostsData:[]
    }
    const[state, dispatch] = useReducer(MediaReducer, initialState)
    return(
        <MediaContext.Provider value={{posts, state}}>
            <dispatchContext.Provider value={dispatch}>
                {children}
            </dispatchContext.Provider>
        </MediaContext.Provider>
    )
}

export const UseMedia = () => useContext(MediaContext);
export const UseDispatch = () => useContext(dispatchContext)