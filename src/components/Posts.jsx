import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../axios";
import Post from "./Post";

const Posts = ({ userId }) => {
  // userId = 15;
  console.log("userID = " + userId);
  const { isLoading, error, data } = useQuery(["posts"], () =>
    makeRequest.get("/posts?userId=" + userId).then((res) => {
      // makeRequest.get("/posts").then((res) => {
      return res.data;
    })
  );
  console.log(data);
  return (
    <div className="posts">
      {error
        ? "Something went wrong!"
        : isLoading
        ? "loading"
        : data.map((post) => <Post post={post} key={post.id} />)}
    </div>
  );
};
export default Posts;
