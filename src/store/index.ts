import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';

import postsSlice from './slices/postsSlice/postsSlice';

const rootReducer = combineReducers({
  postsSlice,
});

export const store: ToolkitStore = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
