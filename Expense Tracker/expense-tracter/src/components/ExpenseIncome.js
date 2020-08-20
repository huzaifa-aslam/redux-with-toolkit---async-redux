import React, { useContext } from "react";
import "./components.css";
import cx from "classnames";
import CountUp from "react-countup";
import { globalContext } from "./../globalContext/Context";
import { CurrentBalance } from "./CurrentBalance";
import "./components.css";

export const ExpenseIncome = () => {
  let { state } = useContext(globalContext);

  const getIncome = () => {
    let income = 0;
    for (var i = 0; i < state.length; i++) {
      if (state[i].amount > 0) {
        income += state[i].amount;
      }
    }
    return income;
  };
  const getExpense = () => {
    let expense = 0;
    for (var i = 0; i < state.length; i++) {
      if (state[i].amount < 0) {
        expense += state[i].amount;
      }
    }
    return expense;
  };
  return (
    <div>
        <CurrentBalance currentBlnce={getIncome() + getExpense()} />

      <div className={cx("flex", "justify-around")}>
        <div className={cx("bgSuccess",'br4','ph3','pv1','tc','textWhite')}>
          <h4>Income</h4>
          <h4>
            $
            <CountUp start={0} end={getIncome()} duration={2.5} separator="," />
          </h4>
        </div>
        <div className={cx("bgDanger",'br4','ph3','pv1','tc','textWhite')}>
          <h4>Expense</h4>
          <h4>
            $
            <CountUp
              start={0}
              end={getExpense()}
              duration={2.5}
              separator=","
            />
          </h4>
        </div>
      </div>
    </div>
  );
};
