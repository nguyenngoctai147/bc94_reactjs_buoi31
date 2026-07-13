import { configureStore } from "@reduxjs/toolkit";
import manageStudentSlice from "./../ex_ReactjsFormValidation/slice"

const store = configureStore({
    reducer: {
        manageStudentSlice,
    },
});

export default store;