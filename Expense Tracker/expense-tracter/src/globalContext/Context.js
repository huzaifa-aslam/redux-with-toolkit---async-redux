import React,{createContext,useReducer} from 'react'
import addReducer from './../reducer/addReducer'

export const initialTransaction=
    [
        {id:1,disc:"Cash",amount:2100},
        {id:2,disc:"Expense",amount:-100},
    ]


export const globalContext=createContext(initialTransaction);



export const TrasactionProvider = ({ children }) => {
  let [state, dispatch] = useReducer(addReducer, initialTransaction);

  // add Transaction function

  function addTransaction(trasnObj){
      dispatch({
        type:"ADD_TRANSACTION",
        payload:trasnObj
      })
  }

  function deleteTransaction(id){
    dispatch({
      type:"DELETE_TRANSACTION",
      payload:id
    })
}

  return (
    <globalContext.Provider
    value={{state,addTransaction,deleteTransaction}}
    >
      {children}
    </globalContext.Provider>
  );
};