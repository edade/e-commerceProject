import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import { GlobalReducer } from "./reducers/GlobalReducer";
import { userReducer } from "./reducers/UserReducer";
import { ProductReducer } from "./reducers/ProductReducer";
import { ShoppingCardReducer } from "./reducers/ShoppingCardReducer";
import { thunk } from "redux-thunk";
import { logger } from "./middleware/logger";


export const reducers = combineReducers({
    global: GlobalReducer,
    user:userReducer,
    product: ProductReducer,
    shoppingCard: ShoppingCardReducer,


})

export const store = createStore(reducers, applyMiddleware(logger, thunk));