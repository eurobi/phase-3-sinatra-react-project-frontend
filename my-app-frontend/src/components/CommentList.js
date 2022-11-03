import React from "react";
import Comment from "./Comment";

function CommentList({comments}){
    const commentElements = comments.map(comment => <Comment key={comment.created_at} comment={comment}/>)
    return(
        <>
            {commentElements}
        </>
    )
}

export default CommentList