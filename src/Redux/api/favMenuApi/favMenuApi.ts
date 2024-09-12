import { BaseQueryApi } from "@reduxjs/toolkit/query";
import { IFavoriteResponse } from "../../../interface/favMenu.interface";
import { IApiDataResponse } from "../../interface/global.interface";
import { baseApi } from "../baseApi";

const favMenuApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addFavMenu: builder.mutation({
      query: (data) => ({
        url: "/favProduct/add-fav-Product",
        method: "POST",
        body: data,
      }),
    }),
    getAllFavMenu: builder.query({
      query: () => ({
        url: "/favProduct/",
        method: "GET",
      }),
      transformResponse: (
        res: IApiDataResponse<IFavoriteResponse> & BaseQueryApi
      ) => {
        return res.data;
      },
    }),
  }),
});
export const { useAddFavMenuMutation, useGetAllFavMenuQuery } = favMenuApi;
