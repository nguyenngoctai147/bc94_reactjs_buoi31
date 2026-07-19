import { configureStore } from "@reduxjs/toolkit";
import manageEmployeeSlice from "./../ex_ReactjsFormValidation/slice";

const store = configureStore({
  reducer: {
    manageEmployeeSlice,
  },
});

export default store;
