import React, { useState } from "react";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import {useNavigate} from 'react-router-dom'


function Post({setPosts, post, posts, user}){
    const [editing, setEditing] = useState(false)
    const [postContent, setPostContent] = useState(post.content)
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

    function handleEdit(e){
        setEditing(true)
    }
    function handleEditSubmit(e){
        fetch(`http://localhost:9292/posts/${post.id}`,{
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                content: postContent
            })
        })
        .then(r => r.json())
        .then(updatedPost => {
            const newPosts = [...posts].filter((post) => post.id !== updatedPost.id)
            const sortedPosts = [updatedPost, ...newPosts].sort((a,b) => b.id - a.id)
            setPosts(sortedPosts)
            setEditing(false)
        })
    }
    return(
        <div className="post">
            <div className="post-user-info">
                <h3 className="post-username">{post.user.user_name}</h3>
                <h4 className="post-time">{post.created_at}</h4>
            </div>
            <div className="post-content">
                {editing? <input onChange={(e) => setPostContent(e.target.value)} value={postContent}></input> :<p>{post.content}</p>}
            </div>
            <div className="post-button-container">
                {user !== null && user.user_name === post.user.user_name && editing === false? <button className="post-edit-button" onClick={handleDelete}>Delete Post</button> : null}
                {user !== null && user.user_name === post.user.user_name && editing === false? <button className="post-edit-button" onClick={handleEdit}>Edit Post</button> : null}
                {editing === true? <button onClick={handleEditSubmit}>Submit Edit</button> : null}
            </div>
            <CommentList posts={posts} setPosts={setPosts} user={user} comments={post.comments}/> 
            {user !== null? <CommentForm posts={posts} setPosts={setPosts} user={user} post={post}></CommentForm> : null}
        </div>
    )
}


export default Post