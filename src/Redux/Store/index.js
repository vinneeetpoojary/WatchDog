import { applyMiddleware, createStore } from "redux";
import reducer from "../Reducers"
import thunk from "redux-thunk";

const middleware=thunk;
const initialState={};
const Reducer=reducer;

const store=createStore(Reducer,initialState,applyMiddleware(...middleware));

export default store