import { combineReducers } from 'redux'
const initialState = {

}

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}
const rootReducer = combineReducers({
    mainReducer
})

export default rootReducer