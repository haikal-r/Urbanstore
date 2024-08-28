import { axiosPrivate } from "@/lib/axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  data: {},
  token: {},
  isLoading: false,
  isError: false,
  isSuccess: false,
};

export const getProfile = createAsyncThunk(
  "profile",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosPrivate("/me");

      return response?.data?.data;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      state.isSuccess = true
    },
    setUser: (state, action) => {
      state.data = action.payload;
      state.isSuccess = true
    },
    reset: (state) => {
      state.data = {};
      state.token = {};
      state.isSuccess = true;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getProfile.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.data = action.payload;
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = action.error.message;
      });
  },
});

export const { setUser, reset, setToken } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.data;
