
import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./searchSlice.js"
import appSlice from "./appSlice";
import chatSlice from "./chatSlice"

const store = configureStore({
  reducer: {
    app: appSlice,
    search:searchSlice,
    chat:chatSlice
  },
});
export default store;
