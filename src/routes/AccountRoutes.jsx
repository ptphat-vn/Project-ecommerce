import React from "react";
import { Route } from "react-router-dom";
import { LayoutAccount } from "../layouts/LayoutAccount/LayoutAccount";
import { Home } from "../pages/Account/Home/Home";

export const AccountRouter = () => {
  return (
    <>
      <Route
        path="/"
        element={
          <LayoutAccount>
            <Home />
          </LayoutAccount>
        }
      ></Route>
    </>
  );
};
