import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit'
// eslint-disable-next-line import/no-cycle
import counterReducer from '../features/counter/counterSlice'
import introReducer from '../features/intro/introSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    intro: introReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
