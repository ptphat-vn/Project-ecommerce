import React from "react";
import { Route } from "react-router-dom";
import Dashboard from "../pages/Admin/Dashboard";
import { CategoryManagerment } from "../pages/Admin/CategoryManagerment/CategoryManagerment";
import { ProductManagement } from "../pages/Admin/ProductManagerment/ProductManagement";
import { AddProduct } from "../pages/Admin/ProductManagerment/AddProduct";
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
      <Route path="products" element={<ProductManagement />} />
      <Route path="products/add" element={<AddProduct />} />
    </Route>
  );
};
export default AdminRoutes;
