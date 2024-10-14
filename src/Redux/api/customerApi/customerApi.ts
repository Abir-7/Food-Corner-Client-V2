import { baseApi } from "../baseApi";

const customerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCustomerInfo: builder.query({
      query: () => ({
        url: "/customer/me",
        method: "GET",
      }),
    }),
  }),
});
export const { useGetCustomerInfoQuery } = customerApi;
