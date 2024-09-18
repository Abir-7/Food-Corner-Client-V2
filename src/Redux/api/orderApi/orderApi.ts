import { baseApi } from "../baseApi";

const menuApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (data) => ({
        url: "/order/make-payment",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["order"],
    }),
  }),
});
export const { useCreateOrderMutation } = menuApi;
