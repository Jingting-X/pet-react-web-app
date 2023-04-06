import { createSlice } from "@reduxjs/toolkit";
import whoArray from "../home/data/who.json";

const whoSlice = createSlice({
  name: "who",
  initialState: whoArray
});
export default whoSlice.reducer;