import { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";
import { makeRequest } from "../axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const Share = () => {
  const [file, setFile] = useState(null);
  const [desc, setDesc] = useState("");

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await makeRequest.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const { currentUser } = useContext(AuthContext);
  const queryClient = useQueryClient();

  const mutation = useMutation(
    (newPost) => {
      return makeRequest.post("/posts", newPost);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["posts"]);
      },
    }
  );

  const handleClick = async (e) => {
    e.preventDefault();
    let imgUrl = "";
    if (file) imgUrl = await upload();
    mutation.mutate({ desc, img: imgUrl });
    setDesc("");
    setFile(null);
  };

  const handleKeyDown = async (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      let imgUrl = "";
      if (file) imgUrl = await upload();
      mutation.mutate({ desc, img: imgUrl });
      setDesc("");
      setFile(null);
    }
  };

  return (
    <div className="">
      <div className="border px-4 pb-4  mb-4 rounded-lg">
        <div className=" my-4 flex gap-2 items-center">
          {/* <img src={currentUser.profilePic} alt="" /> */}
          <img
            className="h-10 w-10 rounded-full object-cover "
            src={currentUser.profilePic}
            alt=""
          />

          <input
            type="text"
            className="flex h-10 bg-gray-200 w-full rounded-xl border border-gray-200 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 "
            placeholder={`Start a discussion ${currentUser.name}?`}
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
            onKeyDown={handleKeyDown}
          />
        </div>
        {file && (
          <img
            className="rounded-lg p-4 border my-4"
            alt=""
            src={URL.createObjectURL(file)}
          />
        )}
        <div className="flex justify-end gap-2">
          <div className="text-sm text-gray-500">
            {/* <input type="file" id="file" style={{ display: "none" }} /> */}

            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
            <label htmlFor="file">
              <div className="border rounded-lg px-4 py-2">
                <img src="" alt="" />
                <span>Add Image</span>
              </div>
            </label>

            {/* <div className="border rounded-lg px-4 py-2">
              <img src="" alt="" />
              <span>Add Place</span>
            </div>
            <div className="border rounded-lg px-4 py-2">
              <img src="" alt="" />
              <span>Tag Friends</span>
            </div> */}
          </div>
          <div className="border rounded-lg px-4 py-1">
            <button onClick={handleClick}>Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Share;
