import {createSlice} from '@reduxjs/toolkit'

export const counterSlice=createSlice({
    name:'counter',
    initialState:{value:0},
    reducers:{
        increament:(state)=>{state.value+=1},
        decreament:(state)=>{state.value-=1},
        reset:(state)=>{state.value=0},
    }
})
 export const {increament,decreament,reset}=counterSlice.actions;
 export const counterValue=(state)=>state.counter.value
 export default counterSlice.reducer;