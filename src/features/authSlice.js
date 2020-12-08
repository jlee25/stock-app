import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: {}
    },
    reducers: {
        userInfo: (state, action) => {
            state.user = action.payload;
        }
    },
});

export const user = state => state.user;

export default authSlice.reducer

const { userInfo } = authSlice.actions

export const login = (email, password) => async dispatch => {
    try {
      await axios.post(`http://localhost:5000/api/user/login`, {
        email,
        password
      }).then((res) => {
          if (res.status === 200) {
            console.log(res.data);
            dispatch(userInfo(res.data))
          } else {

          }
      })
    } catch (e) {
      return console.error(e.message);
    }
  }