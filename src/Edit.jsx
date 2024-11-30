import { useEffect } from "react";
import { useParams,Link } from "react-router-dom";

const Edit = ({ Posts,editTitle,seteditTitle,editName,seteditName,editDescription,seteditDescription}) => {
    const { id } = useParams();
    const post = Posts.find(posted => (posted.id).toString() === id);

    useEffect(() => {
        if(post){
            seteditTitle(post.title);
            seteditName(post.name);
            seteditDescription(post.description)
        }
    }, [post,seteditTitle,seteditName,seteditDescription])
  return (
    <main>
        {editTitle && 
            <>
                <h2>Edit Post</h2>
                <form onSubmit={(e) => e.preventDefault()}>
                    <label htmlFor=""></label>
                </form>
            </>
        }
    </main>
  )
}

export default Edit
