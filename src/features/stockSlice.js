import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Slices

export const stockSlice = createSlice({
    name: "stockList",
    initialState: {
        loading: true,
        stocks: [1,2,3],
        stock: {}
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
      selectedStock: (state, action) => {
        state.stock = action.payload;
        state.loading = false;
      },
    },
  });

  export const selectStock = state => state.stockList;

  export default stockSlice.reducer


  // Actions

  const { topStocks } = stockSlice.actions
  const { selectedStock } = stockSlice.actions

  // Get All Stocks for Main Page

  export const getStocks = (dateType, stockType) => async dispatch => {
    const params = {
      dateType: dateType,
      stockType: stockType
    }

    try {
      await axios.get(`http://localhost:5000/api/stocks`, { params }).then((res) => {
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

  // Get Single Stock Info

  export const getStock = (stockType) => async dispatch => {
    console.log(stockType, 'typeee');
    try {
      await axios.get(`http://localhost:5000/api/stocks/${stockType}`).then((res) => {
          if (res.status === 200) {
            console.log(res, 'resss');
            dispatch(selectedStock(res.data))
          } else {

          }
      })
    } catch (e) {
      return console.error(e.message);
    }
  }
  