import { Link } from 'react-router-dom';
import Search from './Search';

const SideMenu = () => {
    return (
        <div className='flex flex-col gap-8 px-4 h-max sticky top-8'>
            <div className='flex flex-col gap-4'>
                <h1 className='text-md font-semibold'>Search</h1>
                <Search />
            </div>

            <div className='flex flex-col gap-4'>
                <h1 className='text-md font-semibold'>Filter</h1>
                <div className='flex flex-col gap-2 text-sm'>
                    <label htmlFor="">
                        <input type="radio" name="soft" value="newest" className='appearance-none w-4 h-4 border border-gray-300 bg-white rounded-sm mr-2 checked:bg-blue-800 checked:border-transparent' />
                        Newest
                    </label>
                    <label htmlFor="">
                        <input type="radio" name="soft" value="most-popular" className='appearance-none w-4 h-4 border border-gray-300 bg-white rounded-sm mr-2 checked:bg-blue-800 checked:border-transparent' />
                        Most Popular
                    </label>
                    <label htmlFor="">
                        <input type="radio" name="soft" value="trending" className='appearance-none w-4 h-4 border border-gray-300 bg-white rounded-sm mr-2 checked:bg-blue-800 checked:border-transparent' />
                        Trending
                    </label>
                    <label htmlFor="">
                        <input type="radio" name="soft" value="oldest" className='appearance-none w-4 h-4 border border-gray-300 bg-white rounded-sm mr-2 checked:bg-blue-800 checked:border-transparent' />
                        Oldest
                    </label>
                </div>
            </div>

            <div>
                <h1 className='text-md font-semibold'>Categories</h1>
                <div className='flex flex-col gap-2 mt-2'>
                    <Link to="/posts" className='underline'>All</Link>
                    <Link to="/posts?cat=web-design" className='underline'>Web Design</Link>
                    <Link to="/posts?cat=development" className='underline'>Development</Link>
                    <Link to="/posts?cat=database" className='underline'>Database</Link>
                    <Link to="/posts?cat=search-engine" className='underline'>Search Engine</Link>
                    <Link to="/posts?cat=marketing" className='underline'>Marketing</Link>
                </div>
            </div>
        </div>
    )
}

export default SideMenu