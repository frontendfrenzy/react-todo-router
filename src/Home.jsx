import { useContext } from "react"
import Feed from "./Feed"
import { Dataprovider } from "../datacontext/DataContext"


const Home = () => {
  const { Posts } = useContext(Dataprovider);
  return (
    <main className="flex justify-center items-center">
        {Posts.length ? (
            <Feed Posts={Posts} />
        ) : (
            <p className="font-bold text-blue-400">No posts to display</p>
        )}
    </main>
  )
}

export default Home