import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { animalApi } from './APIanimalSlice' 


export const store = configureStore({
  reducer: {
    [animalApi.reducerPath]: animalApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(animalApi.middleware),
})



setupListeners(store.dispatch)