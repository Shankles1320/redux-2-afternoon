import { createStore, combineReducers, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import BudgetReducer from "./Ducks/BudgetReducer";
import userReducer from "./Ducks/userReducer";

var rootReducer = combineReducers({
	budget: BudgetReducer,
	user: userReducer
});

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));
