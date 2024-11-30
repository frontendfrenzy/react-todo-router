import { useContext } from "react"
import { Link } from "react-router-dom"
import { Dataprovider } from "../datacontext/DataContext"


const Nav = () => {
  const { Search,setSearch } = useContext(Dataprovider);
  return (
    <nav className="flex justify-center flex-row gap-8">
        <form onSubmit={(e) => e.preventDefault()}>
            <label className=" cursor-pointer font-bold shadow-2xl border-blue-700 bg-blue-700 text-blue-300 border-2 rounded-lg p-4" htmlFor="Search">Search Post</label>
            <input className="border-2 shadow-2xl border-blue-700 p-4 rounded-md" type="text" value={Search} onChange={(e) => setSearch(e.target.value)} placeholder="Search Post" />
        </form>
        <ul className="flex gap-5">
            <li className="border-2 shadow-2xl border-blue-700 rounded-lg p-4 text-blue-300 font-bold bg-blue-600 cursor-pointer"
            ><Link to="/">Home</Link></li>
            <li  className="border-2 shadow-2xl border-blue-700 rounded-lg p-4 text-blue-300 font-bold bg-blue-600 cursor-pointer"
            ><Link to="about">about</Link></li>
            <li  className="border-2 shadow-2xl border-blue-700 rounded-lg p-4 text-blue-300 font-bold bg-blue-600 cursor-pointer"
            ><Link to="post">post</Link></li>
        </ul>
    </nav>
  )
}

export default Nav