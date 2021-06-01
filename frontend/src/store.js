import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import {
  portfolioDetailsReducer,
  portfolioListReducer,
} from "./reducers/portfolioReducers";

const initialState = {};
const reducer = combineReducers({
  portfolioList: portfolioListReducer,
  portfolioDetails: portfolioDetailsReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
