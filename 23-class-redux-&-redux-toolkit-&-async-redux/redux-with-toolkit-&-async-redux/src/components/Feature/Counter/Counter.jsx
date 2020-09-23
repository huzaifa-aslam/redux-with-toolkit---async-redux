import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {counterValue,increament,decreament,reset,fetchRandomNumber} from './CounterSlice'

export const Counter = () => {
    const counter=useSelector(counterValue)
    const dispatch=useDispatch()
    if(counter.isloading)
    {
        return <h3>Loading...</h3>
    }
    return (

        <div>
            <h1>{counter.value}</h1>
            <button onClick={()=>dispatch(increament())}>+</button>
            <button  onClick={()=>dispatch(decreament())}>-</button>
            <button onClick={()=>dispatch(reset())}>Reset</button>
            <button onClick={()=>dispatch(fetchRandomNumber())}>Fetch from Server</button>
        </div>
    )
}
