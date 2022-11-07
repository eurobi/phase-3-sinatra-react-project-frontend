import React, { useState } from "react";

function PostForm({ user, setPosts, posts }){
    const [content, setContent] = useState('')
    function handleSubmit(e){
        e.preventDefault()
        fetch('http://localhost:9292/posts',{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                content: content,
                user_id: user.id
            })
        })
        .then(r => r.json())
        .then(post => {
            setPosts([post, ...posts])
            setContent('')
        })

    }

    return(
    <form onSubmit={handleSubmit}>
        <label for='post-content-field'></label>
        <input onChange={(e) => setContent(e.target.value)} id='post-content-field' value={content}></input>
        <input type='submit'></input>
    </form>
    )

}

export default PostForm