// store.ts
import { configureStore } from '@reduxjs/toolkit';
import darkModeReducer from './slices/darkModeSlice';
import carPaintReducer from './slices/carPaintSlice';
import carSeatsReducer from './slices/carSeatsSlice';

const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
    carPaint: carPaintReducer,
    carSeats: carSeatsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
