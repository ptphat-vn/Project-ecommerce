import { Route, Routes } from "react-router-dom";
import "./App.css";

import { Home } from "./pages/Account/Home/Home";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/register";

import AdminRouter from "./routes/AdminRouter";
import LayoutAdmin from "./layouts/LayoutAdmin/LayoutAdmin";
import { LayoutAccount } from "./layouts/LayoutAccount/LayoutAccount";

function App() {
  return (
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
      {/* <Route path="/admin" element={<LayoutAdmin />}>
        <Route element={<AdminRouter />}>
          <Route path="/dashboardadmin" element={"dashboardadmin"} />
        </Route>
      </Route> */}
      <Route
        path="/admin"
        element={
          // <AdminRouter>
          <LayoutAdmin />
          // </AdminRouter>
        }
      >
        <Route element={<LayoutAdmin />}>
          <Route path="" element={"dsad"} />
          <Route path="product" element={"Product"} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
