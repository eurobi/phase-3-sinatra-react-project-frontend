import React from "react";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

function Post({setPosts, post, posts, user}){
    function handleDelete(e){
        fetch(`http://localhost:9292/posts/${post.id}`,{
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(r => r.json())
        .then(resppost => setPosts([...posts].filter((post) => post.id !== resppost.id)))
    }
    return(
        <>
            <h3>{post.user.user_name}</h3>
            <h3>{post.created_at}</h3>
            <p>{post.content}</p>
            {user !== null && user.user_name === post.user.user_name? <button onClick={handleDelete}>Delete Post</button> : null}
            {user !== null && user.user_name === post.user.user_name? <button>Edit Post</button> : null}
            <CommentList comments={post.comments}/> 
            {user !== null? <CommentForm></CommentForm> : null}
        </>
    )
}


export default Post