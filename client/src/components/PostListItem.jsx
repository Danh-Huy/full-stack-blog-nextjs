import { Link } from 'react-router-dom'
import CustomImage from './Image'
import PostComments from './PostComments'

const PostListItem = () => {
  return (
    <div className='flex flex-col xl:flex-row gap-8'>
      <div className='md:hidden xl:block xl:w-1/3'>
         <CustomImage url='postImg.jpeg' alt='' 
          className="rounded-2xl object-cover"
          width={735}
          />
      </div>
      
      <div className='flex flex-col gap-4 xl:w-2/3'>
        <Link to='/test' className='text-4xl font-semibold'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt cumque a quis.
        </Link>
        <div className='flex items-center gap-2 text-sm text-gray-400'>
          <span>Writen by</span>
          <Link className='text-blue-500'>John</Link>
          <span>on</span>
          <Link className='text-blue-500'>Web Design</Link>
          <span>2 days ago</span>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
          </p>
        <Link className='underline text-lg text-blue-800'>Read more</Link>
      </div>

    </div>
  )
}

export default PostListItem