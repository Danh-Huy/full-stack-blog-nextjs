import CustomImage from "../components/Image"
import { Link } from "react-router-dom";
import PostMenuAction from "../components/PostMenuAction";
import Search from "../components/Search";
import PostComments from "../components/PostComments";

const SinglePostPage = () => {
  return (
    <div className='flex flex-col gap-8'>

      {/* Title Section */}
      <div className="flex gap-8">

        {/* Post Title */}
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">Lorem ipsum dolor sit, amet consectetur adipisicing elit met.</h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link className='text-blue-800'>John</Link>
            <span>on</span>
            <Link className='text-blue-800'>Web Design</Link>
            <span>2 days ago</span>
          </div>
          <p className="text-gray-600 font-medium">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti quos amet non unde officiis repellat in eius, inventore, cupiditate libero voluptatum. Fugit porro animi laudantium facere harum repudiandae culpa ea!</p>
        </div>

        {/* Post Image */}
        <div className="hidden lg:block w-2/5">
          <CustomImage
            url="postImg.jpeg"
            alt="Featured Post Image"
            className={"rounded-2xl shadow-lg object-cover"}
            width="600"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row gap-8 xl:gap-12">

        {/* Post Content */}
        <div className="flex flex-col gap-8 lg:text-lg text-justify">
          <p className="text-gray-600 font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus libero quo eos minus cum laboriosam in culpa, non repellendus fugiat distinctio laborum asperiores iusto obcaecati temporibus natus sint quod ex pariatur? Modi, dolor nisi. Rem veniam ea beatae optio, inventore illo harum deserunt, sed provident quo dolor sit eius maxime vitae at qui vel. Voluptas doloribus nemo pariatur, quasi minima harum aliquam cupiditate omnis nesciunt fugiat officia odio deserunt sit tenetur aspernatur laudantium, quas culpa magni quibusdam. Accusantium doloremque exercitationem mollitia ipsam qui non ea, dicta eligendi dignissimos voluptates suscipit commodi necessitatibus repellat natus officia nisi unde eveniet est error.</p>
          <p className="text-gray-600 font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus libero quo eos minus cum laboriosam in culpa, non repellendus fugiat distinctio laborum asperiores iusto obcaecati temporibus natus sint quod ex pariatur? Modi, dolor nisi. Rem veniam ea beatae optio, inventore illo harum deserunt, sed provident quo dolor sit eius maxime vitae at qui vel. Voluptas doloribus nemo pariatur, quasi minima harum aliquam cupiditate omnis nesciunt fugiat officia odio deserunt sit tenetur aspernatur laudantium, quas culpa magni quibusdam. Accusantium doloremque exercitationem mollitia ipsam qui non ea, dicta eligendi dignissimos voluptates suscipit commodi necessitatibus repellat natus officia nisi unde eveniet est error.</p>
          <p className="text-gray-600 font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus libero quo eos minus cum laboriosam in culpa, non repellendus fugiat distinctio laborum asperiores iusto obcaecati temporibus natus sint quod ex pariatur? Modi, dolor nisi. Rem veniam ea beatae optio, inventore illo harum deserunt, sed provident quo dolor sit eius maxime vitae at qui vel. Voluptas doloribus nemo pariatur, quasi minima harum aliquam cupiditate omnis nesciunt fugiat officia odio deserunt sit tenetur aspernatur laudantium, quas culpa magni quibusdam. Accusantium doloremque exercitationem mollitia ipsam qui non ea, dicta eligendi dignissimos voluptates suscipit commodi necessitatibus repellat natus officia nisi unde eveniet est error.</p>
          <p className="text-gray-600 font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus libero quo eos minus cum laboriosam in culpa, non repellendus fugiat distinctio laborum asperiores iusto obcaecati temporibus natus sint quod ex pariatur? Modi, dolor nisi. Rem veniam ea beatae optio, inventore illo harum deserunt, sed provident quo dolor sit eius maxime vitae at qui vel. Voluptas doloribus nemo pariatur, quasi minima harum aliquam cupiditate omnis nesciunt fugiat officia odio deserunt sit tenetur aspernatur laudantium, quas culpa magni quibusdam. Accusantium doloremque exercitationem mollitia ipsam qui non ea, dicta eligendi dignissimos voluptates suscipit commodi necessitatibus repellat natus officia nisi unde eveniet est error.</p>
          <p className="text-gray-600 font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus libero quo eos minus cum laboriosam in culpa, non repellendus fugiat distinctio laborum asperiores iusto obcaecati temporibus natus sint quod ex pariatur? Modi, dolor nisi. Rem veniam ea beatae optio, inventore illo harum deserunt, sed provident quo dolor sit eius maxime vitae at qui vel. Voluptas doloribus nemo pariatur, quasi minima harum aliquam cupiditate omnis nesciunt fugiat officia odio deserunt sit tenetur aspernatur laudantium, quas culpa magni quibusdam. Accusantium doloremque exercitationem mollitia ipsam qui non ea, dicta eligendi dignissimos voluptates suscipit commodi necessitatibus repellat natus officia nisi unde eveniet est error.</p>
          <p className="text-gray-600 font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus libero quo eos minus cum laboriosam in culpa, non repellendus fugiat distinctio laborum asperiores iusto obcaecati temporibus natus sint quod ex pariatur? Modi, dolor nisi. Rem veniam ea beatae optio, inventore illo harum deserunt, sed provident quo dolor sit eius maxime vitae at qui vel. Voluptas doloribus nemo pariatur, quasi minima harum aliquam cupiditate omnis nesciunt fugiat officia odio deserunt sit tenetur aspernatur laudantium, quas culpa magni quibusdam. Accusantium doloremque exercitationem mollitia ipsam qui non ea, dicta eligendi dignissimos voluptates suscipit commodi necessitatibus repellat natus officia nisi unde eveniet est error.</p>
          <p className="text-gray-600 font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus libero quo eos minus cum laboriosam in culpa, non repellendus fugiat distinctio laborum asperiores iusto obcaecati temporibus natus sint quod ex pariatur? Modi, dolor nisi. Rem veniam ea beatae optio, inventore illo harum deserunt, sed provident quo dolor sit eius maxime vitae at qui vel. Voluptas doloribus nemo pariatur, quasi minima harum aliquam cupiditate omnis nesciunt fugiat officia odio deserunt sit tenetur aspernatur laudantium, quas culpa magni quibusdam. Accusantium doloremque exercitationem mollitia ipsam qui non ea, dicta eligendi dignissimos voluptates suscipit commodi necessitatibus repellat natus officia nisi unde eveniet est error.</p>
          <p className="text-gray-600 font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus libero quo eos minus cum laboriosam in culpa, non repellendus fugiat distinctio laborum asperiores iusto obcaecati temporibus natus sint quod ex pariatur? Modi, dolor nisi. Rem veniam ea beatae optio, inventore illo harum deserunt, sed provident quo dolor sit eius maxime vitae at qui vel. Voluptas doloribus nemo pariatur, quasi minima harum aliquam cupiditate omnis nesciunt fugiat officia odio deserunt sit tenetur aspernatur laudantium, quas culpa magni quibusdam. Accusantium doloremque exercitationem mollitia ipsam qui non ea, dicta eligendi dignissimos voluptates suscipit commodi necessitatibus repellat natus officia nisi unde eveniet est error.</p>
          <p className="text-gray-600 font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus libero quo eos minus cum laboriosam in culpa, non repellendus fugiat distinctio laborum asperiores iusto obcaecati temporibus natus sint quod ex pariatur? Modi, dolor nisi. Rem veniam ea beatae optio, inventore illo harum deserunt, sed provident quo dolor sit eius maxime vitae at qui vel. Voluptas doloribus nemo pariatur, quasi minima harum aliquam cupiditate omnis nesciunt fugiat officia odio deserunt sit tenetur aspernatur laudantium, quas culpa magni quibusdam. Accusantium doloremque exercitationem mollitia ipsam qui non ea, dicta eligendi dignissimos voluptates suscipit commodi necessitatibus repellat natus officia nisi unde eveniet est error.</p>
          <p className="text-gray-600 font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus libero quo eos minus cum laboriosam in culpa, non repellendus fugiat distinctio laborum asperiores iusto obcaecati temporibus natus sint quod ex pariatur? Modi, dolor nisi. Rem veniam ea beatae optio, inventore illo harum deserunt, sed provident quo dolor sit eius maxime vitae at qui vel. Voluptas doloribus nemo pariatur, quasi minima harum aliquam cupiditate omnis nesciunt fugiat officia odio deserunt sit tenetur aspernatur laudantium, quas culpa magni quibusdam. Accusantium doloremque exercitationem mollitia ipsam qui non ea, dicta eligendi dignissimos voluptates suscipit commodi necessitatibus repellat natus officia nisi unde eveniet est error.</p>
          <p className="text-gray-600 font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus libero quo eos minus cum laboriosam in culpa, non repellendus fugiat distinctio laborum asperiores iusto obcaecati temporibus natus sint quod ex pariatur? Modi, dolor nisi. Rem veniam ea beatae optio, inventore illo harum deserunt, sed provident quo dolor sit eius maxime vitae at qui vel. Voluptas doloribus nemo pariatur, quasi minima harum aliquam cupiditate omnis nesciunt fugiat officia odio deserunt sit tenetur aspernatur laudantium, quas culpa magni quibusdam. Accusantium doloremque exercitationem mollitia ipsam qui non ea, dicta eligendi dignissimos voluptates suscipit commodi necessitatibus repellat natus officia nisi unde eveniet est error.</p>
          <p className="text-gray-600 font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus libero quo eos minus cum laboriosam in culpa, non repellendus fugiat distinctio laborum asperiores iusto obcaecati temporibus natus sint quod ex pariatur? Modi, dolor nisi. Rem veniam ea beatae optio, inventore illo harum deserunt, sed provident quo dolor sit eius maxime vitae at qui vel. Voluptas doloribus nemo pariatur, quasi minima harum aliquam cupiditate omnis nesciunt fugiat officia odio deserunt sit tenetur aspernatur laudantium, quas culpa magni quibusdam. Accusantium doloremque exercitationem mollitia ipsam qui non ea, dicta eligendi dignissimos voluptates suscipit commodi necessitatibus repellat natus officia nisi unde eveniet est error.</p>
          <p className="text-gray-600 font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus libero quo eos minus cum laboriosam in culpa, non repellendus fugiat distinctio laborum asperiores iusto obcaecati temporibus natus sint quod ex pariatur? Modi, dolor nisi. Rem veniam ea beatae optio, inventore illo harum deserunt, sed provident quo dolor sit eius maxime vitae at qui vel. Voluptas doloribus nemo pariatur, quasi minima harum aliquam cupiditate omnis nesciunt fugiat officia odio deserunt sit tenetur aspernatur laudantium, quas culpa magni quibusdam. Accusantium doloremque exercitationem mollitia ipsam qui non ea, dicta eligendi dignissimos voluptates suscipit commodi necessitatibus repellat natus officia nisi unde eveniet est error.</p>

        </div>

        {/* {Post Menu} */}
        <div className="px-4 h-max sticky top-8">
          <h1 className="mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 mb-4">
              <CustomImage
                url="userImg.jpeg"
                alt="Author Image"
                className={"rounded-full object-cover"}
                width="48"
                height="48"
              />
              <Link className="text-blue-800">John Doe</Link>
            </div>
            <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <div className="flex gap-2">
              <Link className="text-blue-800">
                <CustomImage
                  url="facebook.svg"
                />
              </Link>
              <Link className="text-blue-800">
                <CustomImage
                  url="instagram.svg"
                />
              </Link>
            </div>
          </div>
          <PostMenuAction />
          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2">
            <Link to="/" className="underline">All</Link>
            <Link to="/" className="underline">Web Design</Link>
            <Link to="/" className="underline">Database</Link>
            <Link to="/" className="underline">Search Engine</Link>
            <Link to="/" className="underline">Marketing</Link>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search />
        </div>
      </div>

      {/* Post Comments Section */}
      <PostComments />
    </div>
  )
}

export default SinglePostPage