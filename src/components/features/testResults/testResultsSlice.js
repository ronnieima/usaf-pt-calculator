import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  upperExercise: null,
  upperReps: null,
  coreExercise: null,
  coreReps: null,
  runExercise: null,
  runResult: null,
};

export const testResultsSlice = createSlice({
  name: "testResults",
  initialState,
  reducers: {
    setRunExercise(state, action) {
      state.runExercise = action.payload;
    },
  },
});

export const { setRunExercise } = testResultsSlice.actions;
export default testResultsSlice.reducer;
