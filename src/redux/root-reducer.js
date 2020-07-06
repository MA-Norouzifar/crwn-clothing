import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

const persistConfig={
  key:'root', //esentially meaning at what point inside of our reducer object do we want to start storing everyting
  //we want to start from the root 
  storage, // we want to pass storage in as storage
  whitelist:['cart']  // string names of any of the reducer that we want to store
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});
export default persistReducer(persistConfig, rootReducer)
