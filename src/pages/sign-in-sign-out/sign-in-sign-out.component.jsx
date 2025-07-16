import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../sign-up/sign-up.component";
import "./sign-in-sign-out.style.scss";

const SignInSignOut = () => (
  <div className="sign-in-sign-out">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInSignOut;
