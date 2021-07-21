import { useSelector } from "react-redux";

const useCheckForUser = () => {
  let userHasId = useSelector((state) => state.users.userID);
  let userHasName = useSelector((state) => state.users.name);

  if (
    userHasId !== null &&
    userHasId !== undefined &&
    userHasName !== null &&
    userHasName !== undefined
  ) {
    return true;
  } else {
    return false;
  }
};

export default useCheckForUser;
