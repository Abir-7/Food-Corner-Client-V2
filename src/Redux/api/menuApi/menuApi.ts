import { BaseQueryApi } from "@reduxjs/toolkit/query";
import { IMenuItem } from "../../../interface/menuItem.interface";
import { IApiDataResponse } from "../../interface/global.interface";
import { baseApi } from "../baseApi";

const menuApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addMenu: builder.mutation({
      query: (data) => ({
        url: "/menu-item/add-item",
        method: "POST",
        body: data,
      }),
    }),
    getAllMenu: builder.query({
      query: () => ({
        url: "/menu-item",
        method: "GET",
      }),
      transformResponse: (
        res: IApiDataResponse<IMenuItem[]> & BaseQueryApi
      ) => {
        return res.data;
      },
    }),
    getMenuDetails: builder.query({
      query: (arg: { id: string }) => ({
        url: `/menu-item/${arg.id}`,
        method: "GET",
      }),
      transformResponse: (res: IApiDataResponse<IMenuItem> & BaseQueryApi) => {
        return res.data;
      },
    }),
  }),
});
export const {
  useAddMenuMutation,
  useGetAllMenuQuery,
  useGetMenuDetailsQuery,
} = menuApi;
