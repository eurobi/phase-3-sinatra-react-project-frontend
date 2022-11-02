import React from "react";
import CommentList from "./CommentList";

function Post(){
    return(
        <>
            <h3>UserName</h3>
            <h3>timestamp</h3>
            <p>Content</p>
            <CommentList/>
        </>
    )
}


export default Post