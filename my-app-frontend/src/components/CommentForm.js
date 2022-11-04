import React from "react";

function CommentForm(){
    return(
        <form>
            <label for='comment-field'>Comment: </label>
            <input id='comment-field'></input>
            <input type='submit'></input>
        </form>
    )

}

export default CommentForm