
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { eventApi } from './api/events';
import { userApi } from './api/user';

export default configureStore({
  reducer: combineReducers({
    [eventApi.reducerPath]: eventApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      eventApi.middleware,
      userApi.middleware,
    ]),
});
