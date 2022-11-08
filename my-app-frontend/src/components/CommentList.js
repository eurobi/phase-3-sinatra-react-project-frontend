import React from "react";
import Comment from "./Comment";

function CommentList({posts, setPosts, user, comments}){
    const commentElements = comments.map(comment => <Comment posts={posts} setPosts={setPosts} user={user} key={comment.created_at} comment={comment}/>)
    return(
        <div className="comment-container">
            {commentElements.length > 0? <p>Comments:</p> : null}
            {commentElements}
        </div>
    )
}

export default CommentList