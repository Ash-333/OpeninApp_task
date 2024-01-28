import { configureStore } from "@reduxjs/toolkit";
import csvFileReducer from './csvSlice'

const appStore=configureStore({
    reducer:{
        csvFile:csvFileReducer
    }
})

export default appStore