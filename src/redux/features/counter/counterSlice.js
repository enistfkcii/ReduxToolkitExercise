import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter : 0
}
//reducers kısmı bizim normalde kullandıgımız fonksiyonlara işaret olacak.
export const counterSlice = createSlice({
    name : "counter",
    initialState,
    reducers:{
        decrement : (state) => {
            state.counter -= 1
        },
        increment : (state) => {
            state.counter += 1
        },
        incrementCustom : (state,action) => {
            state.counter += action.payload
        }
    } // burdaki fonksiyonları kullanabilmek için action üzerinden dispatch etmem gerek.
})

export const {decrement,increment,incrementCustom} = counterSlice.actions

export default counterSlice.reducer