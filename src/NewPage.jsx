import { useContext } from "react"
import { Dataprovider } from "../datacontext/DataContext"


const NewPage = () => {
  const { handleSubmit,PostTitle,setPostTitle,setPostName,PostName,PostDescription,setPostDescription } = useContext(Dataprovider);
  return (
    <main className="flex justify-center items-center flex-col">
        <h1 className="mt-3 font-thin text-blue-950 text-3xl">NewPage</h1>
        <form className="flex flex-col mt-5 mb-5" onSubmit={handleSubmit}>
            <label className="font-bold" htmlFor="PostTitle">PostTitle:</label>
            <input className="border-2 mb-2 border-blue-700 p-2 rounded-md shadow-xl outline-none" id="PostTitle" required type="text" value={PostTitle} onChange={(e) => setPostTitle(e.target.value)} placeholder="Enter a Title..." />
            <label className="font-bold" htmlFor="PostName">PostName:</label>
            <input  className="border-2 mb-2 border-blue-700 p-2 rounded-md shadow-xl outline-none" id="PostName" required type="text" value={PostName} onChange={(e) => setPostName(e.target.value)} placeholder="Enter a Postname" />
            <label className="font-bold" htmlFor="PostDescription">PostDescription:</label>
            <textarea  className="border-2 mb-2 border-blue-700 p-2 rounded-md shadow-xl outline-none" required value={PostDescription} onChange={(e) => setPostDescription(e.target.value)} id="PostDescription"/>
              <button type="Submit" className="mt-7 border-2 border-blue-800 bg-blue-800 text-blue-300 p-2 rounded-lg">Submit</button>
        </form>
    </main>
  )
}

export default NewPage