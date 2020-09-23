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
    increament: (state) => {
      state.value += 1;
    },
    func:(state) => {
        state.preventDefault();
      console.log("hello");
    },
    decreament: (state) => {
      state.value -= 1;
    },
  },
});

export const {
  increament,
  decreament,
  reset,
  func,
} = ManageProductsSlice.actions;
export const productDataValues = (state) => ({
  values: state.productData,
});

export default ManageProductsSlice.reducer;
