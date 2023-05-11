import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
// import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Content from "./components/Content";
import Profile from "./components/Profile";
import DefaultLayout from "./layouts/DefaultLayout";
import GuestLayout from "./layouts/GuestLayout";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

// const ProtectedRoute = ({ children }) => {
//   if (!currentUser) {
//     return <Navigate to="/login" />;
//   }

//   return children;
// };

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/content",
        element: <Navigate to="/" />,
      },
      {
        path: "/",
        element: <Content />,
      },
      {
        path: "/profile/:id",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
  // {
  //   path: "/",
  //   element: <App />,
  // },
  // {
  //   path: "/home",
  //   element: <Home />,
  // },
  // {
  //   path: "/login",
  //   element: <Login />,
  // },
  // {
  //   path: "/signup",
  //   element: <Signup />,
  // },
]);

export default router;
