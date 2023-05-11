import { AuthContext } from "../context/authContext";
import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { makeRequest } from "../axios";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";

import Posts from "./Posts";

const Profile = () => {
  const [openUpdate, setOpenUpdate] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const userId = parseInt(useLocation().pathname.split("/")[2]);

  const { isLoading, error, data } = useQuery(["user"], () =>
    makeRequest.get("/users/find/" + userId).then((res) => {
      return res.data;
    })
  );

  const { isLoading: rIsLoading, data: relationshipData } = useQuery(
    ["relationship"],
    () =>
      makeRequest.get("/relationships?followedUserId=" + userId).then((res) => {
        return res.data;
      })
  );

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (following) => {
      if (following)
        return makeRequest.delete("/relationships?userId=" + userId);
      return makeRequest.post("/relationships", { userId });
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["relationship"]);
      },
    }
  );

  const handleFollow = () => {
    mutation.mutate(relationshipData.includes(currentUser.id));
  };

  return (
    <>
      <div className="relative h-screen lg:w-4/12 w-full px-4 lg:px-0 z-10   pt-12">
        <div className="border mb-4 pb-4 text-center">
          <div className="relative">
            <img
              src={currentUser.coverPic}
              alt=""
              className="mb-20 h-[250px] w-full object-cover "
            />
            <img
              className="h-32 w-32 rounded-full absolute bottom-[-64px] lg:left-[240px] left-[160px] border-8 border-white object-cover "
              src={currentUser.profilePic}
              alt=""
            />
          </div>
          <h1 className=" text-2xl mb-4">
            {currentUser.name} {currentUser.id}
          </h1>
          <div className="flex gap-4 text-sm text-gray-500 justify-center">
            <p>128 Followers</p>
            <p>1380 Followed</p>
            <p>8 Posts</p>
          </div>
        </div>
        <Posts userId={userId} />
      </div>
    </>
  );
};
export default Profile;
