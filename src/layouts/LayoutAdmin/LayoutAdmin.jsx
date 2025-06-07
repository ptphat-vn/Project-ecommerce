import React from "react";
import { Outlet } from "react-router-dom";

export const LayoutAdmin = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};
