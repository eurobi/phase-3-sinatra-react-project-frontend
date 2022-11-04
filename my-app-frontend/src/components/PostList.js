import React from "react";
import Post from "./Post";

function PostList({ setPosts, posts, user }){
    const postElements = posts.map((post => <Post posts={posts} setPosts={setPosts} key={post.created_at} post={post} user={user} />))
    return(
        <div>
            {postElements}
        </div>
    )
}


export default PostList
