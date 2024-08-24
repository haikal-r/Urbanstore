import { axiosPrivate } from "@/lib/axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  data: {},
  accessToken: null,
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
      state.accessToken = action.payload;
    },
    setUser: (state, action) => {
      state.data = action.payload;
    },
    reset: (state) => {
      state.data = {};
      state.accessToken = null
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getProfile.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      });
  },
});

export const { setUser, reset, setToken } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.data;
