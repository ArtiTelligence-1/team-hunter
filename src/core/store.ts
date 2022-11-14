
import { configureStore } from '@reduxjs/toolkit';
import { eventApi } from './api/events';

export default configureStore({
  reducer: {
    [eventApi.reducerPath]: eventApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(eventApi.middleware),
});
