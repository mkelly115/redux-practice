import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));


export default store