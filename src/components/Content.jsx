import { AuthContext } from "../context/authContext";
import { useContext } from "react";
import Posts from "./Posts";
import Share from "./Share";

const Content = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <>
      <div className="relative h-screen lg:w-4/12 w-full px-4 lg:px-0 z-10">
        {/* <div className="border p-4 rounded-lg mb-8">
          <form action="" className="flex gap-2">
            <img
              className="h-10 w-10 rounded-full"
              src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
              alt="Dan_Abromov"
            />
            <input
              className="flex h-10 w-full rounded-md border border-gray-200 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 "
              type="text"
              placeholder="Start a conversation"
            ></input>
          </form>
        </div> */}
        <Share />
        <Posts />
      </div>
    </>
  );
};
export default Content;
