import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Slices

export const stockSlice = createSlice({
    name: "stocks",
    initialState: {
        loading: 'idle',
        stocks: []
    },
    reducers: {
      topStocks: (state, action) => {
        console.log("Action", action);
        state.stocks = state.push(action);
      },
      favStocks: (state, action) => {
        console.log("Action", action);
        state.stocks = state.push(action);
      },
    },
  });

  export default stockSlice.reducer


  // Actions

  const { topStocks } = stockSlice.actions

  export const getStocks = () => async dispatch => {
    try {
      await axios.get("http://localhost:5000/api/stocks").then((res) => {
          console.log('helloooo');
          console.log(res);
      })
    } catch (e) {
      return console.error(e.message);
    }
  }