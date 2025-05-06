import { configureStore } from '@reduxjs/toolkit';
import customerReducer from './customerSlice';
import taskReducer from './taskSlice';

export default configureStore({
  reducer: {
    customer: customerReducer,
    tasks: taskReducer,
  },
});
