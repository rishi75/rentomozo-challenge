import { createStore, applyMiddleware } from "redux";
import {createLogicMiddleware } from 'redux-logic'
import { ajax } from 'rxjs/ajax'
import rootReducer from './reducer'
// import rootLogic from "./logic";

const configureStore = (initialStore = {}) => {
    const deps = { httpClient: ajax }
    const middleware = createLogicMiddleware([], deps)
    return createStore(rootReducer, initialStore, applyMiddleware(...[middleware]))
}

export default configureStore