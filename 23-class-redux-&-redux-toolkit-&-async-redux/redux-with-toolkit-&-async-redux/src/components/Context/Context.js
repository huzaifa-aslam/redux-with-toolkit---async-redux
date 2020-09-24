import React, { createContext, useReducer } from "react";
import transReducer from "./../Reducer/Reducer";
const initialTransaction = [
    { id: 1, desc: "cash", amount: 100,quantity:200 },
];

export const trnsaction = createContext(initialTransaction);

export const TrasactionProvider = ({ children }) => {
  let [state, dispatch] = useReducer(transReducer, initialTransaction);

  // add Transaction function

  function addTransaction(transObj) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: {
        amount: transObj.amount,
        desc: transObj.desc,
        quantity:transObj.quantity
      },
    });
  }

  return (
    <trnsaction.Provider
      value={{
        trnsaction: state,
        addTransaction,
      }}
    >
      {children}
    </trnsaction.Provider>
  );
};
