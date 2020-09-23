import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './../Feature/Counter/CounterSlice'
import manageProductReducer from './../ManageProducts/ManageProductsSlice'

export const store=configureStore({
    reducer:{
        counter:counterReducer,
        productData:manageProductReducer
    },
})