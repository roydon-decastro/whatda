import { Heart, Megaphone, MessageSquare } from "lucide-react";

const MyPage = () => {
  return (
    <div className="w-4/12 pl-48 pr-8 hidden lg:block">
      <div className="border p-4 rounded-lg mb-4">
        <p className=" text-gray-400 hover:text-gray-700 text-sm mb-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s...
        </p>

        <div className="flex text-gray-400 gap-4 text-sm">
          <Heart className="w-4 h-4" />
          <Megaphone className="w-4 h-4" />
          <MessageSquare className="w-4 h-4" />
          <h4>5 mins ago</h4>
        </div>
      </div>
      <div className="border p-4 rounded-lg mb-4">
        <p className=" text-gray-400 hover:text-gray-700 text-sm mb-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s...
        </p>

        <div className="flex text-gray-400 gap-4 text-sm">
          <Heart className="w-4 h-4" />
          <Megaphone className="w-4 h-4" />
          <MessageSquare className="w-4 h-4" />
          <h4>2d</h4>
        </div>
      </div>
      <hr />
      <div className="mt-4 text-gray-400">
        <h2 className="text-gray-600 mb-4">Topics Interests</h2>
      </div>
    </div>
  );
};
export default MyPage;
