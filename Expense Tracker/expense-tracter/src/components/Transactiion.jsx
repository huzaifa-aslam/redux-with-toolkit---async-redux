import React,{useContext} from 'react'
import './component.css'
import {globalContext} from './../globalContext/Context'
export const Transactiion = () => {
    const {transaction}=useContext(globalContext)
    const {deleteTransaction}=useContext(globalContext)
    console.log("data  ",transaction)
    return (
        <div>

            {transaction.map((item,index)=>{
                return(

                   <div key={index}>
                        <li><span>{item.disc}</span> <span>{item.amount}</span><button onClick={()=>{deleteTransaction(item.id)}}>X</button></li>

                   </div>
                )
            })}
        </div>
    )
}
