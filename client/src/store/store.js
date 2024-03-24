import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/countSlide'

export const store = configureStore({
	reducer: {
		counter: counterReducer,
  },
})