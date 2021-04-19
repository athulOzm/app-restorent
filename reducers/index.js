import { combineReducers } from "redux";
import Auth from './Auth'
import Loading from "./Loading";
import File from "./File";

export default rootReducers = combineReducers({

    Auth : Auth,
    Loading : Loading,
    File:File
})