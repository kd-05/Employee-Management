import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Employee } from "../model/employee";

const initialState: Employee[] = [];

// Create the employee slice
const employeeSlice = createSlice({
  name: "employee",
  initialState: initialState,
  reducers: {
    // Reducer to add an employee to the state
    addEmployee: (state: Employee[], action: PayloadAction<Employee>) => {
      state.push(action.payload);
    },
    // Reducer to delete an employee from the state
    deleteEmployee: (state: Employee[], action: PayloadAction<string>) => {
      return state.filter((employee) => employee.id !== action.payload);
    },
    // Reducer to edit an employee in the state
    editEmployee: (state: Employee[], action: PayloadAction<Employee>) => {
      const newData = action.payload;
      const index = state.findIndex(
        (employee) => employee.id === action.payload.id
      );
      if (index !== -1) {
        state[index] = { ...state[index], ...newData };
      }
    },
  },
});

export const { addEmployee, deleteEmployee, editEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
