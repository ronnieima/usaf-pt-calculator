import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gender: null,
  age: null,
};

export const userDetailsSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
    setGender(state, action) {
      state.gender = action.payload;
    },
    setAge(state, action) {
      state.age = action.payload;
    },
  },
});

export const { setGender, setAge } = userDetailsSlice.actions;

export default userDetailsSlice.reducer;
