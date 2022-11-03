import React from "react";
import Post from "./Post";

function PostList({ posts }){
    const postElements = posts.map((post => <Post post={post} />))
    return(
        <div>
            {postElements}
        </div>
    )
}


export default PostList
