import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./feature/userSlice/userSlice";
import { baseApi } from "./api/baseApi";
export const store = configureStore({
  reducer: {
    auth: userSliceReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
