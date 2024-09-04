import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  token: string | null;
  user: {
    userEmail: string;
    role: string;
    exp: number;
    iat: number;
  } | null;
}

const initialState: UserState = {
  token: null,
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogin: (state, actions: PayloadAction<UserState>) => {
      state.user = actions.payload.user;
      state.token = actions.payload.token;
    },
    userLogout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { userLogin, userLogout } = userSlice.actions;

export default userSlice.reducer;
