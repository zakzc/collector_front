import { combineReducers } from "redux";
import appContext from "./appContext";
// import auth from "./auth";
import errors from "./errors";
import medias from "./medias";
import users from "./users";

export default combineReducers({ medias, users, appContext, errors });
