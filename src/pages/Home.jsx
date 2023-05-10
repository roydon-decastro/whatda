import Content from "../components/Content";
import MyPage from "../components/MyPage";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

// Create a query client
const queryClient = new QueryClient();

const Home = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Content />
        <MyPage />
      </div>
    </QueryClientProvider>
  );
};
export default Home;
