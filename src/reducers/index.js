import { combineReducers } from '@reduxjs/toolkit'

import stockReducer from '../features/stockSlice'
import counterReducer from '../features/counter/counterSlice'

const rootReducer = combineReducers({
    stocks: stockReducer,
    counter: counterReducer,
})

export default rootReducer