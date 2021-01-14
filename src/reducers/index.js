import { combineReducers } from '@reduxjs/toolkit'

import stockReducer from '../features/stockSlice'
import counterReducer from '../features/counter/counterSlice'

const rootReducer = combineReducers({
    stockList: stockReducer,
    counter: counterReducer,
})

export default rootReducer