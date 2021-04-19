import { combineReducers } from "redux";
import Auth from './Auth'
import Loading from "./Loading";
import File from "./File";
import Product from "./Product";
import Category from "./Category";
import Cart from "./Cart";

export default rootReducers = combineReducers({

    Auth : Auth,
    Loading : Loading,
    Product : Product,
    Category : Category,
    Cart : Cart
})