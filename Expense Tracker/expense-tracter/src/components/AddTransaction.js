import React, { useState, useContext } from "react";
import { globalContext } from "./../globalContext/Context";
import { Form, Button } from "react-bootstrap";
export const AddTransaction = () => {
  const [amount, setAmount] = useState(0);
  const [disc, setDisc] = useState("");

  let { addTransaction } = useContext(globalContext);




  function getValue(e) {
    setAmount(e.target.value);
  }

  function getDisc(e) {
    setDisc(e.target.value);
  }

  function onSubmitHandler(e){
e.preventDefault()
    const transObj={
        id:Math.floor(Math.random()*80980809),
        amount:Number(amount),
        disc

    }
    addTransaction(transObj)
}

  return (
    <div>
      <Form onSubmit={onSubmitHandler}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Enter Discription</Form.Label>
          <Form.Control
            required="required"
            type="text"
            onChange={getDisc}
            placeholder="Enter Discription..."
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Enter Amount</Form.Label>
          <Form.Control
            required="required"
            onChange={getValue}
            type="number"
            placeholder="Password"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add
        </Button>
      </Form>
    </div>
  );
};
