import { Heart, Megaphone, MessageSquare, UserPlus } from "lucide-react";
import { AuthContext } from "../context/authContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Comments from "./Comments.jsx";
import { useState } from "react";
import moment from "moment";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { makeRequest } from "../axios";

const Post = ({ post }) => {
  const { currentUser } = useContext(AuthContext);
  const [commentOpen, setCommentOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { isLoading, error, data } = useQuery(["likes", post.id], () =>
    makeRequest.get("/likes?postId=" + post.id).then((res) => {
      return res.data;
    })
  );

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (liked) => {
      if (liked) return makeRequest.delete("/likes?postId=" + post.id);
      return makeRequest.post("/likes", { postId: post.id });
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["likes"]);
      },
    }
  );
  const deleteMutation = useMutation(
    (postId) => {
      return makeRequest.delete("/posts/" + postId);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["posts"]);
      },
    }
  );

  const handleLike = () => {
    mutation.mutate(data.includes(currentUser.id));
  };

  const handleDelete = () => {
    deleteMutation.mutate(post.id);
  };

  return (
    <div className="border p-4 rounded-lg mb-4">
      <div className="flex gap-4 mb-4 items-center">
        <img
          className=" h-12 w-12 rounded-full object-cover"
          // src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
          src={post.coverPic}
          alt="Danc_Abromov"
        />
        <div className=" text-sm text-gray-400">
          <Link to={`/profile/${post.userId}`}>
            <h3 className=" hover:text-gray-900">{post.name}</h3>
          </Link>
          <span className="date">{moment(post.createdAt).fromNow()}</span>
        </div>
      </div>
      {post.img && (
        <img
          className=" h-auto w-full mb-4 rounded-lg"
          // src={post.img}
          src={"/upload/" + post.img}
          alt=""
        />
      )}
      <p className=" text-gray-400 hover:text-gray-700 text-sm mb-4">
        {post.desc}
      </p>
      <hr />
      <div className="flex text-gray-400 justify-between mt-4 items-center">
        <div className="flex gap-4">
          <div className="flex items-center text-xs gap-2">
            {isLoading ? (
              "loading"
            ) : data.includes(currentUser.id) ? (
              <Heart className=" text-red-500 w-4 h-4" onClick={handleLike} />
            ) : (
              <Heart className=" w-4 h-4" onClick={handleLike} />
            )}
            {data?.length} Likes
          </div>

          {/* <Heart className="w-4 h-4" onClick={handleLike} /> */}

          <div
            className="flex gap-2 items-center text-xs"
            onClick={() => setCommentOpen(!commentOpen)}
          >
            <MessageSquare className="w-4 h-4" />
            <p> Comments</p>
          </div>
        </div>

        <button className="flex gap-1 text-xs border p-1 rounded bg-blue-500 text-white">
          <UserPlus className=" h-4 w-4" />
          Follow
        </button>
      </div>
      {commentOpen && <Comments postId={post.id} key={post.id} />}
    </div>
  );
};
export default Post;
