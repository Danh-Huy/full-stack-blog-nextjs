import { Link } from "react-router-dom"

const MainCategory = () => {
  return (
    <div className=''>
      <div className="hidden md:flex bg-white rounded-3xl p-4 justify-center items-center gap-8">
        <div className="flex-1 flex justify-between items-center flex-wrap text-lg">
          <Link className="bg-blue-700 text-white rounded-full px-4 py-2 ">All Posts</Link>
          <Link className="hover:bg-blue-100  rounded-full px-4 py-2 ">Web Design</Link>
          <Link className="hover:bg-blue-100 rounded-full px-4 py-2">Development</Link>
          <Link className="hover:bg-blue-100 rounded-full px-4 py-2">Databases</Link>
          <Link className="hover:bg-blue-100 rounded-full px-4 py-2">Search Engine</Link>
          <Link className="hover:bg-blue-100 rounded-full px-4 py-2 ">Marketing</Link>
        </div>
        <span className="text-xl font-medium">|</span>
        <div className="flex items-center mx-auto bg-white rounded-2xl p-2 bg-gray-200">
          <input
            type="text"
            placeholder="Search..."
            class="w-full px-4 py-2 text-gray-700 bg-transparent focus:outline-none"
          />
          <button
            class="p-2 text-white bg-blue-700 rounded-xl hover:bg-blue-700 transition-all duration-200"
            aria-label="Search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default MainCategory