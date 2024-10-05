import { configureStore } from '@reduxjs/toolkit';
import tdoReducer from './features/todoSlice'

export default configureStore({
  reducer: {
    todo: tdoReducer
  }
})