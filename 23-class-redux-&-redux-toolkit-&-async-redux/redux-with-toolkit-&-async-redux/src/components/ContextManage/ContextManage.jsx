import React, { useContext, useState } from "react";
import { trnsaction } from "./../Context/Context";


function ContextManage() {
  let transactions = useContext(trnsaction);

  //let { addTransaction } = useContext(trnsaction);
  let [newDesc, setDesc] = useState("");
  let [newAmount, setAmount] = useState(0);
  const handleAddition = (event) => {
    event.preventDefault();

    if (Number(newAmount) === 0 || newDesc === "") {
      alert(`Please Add some amount And/Or Description !!`);

      return false;
    }
    transactions.addTransaction({
      amount: Number(newAmount),
      desc: newDesc,
    });
    setAmount(0);
    setDesc("");
  };


  return (
    <div className="measure bg-light-gray pl-5 pr-5 pt-2 pb-3">




      <div className="history">
        {transactions?.trnsaction.map((transObj, ind) => {

            return (
              <div

                key={ind}
              >
                <span>{transObj.desc}</span>
                <span>{transObj.amount}</span>
              </div>
            );

        })}
      </div>

      <div>
        <h5>Add new Transaction</h5>
        <hr />
      </div>
      <form onSubmit={handleAddition}>
        <label>
          Description
          <br />
          [e.x. Cash,Expense]
        </label>
        <br />
        <input
          required
          value={newDesc}

          type="text"
          onChange={(ev) => setDesc(ev.target.value)}
          placeholder="Enter Description..."
        />
        <br />
        <label>Amount</label>
        <br />
        <input
          required
          value={newAmount}

          type="number"
          onChange={(ev) => setAmount(ev.target.value)}
          placeholder="Enter amount..."
        />
        <br />
        <button type="submit" >
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default ContextManage;
