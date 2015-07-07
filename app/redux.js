import { composeStores, createDispatcher, createRedux } from "redux";
import thunkMiddleware from "redux/lib/middleware/thunk";
import * as reducers from "./reducers";

let initialState;

if (process.env.BROWSER) {
  initialState = window.__payloadData__;
}

const store = composeStores(reducers, initialState);
const dispatcher = createDispatcher(store, (getState) => [
  thunkMiddleware(getState)
]);
const redux = createRedux(dispatcher);

export default redux;