//This is the redux store created using redux toolkit
import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/CryptoApi"; //pass this reducer to the redux store

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer, //this is the redux toolkit way of passing the reducer to the store
  },
});
