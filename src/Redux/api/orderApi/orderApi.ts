import { BaseQueryApi } from "@reduxjs/toolkit/query";
import { IApiDataResponse } from "../../interface/global.interface";
import { baseApi } from "../baseApi";
import { IOrderResponse } from "../../../interface/order.interface";

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
    // all user order
    getAllUserOrders: builder.query({
      query: (queryOptions: {
        searchTerm?: string;
        sort: string;
        filters: { name: string; value: string }[];
      }) => {
        const params = new URLSearchParams();

        Object.keys(queryOptions).forEach((key) => {
          const value = queryOptions[key as keyof typeof queryOptions];
          if (value !== "" && value !== undefined) {
            if (Array.isArray(value)) {
              value.forEach((filter) => {
                params.append(filter.name, filter.value);
              });
            } else {
              params.append(key, value.toString());
            }
          }
        });

        return {
          url: "/order",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["order"],
      transformResponse: (
        res: IApiDataResponse<IOrderResponse[]> & BaseQueryApi
      ) => {
        return res.data;
      },
    }),
    // all users Pending order
    getAllPendingOrders: builder.query({
      query: () => ({
        url: "/order/pending",
        method: "GET",
      }),
      providesTags: ["order"],
      transformResponse: (
        res: IApiDataResponse<IOrderResponse[]> & BaseQueryApi
      ) => {
        return res.data;
      },
    }),
    updateOrder: builder.mutation({
      query: (arg: { id: string; status: string }) => {
        return {
          url: `/order/${arg.id}`,
          method: "PATCH",
          body: { status: arg.status },
        };
      },
      invalidatesTags: ["order"],
    }),
  }),
});
export const {
  useCreateOrderMutation,
  useGetAllUserOrdersQuery,
  useGetAllPendingOrdersQuery,
  useUpdateOrderMutation,
} = menuApi;
