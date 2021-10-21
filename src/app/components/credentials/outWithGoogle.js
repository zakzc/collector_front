import React from "react";
import { useDispatch } from "react-redux";
import { GoogleLogout } from "react-google-login";
// store
import { logUserOut } from "../../../store/users";

const OutWithGoogle = () => {
  const dispatch = useDispatch();
  const logOutSuccess = () => {
    dispatch(logUserOut);
    console.log("Log out success");
    //console.clear();
  };
  return (
    <GoogleLogout
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
      buttonText="Sign Out"
      onLogoutSuccess={logOutSuccess}
      onClick={logOutSuccess}
    />
  );
};
export default OutWithGoogle;
