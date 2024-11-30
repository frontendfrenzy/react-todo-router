import { createContext, useState, useEffect, Children} from "react";
import { useNavigate } from "react-router-dom";
import { format } from 'date-fns';
import api from '/src/API/post';


const DataContext = createContext({});

export const Dataprovider = ({children}) => {
    const [Search,setSearch] = useState("");
  const [Posts,setPosts] = useState([])
const [SearchResults,setSearchResults] = useState([]);
const [PostTitle,setPostTitle] = useState("");
const [PostName,setPostName] = useState("");
const [PostDescription,setPostDescription] = useState("");
const [editTitle,seteditTitle] = useState("");
const [editName,seteditName] = useState("");
const [editDescription,seteditDescription] = useState("");
const Navigate = useNavigate();

const   handleSubmit = async (e) => {
  e.preventDefault();
  const id = Posts.length ? Posts[Posts.length - 1].id + 1 : 1;
  const datetime = format(new Date(), 'MMMM dd, yyyy pp');
  const newPost = {id,title:PostTitle,name:PostName,datetime,description:PostDescription}
  try{
    const responsed = await api.post('/Posts', newPost)
  const allPost = [...Posts, responsed.data];
  setPosts(allPost);
  setPostTitle('');
  setPostName('');
  setPostDescription('');
  }catch (err){
    console.log(`Error: ${err.message}`)
  }
}
useEffect(() => {
  const filterResult = Posts.filter((post) => ((post.title).toLowerCase()).includes(Search.toLowerCase()) || 
   ((post.name).toLowerCase()).includes(Search.toLowerCase()) || ((post.description).toLowerCase()).includes(Search.toLowerCase()));
    setSearchResults(filterResult.reverse());
},[Posts,Search]);

const handleEdit = async (id) => {
  const datetime = format(new Date(), 'MMMM dd, yyyy pp');
  const updatesPost = {id,title:editTitle,name:editName,datetime,description:editDescription}
  try{
    const response = await api.put(`/Posts/${id}`,updatesPost)
    setPosts(Posts.map(post => post.id === id ? {...response.data} : post));
  seteditTitle('');
  seteditName('');
  seteditDescription('');
  }catch (err){
    console.log(`Error: ${err.message}`)
  }
}

{/* axios fetch api data get put post delete in server */}
useEffect (() => {
  const fetchPosts = async () => {
    try{
      const response = await api.get('/Posts');
      {/* response.json nu kudukama direct ta response.data nu kuduthu data wa server la get panni yaduthukalam */}
      setPosts(response.data);
    }catch(err){
      if(err.response){
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      }else{
        console.log(`Error: ${err.message}`);
      }
    }
  }
  fetchPosts();
}, [])



const handleDelete = async (id) => {
  await api.delete(`/Posts/${id}`)
  const postsList = Posts.filter(post => post.id !== id);
  setPosts(postsList);
  Navigate('/');
}
    return {
        <DataContext.Provider value={{
            Search,setSearch,Posts,handleSubmit,PostTitle,setPostTitle,setPostName,PostName,PostDescription,setPostDescription
        }}>
        {children}
        </DataContext.Provider>
    }
}
export default DataContext;