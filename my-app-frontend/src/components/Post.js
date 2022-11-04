import React from "react";
import CommentList from "./CommentList";

function Post({post, user}){
    return(
        <>
            <h3>{post.user.user_name}</h3>
            <h3>{post.created_at}</h3>
            <p>{post.content}</p>
            {user !== null && user.user_name === post.user.user_name? <button>Delete Post</button> : null}
            <CommentList comments={post.comments}/> 
            <label for='comment-field'></label>
            <input id='comment-field'></input>
        </>
    )
}


export default Post