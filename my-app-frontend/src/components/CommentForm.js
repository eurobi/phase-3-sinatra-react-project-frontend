import React, { useState } from "react";

function CommentForm({user, post}){
    const [comment, setComment] = useState("")
    function handleSubmit(e){
        e.preventDefault()
        console.log(comment)
    }
    return(
        <form onSubmit={handleSubmit}>
            <label for='comment-field'>Comment: </label>
            <input onChange={(e) => setComment(e.target.value)} value={comment} id='comment-field'></input>
            <input type='submit'></input>
        </form>
    )

}

export default CommentForm