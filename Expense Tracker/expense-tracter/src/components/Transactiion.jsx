import React, { useContext } from "react";
import "./component.css";
import { globalContext } from "./../globalContext/Context";
import cx from "classnames";
export const Transactiion = () => {
  const { state } = useContext(globalContext);
  const { deleteTransaction } = useContext(globalContext);
  console.log("data  ", state);
  return (
    <div>
      {state.map((item, index) => {
        return (
          <div key={index} className={cx("flex", "justify-between", "bgWhite",'ma1','pa1','br4','ph3','pv1')}>
            <span>{item.disc}</span>
            <span>{item.amount}</span>
          </div>
        );
      })}
    </div>
  );
};
