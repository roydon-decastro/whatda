import { Heart, Megaphone, MessageSquare } from "lucide-react";
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
          <h3>{post.name}</h3>
          <span className="date">{moment(post.createdAt).fromNow()}</span>
        </div>
      </div>
      {post.img && (
        <img
          className=" h-auto w-full mb-4 rounded-lg"
          // src={post.img}
          src={"/upload/" + post.img}
          alt="Dan_Abromov"
        />
      )}
      <p className=" text-gray-400 hover:text-gray-700 text-sm mb-4">
        {post.desc}
      </p>
      <hr />
      <div className="flex text-gray-400 gap-4 mt-4">
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

        <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
          <MessageSquare className="w-4 h-4" />
        </div>
      </div>
      {commentOpen && <Comments postId={post.id} />}
    </div>
  );
};
export default Post;
