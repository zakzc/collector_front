import { combineReducers } from "redux";
import mediaContext from "./mediaContext";
import medias from "./medias";
import users from "./users";

export default combineReducers({ medias, users, mediaContext });
