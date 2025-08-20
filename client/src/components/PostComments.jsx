
import PostComment from "./PostComment";

const PostComments = () => {
  return (
    <div className='flex flex-col gap-8 lg:w-3/5'>
      <h2 className="text-xl font-semibold underline">Comments</h2>
      <div className="flex items-center justify-between gap-8"> 
        <textarea className="w-full border border-gray-300 p-2 rounded-xl" rows="4" placeholder="Leave a comment..."></textarea>
        <button className="mt-2 bg-blue-800 text-white py-2 px-4 rounded-md">Send</button>
      </div>
      <PostComment />
      <PostComment />
      <PostComment />
    </div>
  )
}

export default PostComments