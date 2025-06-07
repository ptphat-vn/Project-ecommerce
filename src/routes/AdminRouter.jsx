import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AdminRouter = () => {
  const { accessToken, user } = useSelector((state) => state.auth);

  const isAdmin = user?.role === "ADMIN";

  return accessToken && isAdmin ? <Outlet /> : <Navigate to="/" />;
};
export default AdminRouter;
