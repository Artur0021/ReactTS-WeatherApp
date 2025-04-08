import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { currentWeatherSlice } from './Slices/сurrentWeatherSlice'

const rootReducer = combineReducers({
	currentWeatherSlice: currentWeatherSlice.reducer,
})

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = typeof store
export type AppDispatch = AppStore['dispatch']
