import { React, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "./redux/user/user-selector";
import { getUserAuth } from "./redux/user/user-action";

import Homepage from "./pages/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInSignOut from "./pages/sign-in-sign-out/sign-in-sign-out.component";
import Checkout from "./pages/checkout/checkout.page";

import "./App.css";

const App = () => {
  const structuredSelector = createStructuredSelector({
    user: selectCurrentUser,
  });
  const currentUser = useSelector(structuredSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsuscribeFromAuth = dispatch(getUserAuth());

    return () => {
      if (unsuscribeFromAuth) unsuscribeFromAuth();
    };
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route
          path="/signIn"
          element={
            currentUser ? <Navigate to="/" replace /> : <SignInSignOut />
          }
        />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
};

export default App;
