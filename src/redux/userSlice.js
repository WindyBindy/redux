import { createSlice } from "@reduxjs/toolkit";
import data from "../users.json";


const initialState = {
  users: data, 
  searchValue: "",
}

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    deleteUser: (state, action) => {
     state.users = state.users.filter((user) => user.id !== action.payload);
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    changeSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    resetUsers:(state)=>{
      state.users = data
    }
  },
});

export const { deleteUser, addUser, changeSearchValue, resetUsers } = userSlice.actions;
export default userSlice.reducer;
