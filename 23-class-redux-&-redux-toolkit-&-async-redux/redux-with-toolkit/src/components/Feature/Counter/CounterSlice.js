import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'

export const fetchRandomNumber=createAsyncThunk(
    'number/fetchRandomNumber',
    async (data,thunkAPI)=>{
        const response=await fetch('/api/randomnumber');
        const result=await response.json();
        return result
    }
)

export const counterSlice=createSlice({
    name:'counter',
    initialState:{value:0,isLoading:false},
    reducers:{
        increament:(state)=>{state.value+=1},
        decreament:(state)=>{state.value-=1},
        reset:(state)=>{state.value=0},
    },
    extraReducers:{
        [fetchRandomNumber.fulfilled]:(state,action)=>{
            console.log("api hit the server")
            state.isLoading=false
             state.value+=action.payload
        },
        [fetchRandomNumber.rejected]:(state,action)=>{
            console.log("api rejected")
            state.isLoading=false
        },
        [fetchRandomNumber.pending]:(state,action)=>{
            console.log("pending");
            state.isLoading=true
        }
    }
})
 export const {increament,decreament,reset}=counterSlice.actions;
 export const counterValue=(state)=>({
     value:state.counter.value,
     isloading:state.counter.isLoading
 })
 export default counterSlice.reducer;