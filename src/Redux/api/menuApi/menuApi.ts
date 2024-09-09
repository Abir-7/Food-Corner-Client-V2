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
  }),
});
export const { useAddMenuMutation } = menuApi;
