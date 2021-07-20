import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
// comps
import LoadingSpinner from "../components/views/loadingSpinner";
import MediaLayout from "./mediaCollection/mediaLayout";
import { logUserOut } from "../../store/users";

const Layout = () => {
  // * data
  const dispatch = useDispatch();
  let history = useHistory();
  let checkForUser = useSelector((state) => state.users.currentUserId);
  let loading = useSelector((state) => state.users.loading);

  // * view
  if (loading === true) {
    return <LoadingSpinner />;
  } else if (checkForUser === null) {
    dispatch(logUserOut());
    history.push("/logIn");
  } else {
    return <MediaLayout />;
  }
};
export default Layout;

// <>
//   {checkForUser === true ? (
//     <>
//       <MediaLayout />
//     </>
//   ) : (
//     <AppIsOffline />
//   )}
// </>
