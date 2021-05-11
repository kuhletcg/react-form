import { combineReducers } from "redux";
import workShopReducer from "./workShopReducer";

const rootReducer = combineReducers({
  workShop: workShopReducer,
});

export default rootReducer;
