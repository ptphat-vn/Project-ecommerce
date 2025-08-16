import { Route, Routes } from "react-router-dom";
import "./App.css";

import { Home } from "./pages/Account/Home/Home";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/register";

import AdminRouter from "./routes/AdminRouter";
import LayoutAdmin from "./layouts/LayoutAdmin/LayoutAdmin";
import { LayoutAccount } from "./layouts/LayoutAccount/LayoutAccount";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Dashboard from "./pages/Admin/Dashboard";
import { CategoryManagerment } from "./pages/Admin/CategoryManagerment/CategoryManagerment";
import { ProductManagement } from "./pages/Admin/ProductManagerment/ProductManagement";
import { AddProduct } from "./pages/Admin/ProductManagerment/AddProduct";

function App() {
  const { accessToken } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (accessToken) {
      // const fetchDataListCarts = async () => {
      //   // const res = await getCarts();
      //   if (res.status === 200) {
      //     dispatch(setCart(res.data.items));
      //   }
      // };
      // fetchDataListCarts();
    }
  }, [accessToken]);
  console.log(accessToken, "accessToken");
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route
          path="/"
          element={
            <LayoutAccount>
              <Home />
            </LayoutAccount>
          }
        ></Route>
        <Route
          path="/products"
          element={<LayoutAccount>Product</LayoutAccount>}
        ></Route>
        <Route
          path="/login"
          element={
            <LayoutAccount>
              <Login />
            </LayoutAccount>
          }
        ></Route>
        <Route
          path="/register"
          element={
            <LayoutAccount>
              <Register />
            </LayoutAccount>
          }
        ></Route>

        {/* Admin */}

        <Route
          path="/admin"
          element={
            <AdminRouter>
              <LayoutAdmin />
            </AdminRouter>
          }
        >
          <Route element={<LayoutAdmin />}>
            <Route index element={<Dashboard />} />
            <Route path="categories" element={<CategoryManagerment />} />
            <Route path="products" element={<ProductManagement />} />
            <Route path="products/add" element={<AddProduct />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
