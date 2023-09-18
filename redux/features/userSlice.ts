import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserProfile = {
  profile: {
    role: string;
    username: string;
  };
};

const initialState: UserProfile = {
  profile: {
    role: "",
    username: "",
  },
};

const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserProfile>) => {
      state.profile = action.payload.profile;
    },
    logOut: (state) => {
      state.profile = {
        role: "",
        username: "",
      };
    },
  },
});

export const { setUser, logOut } = usersSlice.actions;

export default usersSlice.reducer;
