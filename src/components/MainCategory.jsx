import { Link } from "react-router-dom"

const MainCategory = () => {
  return (
    <div className=''>
        <div className="hidden md:flex bg-white rounded-2xl p-4 justify-center items-center gap-8">
            <div className="flex-1 flex justify-between items-center flex-wrap">
                <Link className="bg-blue-800 text-white rounded-full px-4 py-2 ">All Posts</Link>
                <Link className="hover:bg-blue-100  rounded-full px-4 py-2 ">Web Design</Link>
                <Link className="hover:bg-blue-100 rounded-full px-4 py-2">Development</Link>
                <Link className="hover:bg-blue-100 rounded-full px-4 py-2">Databases</Link>
                <Link className="hover:bg-blue-100 rounded-full px-4 py-2">Search Engine</Link>
                <Link className="hover:bg-blue-100 rounded-full px-4 py-2 ">Marketing</Link>
            </div>
            <div>Search</div>
        </div>
    </div>
  )
}

export default MainCategory