import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import User from "../../models/User";

export interface UserState {
  isLoggedIn: Boolean;
  user: User | null;
}

const initialState: UserState = {
  isLoggedIn: false,
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsLoggedIn: (state: UserState, action: PayloadAction<Boolean>) => {
      state.isLoggedIn = action.payload;
    },
    setLoggedInUser: (state: UserState, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setIsLoggedIn, setLoggedInUser } = userSlice.actions;

export default userSlice.reducer;
