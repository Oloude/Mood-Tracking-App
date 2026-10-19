import { Navigate, Outlet } from "react-router";

function ProtectedRoute() {
  const loginDetails = JSON.parse(
    localStorage.getItem("login-details") || "null",
  );

  if (!loginDetails || loginDetails.isActive === false) {
    return <Navigate to="/login" replace />;
  }



  return <Outlet />;
}

export default ProtectedRoute;
