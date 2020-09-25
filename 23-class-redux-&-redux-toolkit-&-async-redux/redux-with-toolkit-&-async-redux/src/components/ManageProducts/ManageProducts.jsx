import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productDataValues, func } from "./ManageProductsSlice";

export const ManageProducts = () => {
  const data = useSelector(productDataValues);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState();
  const [sku, setSku] = useState();
  const [price, setprice] = useState();
  const dispatch = useDispatch();
    // console.log("data",data);
  // myfunc(()=>func())
  return (
    <div>
      <h1>Products Data</h1>
      <table style={{ border: "1px solid" }}>
        <thead>
          <tr>
            <th>name</th>
            <th>quantity</th>
            <th>sku</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          {data.value.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.sku}</td>
                <td>{item.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // console.log(nameValue, func(nameValue));

          dispatch(func({name,quantity,sku,price}));
        }}
      >
        <label>name</label>
        <br />
        <input type="text" onChange={(ev)=>{
          // console.log(ev.target.value);
          setName(ev.target.value)

        }}/>
        <br />
        <label>Quantity</label>
        <br />
        <input type="number" onChange={(ev)=>{
          // console.log(ev.target.value);
          setQuantity(ev.target.value)

        }}/>
        <br />
        <label>sku</label>
        <br />
        <input type="number" onChange={(ev)=>{
          // console.log(ev.target.value);
          setSku(ev.target.value)

        }}/>
        <br />
        <label>price</label>
        <br />
        <input type="number" onChange={(ev)=>{
          // console.log(ev.target.value);
          setprice(ev.target.value)

        }}/>
        <br />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
