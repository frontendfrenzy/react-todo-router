import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Dataprovider } from "../datacontext/DataContext";


const PostPage = () => {
  const { Posts, handleDelete } = useContext(Dataprovider);
  const { id } = useParams();
  const post = Posts.find(post => (post.id).toString() === id);
  return (
    <main className="flex justify-center items-center mt-10">
      <article>
        {post && 
        <>
          <h2 className="font-bold text-red-500">{post.title}</h2>
          <h4 className="font-bold text-blue-500">{post.name}</h4>
          <p className="font-bold text-green-300">{post.description}</p>
          <button className="border-red-700 bg-red-700 text-red-400 font-bold border-2 p-3 rounded-lg shadow-2xl cursor-pointer">Edit Post</button>
          <button className="border-red-700 bg-red-700 text-red-400 font-bold border-2 p-3 rounded-lg shadow-2xl cursor-pointer" onClick={() => handleDelete(post.id)}>Delete</button>
        </>
        }
        {
          !post && 
          <>
            <h2 className="text-5xl text-blue-950 mb-16 mt-6">Post Not Found</h2>
            <p  className="text-gray-700">Well, thats disappointing.</p>
            <Link to='/' className="text-gray-800 underline">Visit our Home Page</Link>
          </>
        }
      </article>
    </main>
  )
}

export default PostPage