import Post from "./Post"


const Feed = ({Posts}) => {
  return (
    <div>
        {Posts.map(post => (
            <Post key={post.id} post = {post}/>
        ))}
    </div>
  )
}

export default Feed