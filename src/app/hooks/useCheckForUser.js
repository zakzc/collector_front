import { useSelector } from "react-redux";

const useCheckForUser = () => {
  let userConnected = useSelector((state) => state.users.userConnected);
  let userHasId = useSelector((state) => state.users.userID);
  let userHasName = useSelector((state) => state.users.name);
  let userIsInStore = localStorage.getItem("user_ID");

  if (userConnected === true) {
    return true;
  } else {
    if (
      userHasId === null ||
      userHasId === undefined ||
      userHasName === null ||
      userHasName === undefined ||
      userIsInStore === null
    ) {
      return false;
    } else {
      return true;
    }
  }
};

export default useCheckForUser;
