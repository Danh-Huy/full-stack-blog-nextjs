import CustomImage from "./Image"
import { Link } from "react-router-dom";

const FeaturePost = () => {
  return (
    <div className='mt-4 flex flex-col gap-8 lg:flex-row'>
      {/* First Item */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        <CustomImage
                    url="https://ik.imagekit.io/alv49cosn/featured1.jpeg?updatedAt=1754231852312"
                    alt="Featured Post Image" 
                    className={"rounded-2xl shadow-lg object-cover"}
                    width="895"
                />
        <div className="flex items-center gap-4">
          <h1 className="font-bold xl:text-xl">01.</h1>
          <Link className="text-blue-500 hover:underline xl:text-xl" to="/post/1">Web Design</Link>
          <span className="text-gray-500 xl:text-xl">2 days ago</span>
        </div>
        <div>
          <h1 className="font-bold text-3xl">Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
            </h1>
        </div>
      </div>

      {/* Others Item */}
      <div className="w-full lg:w-1/2 flex flex-col gap-8">

        {/* Second Item */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <CustomImage
            url="https://ik.imagekit.io/alv49cosn/featured2.jpeg?updatedAt=1754231852312"
            alt="Featured Post Image"
            className={"rounded-3xl shadow-lg object-cover w-1/3 aspect-video"}
          />
          <div className="w-2/3">
            <div className="flex items-center text-sm lg:text-base gap-4 mb-4">
              <h1 className="font-semibold xl:text-lg">02.</h1>
              <Link className="text-blue-500 hover:underline xl:text-sm 2xl:text-lg" to="/post/2">Web Development</Link>
              <span className="text-gray-500 xl:text-sm">3 days ago</span>
            </div>
            <div>
              <h1 className="text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h1>
            </div>
          </div>
        </div>

        {/* Third Item */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <CustomImage
            url="https://ik.imagekit.io/alv49cosn/featured3.jpeg?updatedAt=1754231852312"
            alt="Featured Post Image"
            className={"rounded-3xl shadow-lg object-cover w-1/3"}
          />
          <div className="w-2/3">
            <div className="flex items-center text-sm lg:text-base gap-4 mb-4">
              <h1 className="font-semibold xl:text-lg">03.</h1>
              <Link className="text-blue-500 hover:underline xl:text-sm 2xl:text-lg" to="/post/2">Web Development</Link>
              <span className="text-gray-500 xl:text-sm">3 days ago</span>
            </div>
            <div>
              <h1 className="text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h1>
            </div>
          </div>
        </div>

        {/* Fourth Item */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <CustomImage
            url="https://ik.imagekit.io/alv49cosn/featured4.jpeg?updatedAt=1754231852312"
            alt="Featured Post Image"
            className={"rounded-3xl shadow-lg object-cover w-1/3 "}
          />
          <div className="w-2/3">
            <div className="flex items-center text-sm lg:text-base gap-4 mb-4">
              <h1 className="font-semibold xl:text-lg">04.</h1>
              <Link className="text-blue-500 hover:underline xl:text-sm 2xl:text-lg" to="/post/2">Web Development</Link>
              <span className="text-gray-500 xl:text-sm">3 days ago</span>
            </div>
            <div>
              <h1 className="text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h1>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default FeaturePost