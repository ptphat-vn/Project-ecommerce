import React from "react";
import { Route } from "react-router-dom";
import Dashboard from "../pages/Admin/Dashboard";
import { CategoryManagerment } from "../pages/Admin/CategoryManagerment/CategoryManagerment";
const LayoutAdmin = React.lazy(() =>
  import("../layouts/LayoutAdmin/LayoutAdmin")
);
const AdminRouter = React.lazy(() => import("./AdminRouter"));
const AdminRoutes = () => {
  return (
    <Route
      path="/admin"
      element={
        <AdminRouter>
          <LayoutAdmin />
        </AdminRouter>
      }
    >
      <Route index element={<Dashboard />} />
      <Route path="categories" element={<CategoryManagerment />} />
      <Route path="products" element={<h1>Products</h1>} />
      <Route path="products/add" element={<h1>Add Product</h1>} />
    </Route>
  );
};
export default AdminRoutes;
