import { combineReducers } from "redux";
import appContext from "./appContext";
import medias from "./medias";
import users from "./users";

export default combineReducers({ medias, users, appContext });
