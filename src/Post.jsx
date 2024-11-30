import { Link } from "react-router-dom"


const Post = ({post}) => {
  return (
    <article className="flex justify-center text-center items-center flex-col mt-4 border-2 border-b-green-700 p-4 rounded-2xl shadow-2xl">
      <Link to={`post/${post.id}`}>
      <h2 className="font-bold text-red-500">{post.title}</h2>
        <h4 className="font-bold text-blue-500">{post.name}</h4>
        <p className="font-bold text-green-300">{post.datetime}</p>
        </Link>
        <p className="text-gray-800">{(post.description).length <= 25 ? post.description : `${(post.description).slice(0,25)}...`}</p>

    </article>
  )
}

export default Post