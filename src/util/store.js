import { configureStore } from "@reduxjs/toolkit";
import userDetailsReducer from "../features/userDetails/userDetailsSlice";
import testResultsReducer from "../features/testResults/testResultsSlice";

const store = configureStore({
  reducer: {
    userDetails: userDetailsReducer,
    testResults: testResultsReducer,
  },
});

export default store;
