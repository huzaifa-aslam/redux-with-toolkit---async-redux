import { createSlice } from "@reduxjs/toolkit";

export const ManageProductsSlice = createSlice({
  name: "productData",
  initialState: [
    {
      name: "T-Shirt",
      quantity: 100,
      sku: "1",
      price: 200,
    },
    {
      name: "T-Shirt",
      quantity: 200,
      sku: "1",
      price: 200,
    },
  ],

  reducers: {
    func(state, action) {
      const {name,quantity,sku,price}=action.payload;
      state.push({name,quantity,sku,price})
      console.log("obj", action.payload);
      // console.log("state", state.initialState.quantity);


      // console.log("state.initialState", state.productData.initialState.value);
      // state.initialState=action.payload
    },
  },
});

export const { func } = ManageProductsSlice.actions;
export const productDataValues = (state) => {
  console.log(state);
  return {
    value: state.productData,
  };
};

export default ManageProductsSlice.reducer;
