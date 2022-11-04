import React from "react";
import Comment from "./Comment";

function CommentList({comments}){
    const commentElements = comments.map(comment => <Comment key={comment.created_at} comment={comment}/>)
    return(
        <>
            {commentElements.length > 0? <h4>Comments:</h4> : null}
            {commentElements}
        </>
    )
}

export default CommentList