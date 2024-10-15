import { baseApi } from "../baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCustomerInfo: builder.query({
      query: () => ({
        url: "/user/me",
        method: "GET",
      }),
      providesTags: ["profile"],
    }),
    updateCustomerInfo: builder.mutation({
      query: (data) => ({
        url: "/customer/update-me",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["profile"],
    }),
  }),
});

export const { useGetCustomerInfoQuery, useUpdateCustomerInfoMutation } =
  userApi;
