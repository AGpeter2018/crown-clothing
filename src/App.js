import React, {useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";


import Homepage from "./pages/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import HeaderContainer from "./components/header/header-container";
import SignInSignOut from "./pages/sign-in-sign-out/sign-in-sign-out.component";
import CheckoutPageContainer from "./pages/checkout/checkoutPage-container";
import CurrentUser from "./user/user.context";
import "./App.css";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null)
  useEffect(() => {
    const unsuscribeFromAuth = auth.onAuthStateChanged(async(AuthUser) => {
      if(AuthUser) {
        const userRef = await createUserProfileDocument(AuthUser)
        userRef.onSnapshot(onSnapshot => {
          setCurrentUser({
           id: onSnapshot.id,
            ...onSnapshot.data()
          })
        })
      } else{
        setCurrentUser(null)
      }
    })

    return () => {
       unsuscribeFromAuth();
    };
  }, []);

  return (
    <div>
      <CurrentUser.Provider value={{currentUser}}>
      <HeaderContainer />
      </CurrentUser.Provider>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop/*" element={<ShopPage />} />
        <Route
          path="/signIn"
          element={
            currentUser ? <Navigate to="/" replace /> : <SignInSignOut />
          }
        />
        <Route path="/checkout" element={<CheckoutPageContainer />} />
      </Routes>
    </div>
  );
};

export default App;
