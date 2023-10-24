import React from "react";
async function loadPosts(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    return data
}
async function PostsPages() {
    const posts = await loadPosts()
    return(
        <div>PostPages</div>
    )
}
export default PostsPages