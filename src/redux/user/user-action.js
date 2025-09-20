// import { userActionType } from "../user/action-type";
import { userActionType } from "./action-type";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

export const setCurrentUser = (user) => ({
  type: userActionType.SET_CURRENT_USER,
  payload: user,
});

export const getUserAuth = () => {
  return (dispatch) => {
    const unsuscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          dispatch(
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data(),
            })
          );
        });
      } else {
        dispatch(setCurrentUser(null));
      }
    });
    return unsuscribeFromAuth;
  };
};

export const signOutAuth = () => {
  return async (dispatch) => {
    try {
      auth.signOut();
      dispatch(setCurrentUser(null));
    } catch (error) {
      console.log(error.message);
    }
  };
};
