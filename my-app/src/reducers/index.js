import {combineReducers} from "redux";

import products from "./products";
import carts from "./carts";
import messages from './messages';
import itemEditing from './itemEditing';

const appReducers =combineReducers({
    products,
    carts,
    messages,itemEditing
});

export default appReducers;

