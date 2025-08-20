import 'react-quill-new/dist/quill.snow.css';
import ReactQuill from 'react-quill-new';
import { useUser } from '@clerk/clerk-react';

const Write = () => {

  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (isLoaded && !isSignedIn) {
    return <div>Please sign in to create a post.</div>;
  }

  return (
    <div className='flex flex-col gap-6 h-[calc(100vh-64px)] md:h-[calc(100vh-80px)]'>
      <h1 className='text-2xl font-bold mb-4'>Write a New Post</h1>
      <form action="" className='flex flex-col gap-6 flex-1 mb-6'>
        <button className='text-gray-500 bg-white p-2 rounded-xl w-fit'>Add a cover image</button>
        <input type="text" className='text-4xl font-semibold bg-transparent outline-none' placeholder='Post Title' />
        <div className="flex flex-row items-center gap-4">
          <label className='text-sm'>Choose a Category:</label>
          <select name='cat' className='p-2 rounded bg-white shadow-md'>
            <option value="tech">General</option>
            <option value="web-design">Web Design</option>
            <option value="development">Development</option>
            <option value="database">Database</option>
            <option value="search-engine">Search Engine</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>
        <textarea name="desc" id="" className='p-4 rounded-xl bg-white shadow-md' placeholder='A short description'></textarea>
        <ReactQuill theme="snow" className='flex-1 rounded-xl bg-white shadow-md' />
        <button className='bg-blue-800 text-white px-4 py-2 rounded-xl w-fit'>Send</button>
      </form>
    </div>
  )
}

export default Write