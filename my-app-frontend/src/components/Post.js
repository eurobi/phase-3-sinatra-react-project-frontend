import React from "react";
import CommentList from "./CommentList";

function Post({post}){
    return(
        <>
            <h3>{post.user.user_name}</h3>
            <h3>{post.created_at}</h3>
            <p>{post.content}</p>
            <CommentList/>
        </>
    )
}


export default Post