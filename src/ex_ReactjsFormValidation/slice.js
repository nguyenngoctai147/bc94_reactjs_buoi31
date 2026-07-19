import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listArr: [],
  employee: { id: "", name: "", phone: "", email: "" },
  delSelectItem: null,
};

const findIndexEmployee = (data, id) => {
  return data.findIndex((item) => item.id === id);
};

const manageEmployeeSlice = createSlice({
  name: "manageEmployeeSlice",
  initialState,
  reducers: {
    onAddItemEmployee: (state, action) => {
      const { payload } = action;
      const infoEmployee = {
        id: payload.maNV,
        name: payload.hoTen,
        phone: payload.soDT,
        email: payload.email,
      };

      const listEmployeeArr = [...state.listArr];
      const index = findIndexEmployee(state.listArr, payload.maNV);
      if (index !== -1) {
        alert("Mã nhân viên tồn tại");
      } else {
        listEmployeeArr.push(infoEmployee);
      }
      state.listArr = listEmployeeArr;
    },
    onGetItemEmployee: (state, action) => {
      const { payload } = action;
      const index = findIndexEmployee(state.listArr, payload);
      const clone = [...state.listArr];
      if (index !== -1) {
        state.employee = clone[index];
      } else {
        state.employee = { id: "", name: "", phone: "", email: "" };
      }
    },
    clearItemEmployee: (state) => {
      state.employee = { id: "", name: "", phone: "", email: "" };
    },
    onUpdateItemEmployee: (state, action) => {
      const { payload } = action;
      const index = findIndexEmployee(state.listArr, payload.id);
      if (index !== -1) {
        state.listArr[index] = {
          id: payload.id,
          name: payload.name,
          phone: payload.phone,
          email: payload.email,
        };
        state.employee = state.listArr[index];
      }
    },
    onDeleteItemEmployee: (state, action) => {
      const { payload } = action;
      const index = findIndexEmployee(state.listArr, payload);
      if (index !== -1) {
        state.delSelectItem = index;
      }
    },
    onConfirmDeleteEmployee: (state, action) => {
      const { payload } = action;
      state.listArr.splice(payload, 1);
    },
  },
});

export const {
  onAddItemEmployee,
  onGetItemEmployee,
  clearItemEmployee,
  onUpdateItemEmployee,
  onDeleteItemEmployee,
  onConfirmDeleteEmployee,
} = manageEmployeeSlice.actions;

export default manageEmployeeSlice.reducer;
