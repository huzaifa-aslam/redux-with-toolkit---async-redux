import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { productDataValues,func } from "./ManageProductsSlice";

export const ManageProducts = () => {
  const data = useSelector(productDataValues);
  const myfunc = useDispatch();
//   console.log("data",data.);
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
          {data.values.map((item, index) => {
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
      <form onSubmit={()=>myfunc(func())}>
          <label>name</label><br/>
          <input type="text"/><br/>
          <label>Quantity</label><br/>
          <input type="number"/><br/>
          <label>sku</label><br/>
          <input type="number"/><br/>
          <label>price</label><br/>
          <input type="number"/><br/>
          <button type="submit">Add</button>
      </form>
    </div>
  );
};
