import { createSlice } from "@reduxjs/toolkit";

export const ManageProductsSlice = createSlice({
  name: "productData",
  initialState: {
    value: [
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
  },

  reducers: {
    func(state, action) {
      console.log("obj", action.payload);
    },
  },
});

export const { func } = ManageProductsSlice.actions;
export const productDataValues = (state) => {
  console.log(state);
  return {
    value: state.productData.value,
  };
};

export default ManageProductsSlice.reducer;
