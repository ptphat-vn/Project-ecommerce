import { Route, Routes } from "react-router-dom";
import "./App.css";
import { LayoutAccout } from "./layouts/LayoutAccount/LayoutAccout";
import { Home } from "./pages/Account/Home/Home";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/register";

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
    </Routes>
  );
}

export default App;
