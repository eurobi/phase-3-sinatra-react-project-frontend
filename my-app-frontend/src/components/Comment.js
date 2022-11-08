import React from "react";

function Comment({posts, setPosts, user, comment}){
    function handleDelete(){
        fetch(`http://localhost:9292/comments/${comment.id}`,{
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(r => r.json())
        .then(commentResp => {
            const newPosts = [...posts]
            const editedPosts = newPosts.map((post) => {
                if(post.id === commentResp.post_id){
                    post.comments = post.comments.filter((comment) => comment.id !== commentResp.id? true : false)
                    return post
                }
                else{
                    return post
                }
            })
            setPosts(editedPosts)
        })
    }
    return(
        <div className="comment">
            <p>{comment.user.user_name}: {comment.content}</p>
            {user!== null && user.id === comment.user.id? <button onClick={handleDelete}>Delete Comment</button> : null}
        </div>
        
    )
}

export default Comment