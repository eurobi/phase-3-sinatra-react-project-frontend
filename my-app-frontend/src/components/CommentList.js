import React from "react";
import Comment from "./Comment";

function CommentList({posts, setPosts, user, comments}){
    const commentElements = comments.map(comment => <Comment posts={posts} setPosts={setPosts} user={user} key={comment.created_at} comment={comment}/>)
    return(
        <>
            {commentElements.length > 0? <h4>Comments:</h4> : null}
            {commentElements}
        </>
    )
}

export default CommentList