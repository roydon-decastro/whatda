import { Navigate, NavLink, Outlet } from "react-router-dom";
import MyPage from "../components/MyPage";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { useStateContext } from "../context/ContextProvider";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import Filler from "../components/Filler";
import Tags from "../components/Tags";

const queryClient = new QueryClient();

const DefaultLayout = () => {
  const { currentUser, userToken, setCurrentUser, setUserToken } =
    useStateContext();

  // if (!userToken) {
  // if (!accessToken) {
  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        {/* <Tags /> */}
        <div className="flex">
          <Filler />
          <Sidebar />
          <Outlet />
          {/* <Content /> */}
          <MyPage />
        </div>
      </QueryClientProvider>
    </>
  );
};
export default DefaultLayout;
