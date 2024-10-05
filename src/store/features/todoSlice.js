import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    tasks: []
  },
  reducers: {
    addTask: (state, action) => {
        state.tasks = [...state.tasks, action.payload]
    },
    deleteLastTask:  state => {
        state.tasks.pop();
    }
  }
})

export const { addTask, deleteLastTask } = todoSlice.actions

export default todoSlice.reducer