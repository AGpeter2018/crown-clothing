import { React, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { connect } from "react-redux";
import "./App.css";
import Homepage from "./pages/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInSignOut from "./pages/sign-in-sign-out/sign-in-sign-out.component";

// import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
// import { setCurrentUser } from "./redux/user/user-action";
import { getUserAuth } from "./redux/user/user-action";

const App = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
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
      </Routes>
    </div>
  );
};

// const mapStateToProps = ({ user }) => ({
//   currentUser: user.currentUser,
// });

// const mapDispatchToProps = (dispatch) => ({
//   setCurrentUser: (user) => dispatch(setCurrentUser(user)),
// });

export default App;
