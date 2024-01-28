import { createSlice } from "@reduxjs/toolkit";

const csvSlice = createSlice({
  name: "csvFile",
  initialState: {
    csvFile: null,
  },
  reducers: {
    addCsv: (state, action) => {
      state.csvFile = action.payload;
    },
    removeCsv: (state, action) => {
      return null
    },
  },
});

export const { addCsv, removeCsv,addSelectedItem,removeSelected} = csvSlice.actions;
export default csvSlice.reducer;
