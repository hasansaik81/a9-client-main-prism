import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://a9-server-main-prisma.vercel.app/",
    // baseUrl: "http://localhost:3000/api",
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;

      if (token) {
        headers.set("authorization", token);
      }

      return headers;
    },
  }),
  tagTypes: [
    "Shop",
    "Product",
    "Category",
    "User",
    "Review",
    "Coupon",
    "Follow",
  ],
  endpoints: () => ({}),
});

export default baseApi;
