import { createSlice } from "@reduxjs/toolkit";
import { message } from 'antd';
import axios from "axios";
axios.defaults.withCredentials = true

// Slices

export const stockSlice = createSlice({
  name: "stockList",
  initialState: {
      loading: true,
      favStocks: [],
      stocks: [1,2,3],
      stock: {},
      news: [1,2,3],
      searchStock: [],
      wee: ""
  },
  reducers: {
    topStocks: (state, action) => {
      state.stocks = action.payload;
      state.loading = false;
    },
    favStocks: (state, action) => {
      state.favStocks = action.payload;
      state.loading = false;
    },
    selectedStock: (state, action) => {
      state.stock = action.payload;
      state.loading = false;
    },
    stockNews: (state, action) => {
      state.news = action.payload;
      state.loading = false;
    },
    stockSearch: (state, action) => {
      state.searchStock = action.payload;
      state.loading = false;
    },
    updateStockSearch: (state, action) => {
      state.searchStock.forEach(stock => {
        if (stock._id === action.payload.id) {
          if (!action.payload.remove) {
            stock.favourite = true
          } else {
            stock.favourite = false
          }
        }
      })
      state.loading = false;
    }
  },
});

  export const selectStock = state => state.stockList;

  export default stockSlice.reducer


  // Actions

  const { topStocks, selectedStock, stockNews, stockSearch, favStocks, updateStockSearch } = stockSlice.actions

  // Get All Stocks for Main Page

  export const getStocks = (dateType, stockType) => async dispatch => {
    const params = {
      dateType: dateType,
      stockType: stockType
    }

    try {
      await axios.get(`http://localhost:5000/api/stocks`, { params }, {withCredentials: true}).then((res) => {
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
      await axios.get(`http://localhost:5000/api/stocks/${stockType}`, {withCredentials: true}).then((res) => {
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

  export const getStockNews = () => async dispatch => {
    try {
      await axios.get(`http://localhost:5000/api/stocks/general/news`, {withCredentials: true}).then((res) => {
          if (res.status === 200) {
            console.log(res, 'resss');
            dispatch(stockNews(res.data.articles))
          } else {

          }
      })
    } catch (e) {
      return console.error(e.message);
    }
  }

  export const searchStock = (searchValue) => async dispatch => {
    console.log(searchValue, 'searching')
    try {
      await axios.get(`http://localhost:5000/api/stocks/general/search`, {
        params: {
          search: searchValue
        }
      }, {withCredentials: true}).then((res) => {
          if (res.status === 200) {
            dispatch(stockSearch(res.data))
          } else {

          }
      })
    } catch (e) {
      return console.error(e.message);
    }
  }

  export const updateUserTicker = (tickerId) => async dispatch => {
    try {
      await axios.put(`http://localhost:5000/api/stocks/user/updateTicker`, { id: tickerId }, {withCredentials: true}).then((res) => {
          if (res.status === 200) {
            message.success(res.data.message)
            dispatch(updateStockSearch(res.data))
          } else {
  
          }
      })
    } catch (e) {
      return console.error(e.message);
    }
  }
  
  export const getStockFavs = () => async dispatch => {
    try {
      await axios.get(`http://localhost:5000/api/stocks/user/favStocks`, {withCredentials: true}).then((res) => {
          if (res.status === 200) {
            console.log(res, 'resss');
            dispatch(favStocks(res.data))
          } else {
  
          }
      })
    } catch (e) {
      return console.error(e.message);
    }
  }
  