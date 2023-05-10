import { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../axios";
import moment from "moment";

const Comments = ({ postId }) => {
  const [desc, setDesc] = useState("");
  const { currentUser } = useContext(AuthContext);

  const { isLoading, error, data } = useQuery(["comments"], () =>
    makeRequest.get("/comments?postId=" + postId).then((res) => {
      //   console.log("eto yun " + res.data);
      return res.data;
    })
  );

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (newComment) => {
      return makeRequest.post("/comments", newComment);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["comments"]);
      },
    }
  );

  const handleClick = async (e) => {
    e.preventDefault();
    mutation.mutate({ desc, postId });
    setDesc("");
  };

  return (
    <div className="mt-4">
      <div className="flex gap-4">
        {/* <img src={"/upload/" + currentUser.coverPic} alt="" /> */}
        <img
          className=" h-8 w-8 rounded-full object-fill"
          src="https://images.unsplash.com/photo-1683537687366-5d1be66f75e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt=""
        />
        <input
          type="text"
          placeholder="write a comment"
          value={desc}
          className="flex h-10 w-full rounded-md border border-gray-200 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 "
          onChange={(e) => setDesc(e.target.value)}
        />
        <button
          className="border px-4 py-1 rounded-lg text-gray-500"
          onClick={handleClick}
        >
          Send
        </button>
      </div>
      {error
        ? "Something went wrong"
        : isLoading
        ? "loading"
        : data.map((comment) => (
            <div className="">
              <img src={"/upload/" + comment.profilePic} alt="" />

              <div className="p-2 mt-2 rounded-lg  bg-gray-100 w-fit  ">
                <p className=" font-medium text-xs">{comment.name}</p>
                <p className="text-sm text-gray-600">{comment.desc}</p>
              </div>
              <div className="flex gap-4 text-xs text-gray-600 pl-2">
                <p>Like</p>
                <p>Reply</p>
                <p className="">{moment(comment.created_At).fromNow()}</p>
              </div>
            </div>
          ))}
    </div>
  );
};

export default Comments;
