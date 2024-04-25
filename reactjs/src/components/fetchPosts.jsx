import useFetch from "./useFetch";
import './fetchPosts.css'

const FetchPosts = ()=>{
    const {data,loading,error} = useFetch('https://dummyjson.com/posts');

    return(
        <>
        {loading?
            (<h1>Loading</h1>):
            <div id="Posts">
                <h1 className="post-list">Posts :</h1>
                <ul>
                    {data.posts.map((post) => (
                    <div className="post-item" key={post.id}>
                        <li>Id: {post.id}</li>
                        <li>Title: {post.title}</li>
                        <li>Body: {post.body}</li>
                    </div>
                    ))}
                </ul>
            </div>
        }
        </>
    )
}

export default FetchPosts;