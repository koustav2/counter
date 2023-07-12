import { configureStore } from "@reduxjs/toolkit";
import counterReducer1 from "../features/counter/counterSlice";

export default configureStore({
  reducer: {
    counter: counterReducer1
  }
});
