import { Link } from "react-router-dom"
import MainCategory from "../components/MainCategory"
import FeaturePost from "../components/FeaturePost"
import PostList from "../components/PostList"

const Homepage = () => {
    return (
        <div className='mt-4 flex flex-col gap-4'>
            {/* BREADCRUMB */}
            <div>
                <Link to="/" className='text-blue-800 hover:underline'>Home</Link>
                <span className='mx-2'>.</span>
                <Link to="/current-page" className='text-blue-800 hover:underline'>Blog and Articles</Link>
            </div>
            {/* INTRODUCTION */}
            <div className='flex items-center justify-between'>
                {/* Title */}
                <div className=''>
                    <h1 className="text-gray-800 font-bold text-2xl md:text-4xl lg:text-5xl">Lorem, ipsum dolor sit amet consectetur elit.</h1>
                    <p className='mt-8 text-md md:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Veritatis aliquam.</p>
                </div>
            </div>
            {/* CATEGORY */}
            <div>
                <MainCategory />
            </div>
            {/* FEATURED POSTS */}
            <FeaturePost />
            {/* POST LIST */}
            <div className="">
                <h1 className="my-8 text-2xl text-gray-600">Recent Posts</h1>
                <PostList />
            </div>
        </div>
    )
}

export default Homepage