import React from "react";
// comps
import MediaLayout from "./mediaCollection/mediaLayout";
import Navigation from "./navigation/navigation";
import OutWithGoogle from "./credentials/outWithGoogle";

const AppLayout = () => {
  return (
    <>
      <Navigation />
      <MediaLayout />
      <OutWithGoogle />
    </>
  );
};
export default AppLayout;
