import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Slices

export const stockSlice = createSlice({
    name: "stocks",
    initialState: {
        loading: true,
        stocks: []
    },
    reducers: {
      topStocks: (state, action) => {
        state.stocks = action.payload;
        state.loading = false;
      },
      favStocks: (state, action) => {
        state.stocks = action.payload;
        state.loading = false;
      },
    },
  });

  export const selectStock = state => state.stocks;

  export default stockSlice.reducer


  // Actions

  const { topStocks } = stockSlice.actions

  export const getStocks = () => async dispatch => {
    try {
      await axios.get("http://localhost:5000/api/stocks").then((res) => {
          if (res.status === 200) {
            console.log(res.data);
            dispatch(topStocks(res.data))
          } else {

          }
      })
    } catch (e) {
      return console.error(e.message);
    }
  }
  