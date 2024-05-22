import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  user: null,
  isAuth: false,
};

// Create user slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    register:(state, action) => {},
    login: (state, action) => {
      state.user = action.payload;
      state.isAuth = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuth = false;
    },
  },
});

// Export actions
export const { login, logout } = userSlice.actions;

// Export reducer
export default userSlice.reducer;
