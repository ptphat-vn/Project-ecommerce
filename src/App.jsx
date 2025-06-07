import { Route, Routes } from "react-router-dom";
import "./App.css";
import { LayoutAccout } from "./layouts/LayoutAccount/LayoutAccout";
import { Home } from "./pages/Account/Home/Home";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/register";
import { LayoutAdmin } from "./layouts/LayoutAdmin/LayoutAdmin";
import AdminRouter from "./routes/AdminRouter";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <LayoutAccout>
            <Home />
          </LayoutAccout>
        }
      ></Route>
      <Route
        path="/products"
        element={<LayoutAccout>Product</LayoutAccout>}
      ></Route>
      <Route
        path="/login"
        element={
          <LayoutAccout>
            <Login />
          </LayoutAccout>
        }
      ></Route>
      <Route
        path="/register"
        element={
          <LayoutAccout>
            <Register />
          </LayoutAccout>
        }
      ></Route>

      {/* Admin */}
      {/* <Route path="/admin" element={<LayoutAdmin />}>
        <Route element={<AdminRouter />}>
          <Route path="/dashboardadmin" element={"dashboardadmin"} />
        </Route>
      </Route> */}
      <Route
        path="/admin"
        element={
          <AdminRouter>
            <LayoutAdmin />
          </AdminRouter>
        }
      >
        <Route path="dashboardadmin" element={"dashboardadmin"} />
        <Route path="product" element={"product"} />
      </Route>
    </Routes>
  );
}

export default App;
