import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchGreeting = createAsyncThunk('greetings/fetchGreeting', async () => {
  const response = await fetch('http://127.0.0.1:3000/api/v1/greetings');
  const greeting = await response.json();
  return greeting.message;
});

const options = {
  name: 'greeting',
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchGreeting.fulfilled]: (state, action) => action.payload,
  },
};

const greetingSlice = createSlice(options);
export const selectGreeting = (state) => state.greeting;
export default greetingSlice.reducer;
