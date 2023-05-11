import { Outlet, Navigate } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";

export default function GuestLayout() {
  const { currentUser, userToken } = useStateContext();

  if (currentUser) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
}
