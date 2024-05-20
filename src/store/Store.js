import { configureStore } from '@reduxjs/toolkit';

import AuthReducer from '../slice/AuthSlice';

const Store = configureStore({
  reducer: {
    authReducer: AuthReducer,
  },
});

export default Store;
