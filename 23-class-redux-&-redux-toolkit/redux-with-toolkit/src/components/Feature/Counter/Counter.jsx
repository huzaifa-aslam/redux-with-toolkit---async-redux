import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {counterValue,increament,decreament,reset} from './CounterSlice'

export const Counter = () => {
    const counter=useSelector(counterValue)
    const dispatch=useDispatch()
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={()=>dispatch(increament())}>+</button>
            <button  onClick={()=>dispatch(decreament())}>-</button>
            <button onClick={()=>dispatch(reset())}>Reset</button>
        </div>
    )
}
