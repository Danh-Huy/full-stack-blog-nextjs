import CustomImage from "./Image"

const PostComment = () => {
  return (
    <div className='flex flex-col gap-6 bg-slate-50 p-4 mb-6 rounded-xl shadow'>
      <div className="flex items-center justify-start gap-4">
        <CustomImage url="default-image.jpg" alt="User Avatar" className="w-10 h-10 rounded-full object-cover" />
        <h1 className="text-lg font-medium">John Doe</h1>
        <span className="text-gray-500 text-sm">2 days ago</span>
      </div>

      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, dolorem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, dolorem!</p>
      </div>
    </div>
  )
}

export default PostComment