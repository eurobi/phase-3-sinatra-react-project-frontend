import React, { useState } from "react";

function CommentForm({user, post, setPosts, posts}){
    const [comment, setComment] = useState("")
    function handleSubmit(e){
        e.preventDefault()
        console.log(posts)
        fetch('http://localhost:9292/comments',{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                content: comment,
                user_id: user.id,
                post_id: post.id
            })
        })
        .then(r => r.json())
        .then(returnedComment => {
            const newPosts = [...posts]
            const mappedPosts = newPosts.map((mappost) => {
                if(mappost.id === post.id){
                    mappost.comments.push(returnedComment)
                    return mappost
                }else{
                    return mappost
                }
            })
            setPosts(mappedPosts)
            setComment('')
        })
    }
    return(
        <form className="comment-form" onSubmit={handleSubmit}>
            <label for='comment-field'>Comment: </label>
            <input onChange={(e) => setComment(e.target.value)} value={comment} id='comment-field'></input>
            <input className="post-edit-button" type='submit'></input>
        </form>
    )

}

export default CommentForm