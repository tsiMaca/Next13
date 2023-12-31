import PostCard from "@/components/PostCard"
async function loadPosts(){
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json()
        return data
    }
    //RSC
    async function PostsPages() {
        const posts = await loadPosts()
        return(
            <div>
                {   
                posts.map((post) =>(
                    <PostCard post={post} key={post.id}/>
                ))
                }
            </div>
        )
    }
    export default PostsPages