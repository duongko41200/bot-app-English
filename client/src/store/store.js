import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './feature/countSlide'
import wordReducer from './feature/word'
import authReducer from './feature/auth'

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		wordStore: wordReducer,
		authStore: authReducer
  },
})