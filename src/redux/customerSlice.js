import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  phone: '',
  email: '',
  photo: null,
};

const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    setCustomer: (state, action) => {
      state.name = action.payload.name;
      state.phone = action.payload.phone;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },
  },
});

export const { setCustomer } = customerSlice.actions;

export default customerSlice.reducer;
