import { BaseQueryApi } from "@reduxjs/toolkit/query";
import { IMenuItem } from "../../../interface/menuItem.interface";
import { IApiDataResponse } from "../../interface/global.interface";
import { baseApi } from "../baseApi";
import { IAddItemForm } from "../../../interface/formData.interface";

const menuApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addMenu: builder.mutation({
      query: (data) => ({
        url: "/menu-item/add-item",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["menu"],
    }),
    getAllMenu: builder.query({
      query: (queries) => {
        const params = new URLSearchParams();
        Object.keys(queries).forEach((key) => {
          const value = queries[key];
          if (value !== "" && value !== undefined) {
            params.append(key, value.toString());
          }
        });
        return {
          url: "/menu-item",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (
        res: IApiDataResponse<IMenuItem[]> & BaseQueryApi
      ) => {
        return { data: res.data, meta: res.meta };
      },
      providesTags: ["menu"],
    }),
    getMenuDetails: builder.query({
      query: (arg: { id: string }) => ({
        url: `/menu-item/${arg.id}`,
        method: "GET",
      }),
      providesTags: ["menu"],
      transformResponse: (res: IApiDataResponse<IMenuItem> & BaseQueryApi) => {
        return res.data;
      },
    }),
    updateMenu: builder.mutation({
      query: (arg: { id: string; data: Partial<IAddItemForm> }) => ({
        url: `/menu-item/${arg.id}`,
        method: "PATCH",
        body: arg.data,
      }),
      invalidatesTags: ["menu"],
    }),
    deleteMenu: builder.mutation({
      query: (arg: { id: string }) => ({
        url: `/menu-item/${arg.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["menu"],
    }),
  }),
});
export const {
  useAddMenuMutation,
  useGetAllMenuQuery,
  useGetMenuDetailsQuery,
  useUpdateMenuMutation,
  useDeleteMenuMutation,
} = menuApi;
