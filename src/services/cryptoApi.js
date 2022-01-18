//This is the used to fetch data from rapidApi using redux toolkit
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": "87d2f6b731mshd73175645ecdfc2p17c153jsn19f21e0eee88",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi", //this is for specifying the purpose of the reducer
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),

      getCryptoDetails: builder.query({
        query: (coinId) => createRequest(`/coin/${coinId}`),

        getCryptoHistory: builder.query({
          query: ({ coinId, timeperiod }) =>
            createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
        }),
      }),
    }),
  }),
});

export const {
  useGetCryptosQuery, //this is the hook created by redux toolkit to retrieve data from endpoint
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} = cryptoApi;
