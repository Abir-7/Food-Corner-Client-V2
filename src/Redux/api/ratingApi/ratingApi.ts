import { baseApi } from "../baseApi";

const favMenuApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addRating: builder.mutation({
      query: (data) => ({
        url: "/user-rating/add-rating",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useAddRatingMutation } = favMenuApi;
